/**
 * Menu Button Component
 *
 * The component renders a button with a three-bar icon that can be used to toggle a hidden menu on a responsive layout.
 *
 * @component
 * @param {Object} Props - The component props.
 * @param {React.MutableRefObject<null | HTMLDivElement>} containerRef - A mutable ref object that points to the menu container.
 *
 * @returns {JSX.Element} The JSX element representing the Menu Button component.
 */
"use client";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
type Props = {
  containerRef: React.MutableRefObject<null | HTMLDivElement>;
};
function MenuButton({ containerRef }: Props) {
  return (
    <>
      <div
        className="flex w-full cursor-pointer justify-center bg-slate-200  p-3 sm:hidden"
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
        <Bars3BottomLeftIcon className=" h-5 w-5 fill-slate-800 hover:animate-pulse hover:text-blue-500 " />
      </div>
    </>
  );
}

export default MenuButton;
