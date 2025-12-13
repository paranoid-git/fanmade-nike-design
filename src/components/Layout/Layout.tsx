import { GrainGradient } from "@paper-design/shaders-react";

import { ReactNode, useRef } from "react";
import { usePageTransition } from "../../hooks/usePageTransition";
import NavBar from "./NavBar";
type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageTransition(containerRef);

  return (
    <div ref={containerRef} data-page-container>
      <NavBar />
      {children}
    </div>
  );
}
