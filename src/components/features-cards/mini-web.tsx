export function MiniWeb() {
  return (
    <>
      <BgSVG />

      {/* container */}
      <div className="absolute bottom-0 right-4 h-52 w-72 overflow-hidden rounded-t-md border border-b-0 border-zinc-600 bg-[#010100] shadow-2xl shadow-zinc-800">
        {/* window header */}
        <div className="flex h-6 w-full items-center gap-1 border-b border-zinc-700 bg-[#111111] px-2">
          {/* three circles */}
          <div className="size-2 rounded-full border-2 border-zinc-700"></div>
          <div className="size-2 rounded-full border-2 border-zinc-700"></div>
          <div className="size-2 rounded-full border-2 border-zinc-700"></div>
        </div>

        {/* main */}
        <div className="grid grid-cols-[auto_1fr] gap-6 p-4">
          {/* left section */}
          <div className="flex h-20 w-20 flex-col gap-4">
            {/* logo */}
            <div className="mini-web-logo flex aspect-square h-auto w-1/2 items-center justify-center rounded border border-zinc-700 blur-[1px]">
              <div className="h-1/2 w-1/2 rounded-full bg-[#333333]"></div>
            </div>

            {/* text lines */}
            <div className="space-y-1">
              <div className="h-2 w-full rounded-md bg-[#333333]"></div>
              <div className="h-2 w-1/3 rounded-md bg-[#111111]"></div>
              <div className="h-2 w-1/2 rounded-md bg-[#1f1f1f]"></div>
              <div className="h-2 w-full rounded-md bg-[#111111]"></div>
            </div>
          </div>

          {/* right section */}
          <div className="h-full w-full space-y-4">
            {/* text-lines */}
            <div className="flex w-full gap-2">
              <div className="h-1 w-8 rounded-md bg-[#333333]"></div>
              <div className="h-1 w-full rounded-md bg-[#111111]"></div>
            </div>

            {/* columns */}
            <div className="flex gap-2">
              {/* left column */}
              <div className="flex w-full flex-col gap-2">
                <div className="mini-web-left-col-card h-20 w-full rounded outline outline-1 outline-zinc-700 blur-[1px]"></div>
                <div className="mini-web-left-col-card h-20 w-full rounded outline outline-1 outline-zinc-700 blur-[1px]"></div>
                <div className="mini-web-left-col-card h-20 w-full rounded outline outline-1 outline-zinc-700 blur-[1px]"></div>
              </div>

              {/* right column */}
              <div className="flex w-full flex-col gap-2">
                <div className="mini-web-right-col-card h-12 w-full rounded outline outline-1 outline-zinc-700 blur-[1px]"></div>
                <div className="mini-web-right-col-card h-12 w-full rounded outline outline-1 outline-zinc-700 blur-[1px]"></div>
                <div className="mini-web-right-col-card h-12 w-full rounded outline outline-1 outline-zinc-700 blur-[1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function BgSVG() {
  return (
    <div className="absolute bottom-0 right-0 h-[50%] w-[95%] overflow-hidden rounded-[100%_0%_0%_100%_/_100%_51%_49%_0%_]">
      <svg
        id="patternId"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="scale(1) rotate(0)"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff00" />
            <path
              d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
              strokeWidth="0.5"
              stroke="#373737ff"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#a)"
        />
      </svg>
    </div>
  );
}
