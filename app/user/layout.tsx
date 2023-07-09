export default function userLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="absolute z-10 flex h-32 w-full rounded-xl border bg-sky-400"></div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
