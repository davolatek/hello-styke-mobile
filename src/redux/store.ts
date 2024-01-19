import { configureStore, Action } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 0,
  whitelist: ['user', 'userReducer']
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

export const persistor = persistStore(store);
