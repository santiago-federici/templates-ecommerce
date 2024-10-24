import { Wrapper } from "@/components/wrapper";
import { Card } from "@/components/card";
import { templates } from "@/templates";
import React from "react";

export default async function TemplatesPage() {
  return (
    <Wrapper className="gap-10">
      {templates.map((template) => (
        <React.Fragment key={template.id}>
          <Card template={template} />
        </React.Fragment>
      ))}
    </Wrapper>
  );
}
