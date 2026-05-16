import clsx from "clsx";

export default function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("glass transition-all duration-300 hover:shadow-xl", className)}>
      {children}
    </div>
  );
}
