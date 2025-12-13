import { RefObject, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageEnter } from "../animations/pageTransitions";
import gsap from "gsap";

export const usePageTransition = (ref: RefObject<HTMLElement>) => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      pageEnter(ref.current!);
    }, ref);

    return () => ctx.revert();
  }, [location.pathname]);
};
