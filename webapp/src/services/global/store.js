import create from "zustand";

const initialState = {
  isNavbarVisible: false,
  currentUser: {
    isAuthenticated: false,
  },
};

export default create((set) => ({
  ...initialState,

  toggleNavbar: () =>
    set((state) => ({
      isNavbarVisible: !state.isNavbarVisible,
    })),
}));
