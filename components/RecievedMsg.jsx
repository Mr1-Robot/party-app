export default function RecievedMsg({ currentMessage }) {
  return (
    <div className="flex flex-row-reverse gap-6 text-sm mb-4">
      <p className="flex-auto w-full font-medium flex text-sm">
        <span className="text-mainColor text-xs mr-1">•</span> Muammar
      </p>
      <p className="msg1 bg-mainColor text-white p-2 rounded-md relative text-sm font-light">
        {currentMessage}
      </p>
    </div>
  );
}
