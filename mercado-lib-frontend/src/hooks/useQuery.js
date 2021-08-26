import { useLocation } from "react-router-dom";

//este hooks se utiliza para acceder a los query params
export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
