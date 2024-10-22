import { Wrapper } from "@/components/wrapper";
import { Template } from "@/interfaces";
import { templates } from "@/templates";
import Image from "next/image";

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
      <div className="flex gap-4">
        <div className="space-y-6">
          <p className="text-muted-foreground">{category}</p>

          <h2 className="text-4xl font-bold">{title}</h2>

          <p className="text-muted-foreground">{mediumDescription}</p>

          <div className="flex gap-2">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-1">
                <tech.icon className="h-6 w-6" />
                <p className="text-muted-foreground">{tech.name}</p>
              </div>
            ))}
          </div>

          <div className="space-x-4">
            <button className="rounded-md bg-black px-4 py-2 font-medium text-white hover:opacity-80">
              Live preview
            </button>
            <button className="rounded-md border px-4 py-2 font-medium hover:opacity-80">
              Buy now
            </button>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={image}
            alt="image one"
            width={500}
            height={100}
            className="h-full w-full rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="space-y-10">
        <p className="text-2xl font-semibold">What&apos;s included</p>

        <div className="flex flex-col justify-stretch gap-4">
          {largeDescription.map((paragraph, index) => (
            <p key={index} className="max-w-[80%] text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <span className="h-px w-full bg-gray-300"></span>

      <div className="flex gap-80">
        <p className="text-2xl font-semibold">Screenshots</p>

        <div className="grid grid-cols-2 gap-6">
          <Image
            src={screenshots.one}
            alt="Screenshot one"
            height={500}
            width={500}
            className="h-auto w-full rounded-md border"
          />
          <Image
            src={screenshots.two}
            alt="Screenshot two"
            height={500}
            width={500}
            className="h-auto w-full rounded-md border"
          />
          <Image
            src={screenshots.three}
            alt="Screenshot three"
            height={500}
            width={500}
            className="h-auto w-full rounded-md border"
          />
          <Image
            src={screenshots.four}
            alt="Screenshot four"
            height={500}
            width={500}
            className="h-auto w-full rounded-md border"
          />
        </div>
      </div>
    </Wrapper>
  );
}
