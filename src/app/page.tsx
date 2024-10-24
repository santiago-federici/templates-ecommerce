import Link from "next/link";
import Image from "next/image";

import { Wrapper } from "@/components/wrapper";
import Button from "@/components/button";

export default async function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Wrapper className="flex max-h-[800px] justify-between overflow-hidden max-lg:gap-20 lg:flex-row xl:gap-20">
          <div className="flex w-full flex-col gap-4 lg:mt-40">
            <h1 className="text-3xl font-bold">
              Beautifully crafted website templates to jumpstart your project.
            </h1>
            <h3 className="text-base">
              Responsive, customizable website templates designed with the
              latest technologies. Perfect for launching your project quickly
              while ensuring a seamless user experience and offering a solid
              foundation to build professional websites.
            </h3>

            <Button className="w-fit text-sm lg:text-base">
              <Link href="/templates">Explore templates</Link>
            </Button>
          </div>

          <div className="grid w-full grid-cols-2 gap-4">
            <Image
              src={"/image.webp"}
              alt="image"
              width={318}
              height={288}
              className="h-72 w-full rounded-sm object-cover"
            />
            <Image
              src={"/image.webp"}
              alt="image"
              width={318}
              height={288}
              className="-mt-10 h-36 w-full rounded-sm object-cover"
            />
            <Image
              src={"/image.webp"}
              alt="image"
              width={318}
              height={288}
              className="h-72 w-full rounded-sm object-cover"
            />
            <Image
              src={"/image.webp"}
              alt="image"
              width={318}
              height={288}
              className="-mt-[184px] h-72 w-full rounded-sm object-cover"
            />
            <Image
              src={"/image.webp"}
              alt="image"
              width={318}
              height={288}
              className="h-72 w-full rounded-sm object-cover"
            />
            <Image
              src={"/image.webp"}
              alt="image"
              width={318}
              height={288}
              className="-mt-[184px] h-72 w-full rounded-sm object-cover"
            />
          </div>
        </Wrapper>

        <svg
          viewBox="0 0 1440 320"
          className="absolute -bottom-2 z-30 fill-primary"
        >
          <path
            fillOpacity="1"
            d="M0,288L48,288C96,288,192,288,288,288C384,288,480,288,576,266.7C672,245,768,203,864,192C960,181,1056,203,1152,176C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <svg
          viewBox="0 0 1440 320"
          className="absolute -bottom-20 z-20 fill-violet-700"
        >
          <path
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,96C384,85,480,107,576,133.3C672,160,768,192,864,176C960,160,1056,96,1152,96C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <svg
          viewBox="0 0 1440 320"
          className="absolute -bottom-10 z-10 fill-violet-900"
        >
          <path
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,229.3C384,256,480,288,576,256C672,224,768,128,864,112C960,96,1056,160,1152,202.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <section className="h-96 bg-primary"></section>
    </>
  );
}
