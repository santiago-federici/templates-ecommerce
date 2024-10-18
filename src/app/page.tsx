import { Wrapper } from "@/components/Wrapper";
import { Card } from "@/components/Card";
import { templates } from "@/templates";

export default async function Home() {
  return (
    <Wrapper className="gap-28">
      {templates.map((template) => (
        <Card key={template.id} template={template} />
      ))}
    </Wrapper>
  );
}
