interface Props {
  title: string;
  image: string;
  price: string;
}

export default function BestSellerCard({ title, image, price }: Props) {
  return (
    <article className="flex w-full min-w-72 flex-col gap-4">
      <a href="">
        <img src={image} alt={title} className="aspect-[0.7] w-full bg-cover" />

        <footer className="flex justify-between px-2">
          <h3 className="text-lg">{title}</h3>

          <span className="text-lg font-bold">${price}</span>
        </footer>
      </a>
    </article>
  );
}
