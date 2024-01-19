import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../hooks/UseAxios";
import { BASE_URL } from "../../utils/config";
import axios from "axios";

export const getUser = createAsyncThunk(
    "auth/getUser",
    async (id: any, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/account-management/get-user-details/${id}`,
          method: "get",
        });
  
        return response.data.response
      } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
          const msg = error?.response || "An error occured, please try again";
          return thunkAPI.rejectWithValue(msg);
        } else {
          return thunkAPI.rejectWithValue(error?.response as any);
        }
      }
    }
)