interface Props {
  number: number;
  title: string;
  description: string;
}

export default function StepComponent({ number, title, description }: Props) {
  return (
    <article className="flex items-center gap-4">
      <span className="grid size-10 shrink-0 place-content-center rounded-full border border-white/20 bg-primary text-lg font-semibold">
        {number}
      </span>
      <div>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-white/80">{description}</p>
      </div>
    </article>
  );
}
