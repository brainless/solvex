import create from "zustand";
import axios from "axios";

const initialState = {
  responsePayload: [],

  isFetching: false,
  isReady: false,
  lastFetchedAt: null,
};

export default create((set, get) => ({
  fetchData: async (url, requestPayload, key = null) => {
    const keyToUse = !!key ? key : url;

    if (get()[keyToUse]) {
      if (get()[keyToUse].isFetching) {
        // There is a fetch currently executing, no need to run another one
        return;
      }
      set((state) => ({
        [keyToUse]: {
          ...state[keyToUse],
          isFetching: true,
        },
      }));
    } else {
      set(() => ({
        [keyToUse]: {
          ...initialState,
          isFetching: true,
        },
      }));
    }

    try {
      const response = await axios.get(keyToUse, {
        data: requestPayload,
      });
      set(() => ({
        [keyToUse]: {
          responsePayload: response.data,
          isFetching: false,
          isReady: true,
          lastFetchedAt: +new Date(),
        },
      }));
    } catch (error) {
      console.log("Could not fetch data. Try again later.");
    }
  },
}));
