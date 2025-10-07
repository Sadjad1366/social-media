import client from "../_config/client";
import { endpoints } from "./endpoints";
import type { loginReq, loginRes } from "./type";

export const loginAction = async (payload: loginReq) => {
  try {
    const response = await client.post<loginRes>(endpoints.login(), payload);

    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return response.data;

  } 
  catch (error) {
    console.log(error);
  }
};
