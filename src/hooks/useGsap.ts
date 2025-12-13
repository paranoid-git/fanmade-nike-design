import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useGSAP = (cb: () => gsap.core.Timeline, deps: any[] = []) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(cb);
    return () => ctx.revert();
  }, deps);
};
