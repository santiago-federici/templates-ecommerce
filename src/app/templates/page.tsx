import { Wrapper } from "@/components/wrapper";
import { Card } from "@/components/card";
import { templates } from "@/templates";
import React from "react";

export default async function TemplatesPage() {
  return (
    <Wrapper className="md:gap-20">
      {templates.map((template) => (
        <React.Fragment key={template.id}>
          <Card template={template} />
          <div className="my-8 h-px w-full bg-gray-300 last:hidden md:hidden" />
        </React.Fragment>
      ))}
    </Wrapper>
  );
}
