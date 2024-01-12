import Image from "next/image";

export default function Home() {
  return (
    <section className="flexCenter justify-between">
      <div className="text">
        <h1>TEXT</h1>
      </div>
      <Image
        src="./hero-img.svg"
        alt="Animated Svg."
        width={500}
        height={500}
        priority
      />
    </section>
  );
}
