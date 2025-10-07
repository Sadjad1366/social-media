import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router";
import type { loginReq } from "../../api/auth/type";
import { loginAction } from "../../api/auth/login-api";

const LoginPage = () => {
  const [values, setValues] = React.useState<loginReq>({
    username: "",
    password: "",
    expiresInMins: 60,
  });

  const navigate = useNavigate();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: (payload: loginReq) => loginAction(payload),
    onSuccess: (data) => {
      setValues({ username: "", password: "" });
      console.log('response is:',data )
    },
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(values);
    navigate("/posts");
  };
  return (
    <>
      <div className=" max-width-[700px] flex justify-center items-center p-3 m-4">
        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Login</h1>
          <label htmlFor="username">username</label>
          <input
            onChange={inputHandler}
            value={values.username}
            className="bg-slate-200 p-1"
            name="username"
          />
          <label htmlFor="password">password</label>
          <input
            onChange={inputHandler}
            value={values.password}
            type="password"
            className="bg-slate-200 p-1"
            name="password"
          />

          <button
            className="bg-blue-400 text-[white] rounded-2xl p-2"
            type="submit"
          >
            login
          </button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
