export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-md mx-auto">{children}</div>;
}
