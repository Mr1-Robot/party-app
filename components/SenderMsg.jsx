export default function SenderMsg({ item, emoji }) {
  if (!item || !emoji) {
    return;
  }
  return (
    <>
      <div className="flex gap-6 text-sm mb-4">
        <p className="flex-auto w-full font-medium flex text-sm">
          <span className="text-mainColor text-xs mr-1">•</span> Ali Fareeq
        </p>
        <p className="msg bg-mainColor text-white p-2 rounded-md relative text-sm font-light">
          {item} {emoji}
        </p>
      </div>
    </>
  );
}
