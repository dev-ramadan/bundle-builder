import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  openStep: 1,
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,
  reducers: {},
});

export default bundleSlice.reducer;