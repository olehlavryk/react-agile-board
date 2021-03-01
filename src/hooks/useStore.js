import { useContext } from "react";
import { StoreContext } from "src/index";

export default function useStore() {
  return useContext(StoreContext);
}
