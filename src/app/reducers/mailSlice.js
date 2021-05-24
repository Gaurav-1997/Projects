import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    composeModalIsOpen: false
  },
  reducer: {
    openComposeModal: (state) => {
      state.composeModalIsOpen = true;
    },
    closeComposeModal: (state) => {
      state.composeModalIsOpen = false;
    }
  }
});

export const { openComposeModal, closeComposeModal } = mailSlice.actions;

export const selectcomposeModalIsOpen = (state) => state.mail.composeModalIsOpen;

export default mailSlice.reducer;
