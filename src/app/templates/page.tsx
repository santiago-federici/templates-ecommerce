import { Fragment } from "react";
import Wrapper from "@/components/wrapper";
import TemplateCard from "@/components/template-card";

import { templates } from "@/templates";

export default async function TemplatesPage() {
  return (
    <Wrapper className="py-20">
      <section className="flex flex-col gap-16">
        {templates.map((template) => (
          <Fragment key={template.id}>
            <TemplateCard template={template} />
          </Fragment>
        ))}
      </section>

      {/* <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-templates">
        {templates.map((template) => (
          <Fragment key={template.id}>
            <Card template={template} />
          </Fragment>
        ))}
      </div> */}
    </Wrapper>
  );
}
