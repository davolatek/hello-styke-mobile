import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../utils/config";
import useAxios from "../../hooks/UseAxios";
import { AuthUser } from "./types";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/authentication/create-account`,
        method: "post",
        data: data,
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (data: any, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/authentication/login`,
        method: "post",
        data: data,
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error?.response?.data?.message, "from bggg");
        const msg =
          error?.response?.data?.message ||
          "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response?.data?.message as any);
      }
    }
  }
);

export const uploadPicture = createAsyncThunk(
  "auth/uploadPicture",
  async (data: any, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/account-management/upload-profile`,
        method: "post",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const completeprofile = createAsyncThunk(
  "auth/completeprofile",
  async (data: any, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/account-management/complete-account-profile`,
        method: "put",
        data: data,
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (otp: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/authentication/verify-otp/${otp}`,
        method: "get",
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
export const requestOtp = createAsyncThunk(
  "auth/requestOtp",
  async (email: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/authentication/generate-otp/${email}`,
        method: "get",
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error?.response || "An error occured, please try again";
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(error?.response as any);
      }
    }
  }
);
