import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export const useAppSelector = () => {
  const appSelector = useSelector((state: RootState) => state);
  return appSelector;
};
