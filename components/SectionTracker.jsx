import Link from "next/link";

export default function SectionTracker({ prev, href, current }) {
  return (
    <p className="text-slate-400 flex gap-1 mb-12">
      <Link href={href || "/"}>{prev}</Link>
      <span>/</span>
      <span className="text-slate-600">{current}</span>
    </p>
  );
}
