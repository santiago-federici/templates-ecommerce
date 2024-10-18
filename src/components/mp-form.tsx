import api from "@/api";
import { redirect } from "next/navigation";

export async function MPForm() {
  const messages = await api.product.list();

  async function pay(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const unit_price = Number(formData.get("unit_price") as string);

    const url = await api.product.submit(title, unit_price);

    redirect(url);
  }

  return (
    <main>
      <form
        className="flex flex-col gap-4 w-96 mx-auto mt-40 rounded-md shadow p-8 bg-card text-card-foreground"
        action={pay}
      >
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="unit_price">Price</label>
        <input type="number" id="unit_price" name="unit_price" />

        <button
          type="submit"
          className="bg-primary text-gray-200 rounded-md font-medium px-3 py-2 text-sm mt-4"
        >
          Submit
        </button>
      </form>

      <ul className="grid gap-2">
        {messages.map((message) => (
          <li key={message.id} className="rounded bg-blue-400/10 p-4">
            {message.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
