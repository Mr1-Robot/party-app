"use client";

import SectionTracker from "@/components/SectionTracker";
import Spinner from "@/components/Spinner";
import Thumbnail from "@/components/Thumbnail";
import { useEffect, useState } from "react";

export default function Videos() {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    async function getVideos() {
      const access = localStorage.getItem("access");
      try {
        const response = await fetch("http://192.168.20.114:8000/api/video/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${access}`,
          },
        });

        const resData = await response.json();
        setData(resData);
        console.log(resData);
      } catch (err) {
        console.log(err);
      }
    }
    getVideos();
  }, []);

  return (
    <section className="">
      <SectionTracker prev="Home" href="/" current="My Videos" />

      <div className="flex flex-col gap-12">
        {data &&
          data.length > 0 &&
          data.map((item) => <Thumbnail key={item.id} item={item} />)}
        {!data && <Spinner />}
        {data?.length === 0 && <Spinner />}
      </div>
    </section>
  );
}
