import Wrapper from "../wrapper";

export default function HeroSection() {
  return (
    <Wrapper className="mb-40 flex min-h-[65svh] flex-col gap-20 max-lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full space-y-6 max-lg:text-center">
        <h1 className="font-anton text-6xl font-black lg:max-w-[25ch] 2xl:text-8xl">
          SOME BIG ASS TITLE THAT WRAPS LIKE THIS
        </h1>
        <p className="text-lg text-muted-foreground lg:max-w-[50ch] xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus
          doloremque eligendi ab alias placeat provident, repellat sunt. Ipsam,
          veniam? Deleniti explicabo at sit in nobis facere ipsam numquam totam.
        </p>
      </div>

      <div className="h-auto w-full">
        <img src="/hero.webp" alt="test" className="h-full w-full bg-cover" />
      </div>
    </Wrapper>
  );
}
