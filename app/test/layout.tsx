export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-lg mx-auto shadow-2xl">{children}</div>;
}
