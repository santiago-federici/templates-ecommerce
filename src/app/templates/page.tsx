import React from "react";

import SectionWrapper from "@/components/section-wrapper";
import { Card } from "@/components/card";

import { templates } from "@/templates";

export default async function TemplatesPage() {
  return (
    <SectionWrapper>
      <div className="mx-auto grid w-fit grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:w-full xl:grid-cols-templates">
        {templates.map((template) => (
          <React.Fragment key={template.id}>
            <Card template={template} />
          </React.Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
}
