import React from "react";

import Wrapper from "@/components/wrapper";
import { Card } from "@/components/card";

import { templates } from "@/templates";
import { cn } from "@/lib/utils";

export default async function TemplatesPage() {
  return (
    <Wrapper>
      <section
        className={cn(
          "mx-auto grid w-fit grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:w-full xl:grid-cols-templates",
        )}
      >
        {templates.map((template) => (
          <React.Fragment key={template.id}>
            <Card template={template} />
          </React.Fragment>
        ))}
      </section>
    </Wrapper>
  );
}
