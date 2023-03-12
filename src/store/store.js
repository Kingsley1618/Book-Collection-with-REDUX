import {
  createSlice,
  configureStore,
  createAsyncThunk
} from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage
};
const initialState = {
  Books: [],
  fav: []
};
export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await fetch("https://example-data.draftbit.com/books?_limit=30");
  return res.json();
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFav(state, action) {
      const foundedBook = state.Books.find(
        (fav) => fav.id === action.payload.id
      );
      if (foundedBook) {
        state.fav.push(foundedBook);
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Add user to the state array
      state.Books = action.payload;
    });
  }
});
export const userActions = userSlice.actions;

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});

export const persistor = persistStore(store);
