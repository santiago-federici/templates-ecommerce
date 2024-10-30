import { Fragment } from "react";
import { HowItWorksIcon } from "../icons";
import StepComponent from "./steps-component";
import SectionWrapper from "../section-wrapper";

const steps = [
  {
    number: 1,
    title: "Choose your template",
    description:
      "Explore our collections to find the perfect fit for your needs.",
  },
  {
    number: 2,
    title: "Purchase Your Template",
    description: "Complete your purchase in just a few clicks.",
  },
  {
    number: 3,
    title: "Download and Install",
    description:
      "Download the files and follow the quick setup to install the template.",
  },
  {
    number: 4,
    title: "Customize to Your Style",
    description: "The template is fully editable.",
  },
  {
    number: 5,
    title: "Ongoing Support and Updates",
    description: "Constant updates to keep your design fresh and optimized.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper
      sectionBgColor="bg-[#6CA7D3]"
      className="flex-row items-center justify-center gap-10 py-20 lg:py-0"
    >
      <div className="w-3/4 max-lg:hidden xl:w-full">
        <HowItWorksIcon className="mx-auto w-full xl:w-2/3" />
      </div>
      <div className="w-full text-white">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <p className="text-white/80">
          Follow the step to get your template ready and running
        </p>

        <div className="mt-8 max-lg:space-y-4">
          {steps.map((step) => (
            <Fragment key={step.number}>
              <StepComponent
                number={step.number}
                title={step.title}
                description={step.description}
              />
              <div className="ml-5 h-4 w-px bg-white/30 last:hidden max-lg:hidden"></div>
            </Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
