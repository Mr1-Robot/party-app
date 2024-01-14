"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function VideoPicker() {
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    files: null,
  });
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setVideoData((prev) => ({
      ...prev,
      files: file,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleChange = (e, name) => {
    setVideoData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  async function uploadVideo(e) {
    e.preventDefault();
    setLoading(true);

    const access = localStorage.getItem("access");

    const fileData = new FormData();
    fileData.append("title", videoData.title);
    fileData.append("description", videoData.description);
    fileData.append("video_file", videoData.files);

    try {
      const response = await fetch("http://192.168.20.114:8000/api/video/", {
        method: "POST",
        headers: {
          Authorization: `JWT ${access}`,
        },
        body: fileData,
      });

      if (response.ok) {
        console.log("ok");
      } else {
        console.error("Error");
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <form
      className="max-w-[30rem] text-sm flex flex-col gap-10 min-w-full md:min-w-[30rem]"
      onSubmit={uploadVideo}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter a title"
            name="title"
            className="video-field"
            onChange={(e) => handleChange(e, "title")}
            value={videoData.title}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={4}
            placeholder="Enter a description"
            className="video-field resize-none"
            name="description"
            onChange={(e) => handleChange(e, "description")}
            value={videoData.description}
          />
        </div>
      </div>

      {!videoData?.files && (
        <>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              {...getRootProps()}
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-orange-100 hover:bg-gray-100 dark:border-orange-200 dark:hover:border-orange-500 dark:hover:bg-orange-200 transition"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    className="stroke-mainColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-slate-600 dark:text-slate-600">
                  {!isDragActive ? (
                    <>
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </>
                  ) : (
                    <span>
                      Drag 'n' drop some files here, or click to select files
                    </span>
                  )}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-600">
                  MP4
                </p>
              </div>
              <input
                id="dropzone-file"
                {...getInputProps()}
                className="hidden"
                name="video_file"
              />
            </label>
          </div>
        </>
      )}

      {videoData.files && (
        <div className="flex justify-between">
          <video width={400} height={300} controls={false}>
            <source
              src={URL.createObjectURL(videoData.files)}
              type="video/mp4"
            />
          </video>
          <button
            type="button"
            onClick={() => setVideoData((prev) => ({ ...prev, files: null }))}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      )}

      <div>
        <button type="submit" className="main-btn" disabled={loading}>
          {loading ? "Submitting..." : "Upload Video"}
        </button>
      </div>
    </form>
  );
}
