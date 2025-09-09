"use client";
import { loginForm } from "@/apis/login.services.api";
import { Input } from "@/components/input";
import { ILoginReq } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [values, setValues] = useState<ILoginReq>({
    username: "",
    password: "",
  });

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async(event) => {
      event.preventDefault(); 
      console.log('clicked');
      
    try {
      await loginForm(values); 

    } catch (error) {

      console.log(error);
    }
  }
  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col gap-6">
      <nav className="w-full bg-white max-h-10 flex justify-center items-center ">
        <Link href="/posts">posts</Link>
      </nav>
      <div className="bg-white w-full flex flex-col items-center  max-w-[400px] h-full max-h-[600px] mx-auto py-4 ">
        <h2 className="text-2xl font-bold"> ورود</h2>

        <form onSubmit={submitHandler} className="py-4 flex flex-col ">
          <Input
            name="username"
            label="username"
            value={values.username}
            onChange={onChangeHandler}
          />
          <Input
            name="password"
            label="password"
            value={values.password}
            onChange={onChangeHandler}
          />
          <button className="bg-blue-400 shadow-lg rounded-lg" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
