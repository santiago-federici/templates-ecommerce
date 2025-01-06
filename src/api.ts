import { readFileSync, writeFileSync } from "node:fs";

import { MercadoPagoConfig, Preference, Payment } from "mercadopago";
import { revalidatePath } from "next/cache";
import { Template } from "./interfaces";

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

// Interface to store the sold templates data
interface DBSoldTemplate {
  id: number;
  title: string;
  unit_price: number;
}

const api = {
  product: {
    async list(): Promise<DBSoldTemplate[]> {
      const db = readFileSync("data.db");

      // Devolvemos los datos como un array de objetos
      return JSON.parse(db.toString());
    },
    async submit(template: Template) {
      const { id, price, title, thumbnail, shortDescription } = template;

      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      const preference = await new Preference(mercadopago).create({
        body: {
          items: [
            {
              id: "template-" + id,
              unit_price: price.amount,
              quantity: 1,
              title,
              category_id: "virtual_goods", // this is the list of the category ids that mercado pago suggests: https://api.mercadopago.com/item_categories
              description: shortDescription,
              currency_id: price.currency,
              picture_url: thumbnail,
            },
          ],
          metadata: {
            title,
            unit_price: price.amount,
          },
          back_urls: {
            success: "https://localhost:3000/success",
            failure: "https://localhost:3000/failure",
            pending: "https://localhost:3000/pending",
          },
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      // return preference.init_point!;
      return preference.sandbox_init_point;
    },
    async add(id: string): Promise<void> {
      // Obtenemos el pago
      const payment = await new Payment(mercadopago).get({ id });

      // Si se aprueba, agregamos el mensaje
      if (payment.status === "approved") {
        // Obtenemos los datos
        const db = await this.list();

        // Si ya existe un mensaje con el id del pago, lanzamos un error
        if (db.some((message) => message.id === payment.id)) {
          throw new Error("Payment already added");
        }

        // Agregamos el nuevo mensaje
        db.push({
          id: payment.id!,
          title: payment.metadata.title,
          unit_price: payment.metadata.unit_price,
        });

        // Guardamos los datos
        writeFileSync("data.db", JSON.stringify(db, null, 2));

        // Revalidamos la página de inicio para mostrar los datos actualizados
        revalidatePath("/");
      }
    },
  },
};

export default api;
