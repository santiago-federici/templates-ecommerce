import { Fragment } from "react";
import Wrapper from "@/components/wrapper";
import TemplateCard from "@/components/template-card";

import { templates } from "@/templates";

export default async function TemplatesPage() {
  return (
    <Wrapper className="py-20">
      <section className="flex flex-col gap-20">
        {templates.map((template) => (
          <Fragment key={template.id}>
            <TemplateCard template={template} />

            <span className="mx-auto h-px w-[90%] bg-black/10 last:hidden"></span>
          </Fragment>
        ))}
      </section>
    </Wrapper>
  );
}
