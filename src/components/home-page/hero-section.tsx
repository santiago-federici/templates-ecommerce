import Wrapper from "../wrapper";

export default function HeroSection() {
  return (
    <Wrapper className="mb-40 flex min-h-[65svh] flex-col gap-20 max-lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full space-y-6 max-lg:text-center">
        <h1 className="font-anton text-6xl font-black lg:max-w-[25ch] 2xl:text-8xl">
          CRAFT STUNNING WEBSITES{" "}
          <span className="bg-gradient-to-b from-black to-primary bg-clip-text text-transparent">
            HASSLE-FREE
          </span>
        </h1>
        <p className="text-lg text-muted-foreground lg:max-w-[50ch] xl:text-xl">
          Discover a vast selection of premium templates tailored for any
          project. Create professional, eye-catching websites effortlessly with
          tools designed to save you time and boost creativity.
        </p>
      </div>

      <div className="h-auto w-full">
        <img src="/hero.webp" alt="test" className="h-full w-full bg-cover" />
      </div>
    </Wrapper>
  );
}
