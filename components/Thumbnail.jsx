import Link from "next/link";

export default function Thumbnail({ item, idx }) {
  if (!item) {
    return;
  }
  console.log(item);
  const date = new Date(item?.create_datetime).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  console.log(date);
  return (
    <Link
      href={`/party/${item.id}`}
      className="block shadow-sm shadow-mainColor p-4 min-w-[25rem] w-[40rem] mx-auto rounded-md  group overflow-hidden"
    >
      <h1 className="mb-4 text-slate-900 text-2xl">{item.title}</h1>

      <video
        width={500}
        height={500}
        className="w-full group-hover:scale-[1.03] transition rounded-sm"
      >
        <source src={item.video_file} />
      </video>

      <div className="mt-10 flex justify-between">
        <p className="text-slate-900 text-base ">{item.description}</p>
        <p className="text-sm text-slate-500">Created at - {date}</p>
      </div>
    </Link>
  );
}
