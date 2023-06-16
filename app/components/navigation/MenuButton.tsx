"use client";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
type Props = {
  containerRef: React.MutableRefObject<null | HTMLDivElement>;
};
function MenuButton({ containerRef }: Props) {
  return (
    <>
      <div
        className="flex w-auto cursor-pointer justify-center  bg-slate-950 p-3 sm:hidden"
        onClick={() => {
          const container = containerRef.current as HTMLDivElement;
          if (container.classList.contains("-translate-y-96")) {
            container.classList.remove("-translate-y-96");
            container.classList.add("-translate-y-0");
            return;
          }
          if (container.classList.contains("-translate-y-0")) {
            container.classList.remove("-translate-y-0");
            container.classList.add("-translate-y-96");
            return;
          }
        }}
      >
        <Bars3BottomLeftIcon className=" h-9 w-9 fill-slate-400 hover:animate-pulse " />
      </div>
    </>
  );
}

export default MenuButton;
