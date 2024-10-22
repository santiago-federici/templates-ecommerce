import { Wrapper } from "@/components/wrapper";
import { Card } from "@/components/card";
import { templates } from "@/templates";

export default async function TemplatesPage() {
  return (
    <Wrapper className="gap-28">
      {templates.map((template) => (
        <Card key={template.id} template={template} />
      ))}
    </Wrapper>
  );
}
