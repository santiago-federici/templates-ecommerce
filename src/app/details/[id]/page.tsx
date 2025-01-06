import Link from "next/link";
import Image from "next/image";

import Button from "@/components/button";
import Wrapper from "@/components/wrapper";

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
    thumbnail,
    largeDescription,
    screenshots,
    preview,
  } = template;

  return (
    <Wrapper className="space-y-20 py-20">
      <article className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="w-full space-y-5 lg:w-1/2">
          <p className="text-muted-foreground">{category}</p>

          <h2 className="text-4xl font-extrabold">{title}</h2>

          <p className="text-muted-foreground">{mediumDescription}</p>

          <ul className="flex gap-3">
            {techStack.map((tech, index) => (
              <li key={index} className="flex items-center gap-1">
                {tech.icon}
                <p className="text-muted-foreground">{tech.name}</p>
              </li>
            ))}
          </ul>

          <nav className="flex items-center gap-2">
            {preview && (
              <Button>
                <Link href={preview} rel="noreferrer noopener" target="_blank">
                  Live preview
                </Link>
              </Button>
            )}
            <Button className="bg-black">Buy Now</Button>
          </nav>
        </div>

        <picture className="relative aspect-video h-auto w-full lg:w-3/5">
          <Image
            src={thumbnail}
            alt="image one"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl shadow-lg"
            priority // Ensures it's loaded early to avoid shift
          />
        </picture>
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
            <Image
              key={index}
              src={screenshot}
              alt={`Screenshot ${index}`}
              height={500}
              width={500}
              className="aspect-square h-52 w-96 rounded-md border"
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
