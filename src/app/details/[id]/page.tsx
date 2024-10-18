import { Wrapper } from "@/components/Wrapper";
import { Template } from "@/interfaces";
import { templates } from "@/templates";
import Image from "next/image";

export default function DetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const template: Template | undefined = templates.find(
    (template) => template.id === Number(id)
  );

  if (!template) return;

  const { title, category, largeDescription, imageOne, techStack } = template;

  return (
    <Wrapper>
      <div className="flex gap-4">
        <div className="space-y-6">
          <p className="text-muted-foreground">{category}</p>

          <h2 className="text-4xl font-bold">{title}</h2>

          <p className="text-muted-foreground">{largeDescription}</p>

          <div className="flex gap-2">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-1">
                <tech.icon className="w-6 h-6" />
                <p className="text-muted-foreground">{tech.name}</p>
              </div>
            ))}
          </div>

          <div className="space-x-4">
            <button className="bg-black rounded-md hover:opacity-80 font-medium px-4 py-2 text-white">
              Live preview
            </button>
            <button className="border rounded-md hover:opacity-80 font-medium px-4 py-2">
              Buy now
            </button>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={imageOne}
            alt="image one"
            width={500}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </Wrapper>
  );
}
