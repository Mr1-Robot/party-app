"use client";

import SubmitButton from "@/components/SubmitBtn";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(null);
  const [inputError, setInputError] = useState(null);

  function handleInputChange(e, name) {
    setData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  }

  function check() {
    if (data.username === "" || data.password === "") {
      setInputError(true);
      return false;
    }
    setInputError(false);
    return true;
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (!check()) {
      return;
    }

    // Login Logic
    setLoading(true);
    try {
      const response = await fetch(
        "http://192.168.20.114:8000/api/auth/jwt/create/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const resData = await response.json();
      if (
        resData.access === "" ||
        resData.access === null ||
        resData.access === undefined
      ) {
        return;
      }

      setLoading(false);
      localStorage.setItem("access", resData.access);
      localStorage.setItem("refresh", resData.refresh);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="mx-auto text-center">
      <h1 className="heading">Welcome</h1>

      <form onSubmit={submitHandler} className="registeration-form">
        {inputError === true && (
          <p className="bg-red-100 border border-red-600 text-red-900 p-2 rounded-sm text-sm font-light">
            Enter a valid data.
          </p>
        )}

        <p className="login-field">
          <label htmlFor="username" className="text-sm text-slate-800">
            Username
          </label>
          <input
            className="login-input"
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            onChange={(e) => handleInputChange(e, "username")}
          />
        </p>

        <p className="login-field">
          <label htmlFor="password" className="text-sm text-slate-800">
            Password
          </label>
          <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => handleInputChange(e, "password")}
          />
        </p>

        <p>
          <SubmitButton text="Sign In" loading={loading} />
        </p>
      </form>
    </section>
  );
}
