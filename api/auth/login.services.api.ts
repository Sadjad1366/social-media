import { ILoginReq, ILoginRes } from "@/types";
import { client } from "../_config/client";
import { URLS } from "@/urls";

type LoginFuncType = ({
  username,
  password,
  expiresInMins,
}: ILoginReq) => Promise<ILoginRes>;
export const loginForm: LoginFuncType = async ({
  username,
  password,
  expiresInMins = 60,
}) => {
  try {
    const response = await client.post(URLS.login.getLogin(), {
      username: username,
      password: password,
      expiresInMins: expiresInMins,
    });

    const { accessToken, refreshToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    console.log("access", accessToken);
    console.log("refresh", refreshToken);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
