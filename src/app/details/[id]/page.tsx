import Image from "next/image";

import Button from "@/components/button";
import { Wrapper } from "@/components/wrapper";

import { Template } from "@/interfaces";
import { templates } from "@/templates";

export default function DetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const template: Template | undefined = templates.find(
    (template) => template.id === Number(id),
  );

  if (!template) return;

  const {
    title,
    category,
    mediumDescription,
    techStack,
    image,
    largeDescription,
    screenshots,
  } = template;

  return (
    <Wrapper className="space-y-20">
      <article className="flex gap-40">
        <div className="space-y-5">
          <p className="text-muted-foreground">{category}</p>

          <h2 className="text-4xl font-bold">{title}</h2>

          <p className="text-muted-foreground">{mediumDescription}</p>

          <ul className="flex gap-3">
            {techStack.map((tech, index) => (
              <li key={index} className="flex items-center gap-1">
                <tech.icon className="size-5" />
                <p className="text-muted-foreground">{tech.name}</p>
              </li>
            ))}
          </ul>

          <nav className="flex items-center gap-2">
            <Button>Live preview</Button>
            <Button variant="outline">Buy now</Button>
          </nav>
        </div>

        <figure className="w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={image}
            alt="image one"
            width={500}
            height={700}
            className="h-full w-full"
          />
        </figure>
      </article>

      <section className="space-y-10">
        <h3 className="text-2xl font-semibold">What&apos;s included</h3>

        <div className="flex flex-col justify-stretch gap-4">
          {largeDescription.map((paragraph, index) => (
            <p key={index} className="max-w-full text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <span className="h-px w-full bg-gray-300"></span>

      <section className="space-y-10">
        <h3 className="text-2xl font-semibold">Screenshots</h3>

        <div className="flex gap-6">
          {Object.values(screenshots).map((screenshot, index) => (
            <figure key={index} className="overflow-hidden rounded-md border">
              <Image
                src={screenshot}
                alt={`Screenshot ${index}`}
                height={500}
                width={500}
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
