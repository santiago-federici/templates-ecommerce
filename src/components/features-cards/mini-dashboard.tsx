export function MiniDashboard() {
  return (
    // container
    <div className="absolute bottom-0 right-4 h-52 w-96 overflow-hidden rounded-t-md border border-b-0 border-zinc-600 bg-[#010100] shadow-2xl shadow-zinc-800">
      {/* window header */}
      <div className="flex h-6 w-full items-center gap-1 border-b border-zinc-700 bg-[#111111] px-2">
        {/* three circles */}
        <div className="size-2 rounded-full border-2 border-zinc-700"></div>
        <div className="size-2 rounded-full border-2 border-zinc-700"></div>
        <div className="size-2 rounded-full border-2 border-zinc-700"></div>
      </div>

      {/* dashboard */}
      <div className="grid h-full grid-cols-[auto_1fr]">
        {/* aside */}
        <div className="flex h-full w-20 flex-col gap-4 bg-zinc-800 p-4">
          {/* first group of links */}
          <div className="flex flex-col gap-1">
            <div className="h-[2px] w-1/2 rounded-full bg-zinc-500"></div>
            <div className="h-1 w-full rounded-full bg-zinc-600"></div>
            <div className="h-1 w-[90%] rounded-full bg-zinc-600"></div>
            <div className="h-1 w-[70%] rounded-full bg-zinc-600"></div>
            <div className="h-1 w-[85%] rounded-full bg-zinc-600"></div>
          </div>

          {/* second group of links */}
          <div className="flex flex-col gap-1">
            <div className="h-[2px] w-1/3 rounded-full bg-zinc-500"></div>
            <div className="h-1 w-[80%] rounded-full bg-zinc-600"></div>
            <div className="h-1 w-[80%] rounded-full bg-zinc-600"></div>
          </div>

          {/* colors */}
          <div className="space-y-2">
            <div className="mini-dashboard-color-bubble-1 size-4 rounded-full border-[1px] border-zinc-600 p-1 blur-[1px]">
              <div className="size-full rounded-full bg-red-700"></div>
            </div>
            <div className="mini-dashboard-color-bubble-2 size-4 rounded-full border-[1px] border-zinc-600 p-1 blur-[1px]">
              <div className="size-full rounded-full bg-cyan-700"></div>
            </div>
            <div className="mini-dashboard-color-bubble-3 size-4 rounded-full border-[1px] border-zinc-600 p-1 blur-[1px]">
              <div className="size-full rounded-full bg-purple-700"></div>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="flex h-full w-full flex-col gap-2 p-3">
          {/* header */}
          <div className="flex gap-2">
            <div className="h-10 w-full rounded-md border border-zinc-600 blur-[1px]"></div>
            <div className="h-10 w-full rounded-md border border-zinc-600 p-2 blur-[1px]">
              <div className="mini-dashboard-card-color size-full rounded-md"></div>
            </div>
            <div className="h-10 w-full rounded-md border border-zinc-600 blur-[1px]"></div>
          </div>

          {/* other group of cards */}
          <div className="grid h-full grid-cols-4 grid-rows-2 gap-2">
            <div className="col-span-2 h-full w-full rounded-md border border-zinc-600 p-3 blur-[1px]">
              <div className="mini-dashboard-card-color size-full rounded-md"></div>
            </div>
            <div className="col-span-2 h-full w-full rounded-md border border-zinc-600 blur-[1px]"></div>
            <div className="col-span-3 h-full w-full rounded-md border border-zinc-600 blur-[1px]"></div>
            <div className="col-span-1 h-full w-full rounded-md border border-zinc-600 p-3 blur-[1px]">
              <div className="mini-dashboard-card-color size-full rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
