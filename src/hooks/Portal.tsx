import { useRef, useEffect, useState, ReactNode, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  wrapperId: string;
}

export const Portal = ({
  children,
  wrapperId = "portal",
}: PortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<Element | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}
