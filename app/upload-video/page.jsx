import SectionTracker from "@/components/SectionTracker";
import VideoPicker from "@/components/VideoPicker";

export default function UploadVideo() {
  return (
    <>
      <SectionTracker prev="My Videos" href="/videos" current="Upload Video" />
      <section className="grid place-items-center">
        <VideoPicker />
      </section>
    </>
  );
}
