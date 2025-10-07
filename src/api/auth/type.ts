export type loginReq = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export type loginRes = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};
