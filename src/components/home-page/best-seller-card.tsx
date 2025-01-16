import Link from "next/link";

interface Props {
  id: number;
  title: string;
  image: string;
  price: string;
}

export default function BestSellerCard({ id, title, image, price }: Props) {
  return (
    <article className="w-full min-w-72">
      <Link href={`/details/${id}`} className="flex w-full flex-col gap-4">
        <img
          src={image}
          alt={title}
          className="aspect-[1270/1679] w-full bg-cover"
        />

        <footer className="flex justify-between px-2">
          <h3 className="text-lg">{title}</h3>

          <span className="text-lg font-bold">${price}</span>
        </footer>
      </Link>
    </article>
  );
}
