"use client";

import SubmitButton from "@/components/SubmitBtn";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  console.log(loading);

  function validatePassword() {
    const password = data?.password;
    const re_password = data?.re_password;

    if (password === re_password) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }

  function handleInputChange(e, name) {
    setData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    router.push("/email-check");

    if (!data) {
      return;
    }

    setLoading(true);

    console.log(data);

    try {
      const res = await fetch("http://192.168.20.114:8000/api/auth/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      setLoading(false);
      console.log(resData);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <section className="text-center">
      <h1 className="heading">Register an Account</h1>
      <form className="registeration-form" onSubmit={handleSubmit}>
        {error && <p className="error-msg">Enter a valid data.</p>}

        <p className="login-field">
          <label htmlFor="fullName" className="text-sm text-slate-800">
            Full name
          </label>
          <input
            className="login-input"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter full name"
            onChange={(e) => handleInputChange(e, "name")}
          />
        </p>
        <p className="login-field">
          <label htmlFor="email" className="text-sm text-slate-800">
            Email
          </label>
          <input
            className="login-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => handleInputChange(e, "email")}
          />
        </p>
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
            className="login-input transition-all focus:transition-all"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => handleInputChange(e, "password")}
            onBlur={validatePassword}
          />
        </p>
        <p className="login-field">
          <label htmlFor="re_password" className="text-sm text-slate-800">
            Confirm Password
          </label>
          <input
            className="login-input transition-all focus:transition-all"
            type="password"
            name="re_password"
            id="re_password"
            placeholder="Enter password"
            onChange={(e) => handleInputChange(e, "re_password")}
            onBlur={validatePassword}
          />
        </p>

        {match === false && <p className="error-msg">Password doesn't match</p>}

        <p className="mt-8">
          <SubmitButton text="Sign Up" loading={loading} />
        </p>
      </form>
    </section>
  );
}
