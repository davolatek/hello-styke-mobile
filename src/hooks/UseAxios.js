import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { getItem } from "../../local-storage";

const useAxios = async function apiRequest(request) {
  const token = await getItem("accessToken");

  const resp = await axios.request({
    ...request,
    headers: {
      ...request.headers,
      authorization: `Bearer ${token}`,
    },
  });
  if (resp.status === 401) {
    console.log("clear");
  }
  return resp;
};
export default useAxios;
