"use server";

// Register
export async function register(formData) {
  const data = {
    name: formData.get("fullName"),
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    re_password: formData.get("re_password"),
  };

  try {
    await fetch("http://192.168.20.114:8000/api/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}
