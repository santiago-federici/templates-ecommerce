import TemporarySVG from "../temporary-svg";

export default function HeroSection() {
  return (
    <main className="wrapper flex-1">
      <section className="flex flex-col items-center justify-between gap-20 lg:flex-row">
        <div className="space-y-2 max-lg:text-center">
          <h1 className="font-thunder text-6xl md:text-8xl">
            SOME BIG ASS TITLE THAT WRAPS LIKE THIS
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus
            doloremque eligendi ab alias placeat provident, repellat sunt.
            Ipsam, veniam? Deleniti explicabo at sit in nobis facere ipsam
            numquam totam.
          </p>
        </div>
        <TemporarySVG />
      </section>
    </main>
  );
}
