"use client";
import { loginForm } from "@/api/auth/login.services.api";
import { ButtonKit } from "@/components/button";
import { InputKit } from "@/components/input";
import { ILoginReq } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ErrorType = Partial<ILoginReq> & Omit<Partial<ILoginReq>, 'expiresInMins'>

export default function Home() {
  const [values, setValues] = useState<ILoginReq>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorType>({});

  const validate = () => {
    const newErrors: ErrorType = {};

    if (!values.username || values.username.length < 3) {
      newErrors.username = "username should be at least 3 characters";
    }
    if (!values.password || values.password.length < 8) {
      newErrors.password = "password should be at least 8 characters";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const router = useRouter();

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      await loginForm(values);
      router.push("/posts");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col gap-6">
      <nav className="w-full bg-white max-h-10 flex justify-center items-center p-4 my-4 ">
        <Link className="font-semibold text-lg" href="/posts">
          posts
        </Link>
      </nav>
      <div className="bg-white w-full flex flex-col items-center  max-w-[400px] h-full max-h-[600px] rounded-lg shadow-lg mx-auto py-4 ">
        <h2 className="text-2xl font-bold">Login</h2>

        <form onSubmit={submitHandler} className="py-4 flex flex-col ">
          <InputKit
            name="username"
            label="username"
            value={values.username}
            onChange={onChangeHandler}
            errors={errors.username}
          />
          <InputKit
          type="password"
            name="password"
            label="password"
            value={values.password}
            onChange={onChangeHandler}
            errors={errors.password}
          />
          <ButtonKit
            content="Enter"
            className="bg-blue-400 text-white mt-3"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
