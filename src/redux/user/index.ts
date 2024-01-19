import { getUser } from "./thunk-action";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dob: "",
    imageUrl: "",
    createdAt: "",
  },
  loading: "idle",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      return { ...state, loading: "successful", user: action.payload };
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
