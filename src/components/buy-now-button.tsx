import { redirect } from "next/navigation";
import api from "@/api";
import Button from "./button";
import { Template } from "@/interfaces";

interface Props {
  template: Template;
}

export default function BuyNowButton({ template }: Props) {
  const pay = async () => {
    "use server";

    console.log("clicked1");

    const url = await api.product.submit(template);

    redirect(url!);
  };

  return (
    <form action={pay}>
      <Button className="bg-black" type="submit">
        Buy Now
      </Button>
    </form>
  );
}
