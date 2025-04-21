import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

// define the shape of the store
interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

//implement the store and store update logic
const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })), //no need to spread other store properties. The set function will merge it into the next state object
  reset: () => set(() => ({ counter: 0 })),
}));

// inspect zustand store in react devtools
if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
