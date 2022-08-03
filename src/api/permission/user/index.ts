import axios from "@/utils/axios";

interface ILoginData {
  username: string;
  password: string;
}

/**
* author: zyj
* date: 2022-07-26 星期二
* description: user authorization
*/
export function login(data: ILoginData) {
  return axios({
    url: "/auth/login",
    method: "post",
    data
  })
}