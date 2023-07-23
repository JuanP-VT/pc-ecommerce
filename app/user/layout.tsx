/**
 * User Layout Component
 *
 * A layout component to wrap user-related pages or nested layouts.
 */
export default function userLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="absolute z-10 flex h-32 w-full rounded-xl border bg-sky-800"></div>

      {children}
    </section>
  );
}
