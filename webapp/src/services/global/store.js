import create from "zustand";

const initialState = {
  isNavbarVisible: false,
};

export default create((set) => ({
  ...initialState,

  toggleNavbar: () =>
    set((state) => ({
      isNavbarVisible: !state.isNavbarVisible,
    })),
}));
