import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Router } from "./Router";
import { useLenisScroll } from "../hooks/useLenisScroll";

export default function App() {
  const location = useLocation();

  // Initialize smooth scroll
   
  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Router />;
}
