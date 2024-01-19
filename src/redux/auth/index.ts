import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, uploadPicture, completeprofile } from "./thunkAction";

const initialState: any = {
  user: {},
  loading: "idle",
  isLogging: "idle",
};

// Then, handle actions in your reducers:ß
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },

  extraReducers: (builder) => {
    //signup
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signUp.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //signIn
    builder.addCase(signIn.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signIn.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(signIn.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //uploadPicture
    builder.addCase(uploadPicture.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(uploadPicture.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(uploadPicture.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
    //completeprofile
    builder.addCase(completeprofile.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(completeprofile.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(completeprofile.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });
  },
});
export const authReducer = authSlice.reducer;
