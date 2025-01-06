"use client";

import { vexor } from "@/lib/vexor";
import { VexorPaymentResponse } from "vexor";
import { useTransition } from "react";

import Button from "./button";

import { Template } from "@/interfaces";

interface Props {
  template: Template;
}

export default function BuyNowButton({ template }: Props) {
  const formattedTemplate = {
    id: template.id.toString(),
    title: template.title,
    description: template.shortDescription,
    quantity: 1,
    unit_price: template.price.amount,
  };

  const [isPending, startTransition] = useTransition();

  const handlePurchase = async () => {
    startTransition(async () => {
      try {
        const response: VexorPaymentResponse = await vexor.pay.mercadopago({
          items: [formattedTemplate],
        });

        window.location.href = response.payment_url;
      } catch (error) {
        console.error("Purchase failed:", error);
        // Handle error (e.g., show an error message to the user)
      }
    });
  };

  return (
    <Button className="bg-black" onClick={handlePurchase} disabled={isPending}>
      {isPending ? "Loading..." : "Buy Now"}
    </Button>
  );
}
