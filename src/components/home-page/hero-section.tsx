import Link from "next/link";

import Wrapper from "@/components/wrapper";
import Button from "@/components/button";

export default function HeroSection() {
  return (
    <Wrapper className="flex max-h-[800px] justify-between overflow-hidden max-lg:gap-20 lg:flex-row xl:gap-20">
      <div className="flex w-full flex-col gap-6 lg:mt-40">
        <h1 className="text-3xl font-bold text-white">
          Beautifully crafted website templates to jumpstart your project.
        </h1>
        <h3 className="text-base text-white/80">
          Responsive, customizable website templates designed with the latest
          technologies. Perfect for launching your project quickly while
          ensuring a seamless user experience and offering a solid foundation to
          build professional websites.
        </h3>

        <Button className="w-fit bg-black text-sm lg:text-base">
          <Link href="/templates">Explore templates</Link>
        </Button>
      </div>

      <div className="flex w-full gap-4">
        <div className="flex w-full flex-col gap-4">
          <div className="h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
          <div className="h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
          <div className="h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="-mt-60 h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
          <div className="h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
          <div className="h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
          <div className="h-80 w-full shrink-0 rounded-sm bg-gray-200"></div>
        </div>
      </div>
    </Wrapper>
  );
}