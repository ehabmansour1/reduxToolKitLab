import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ar } from "../localization/ar";
import { en } from "../localization/en";

const langSlice = createSlice({
  name: "lang",
  initialState: { lang: "en", content: en },
  reducers: {
    toggleLang: (state) => {
      if (state.lang === "en") {
        state.lang = "ar";
        state.content = ar;
      } else {
        state.lang = "en";
        state.content = en;
      }
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { toggleLang } = langSlice.actions;
export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
