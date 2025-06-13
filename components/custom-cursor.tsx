"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursorBig = document.createElement("div");
    cursorBig.classList.add("cursor", "big");

    const cursorSmall = document.createElement("div");
    cursorSmall.classList.add("cursor", "small");

    document.body.appendChild(cursorBig);
    document.body.appendChild(cursorSmall);

    // Handler references for cleanup
    const mouseMoveHandler = (e: MouseEvent) => {
      cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorSmall.style.left = e.clientX + "px";
      cursorSmall.style.top = e.clientY + "px";
    };

    const mouseDownHandler = () => {
      cursorBig.classList.add("click");
      cursorSmall.classList.add("hover__small");
    };

    const mouseUpHandler = () => {
      cursorBig.classList.remove("click");
      cursorSmall.classList.remove("hover__small");
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    // Hover handlers for links and buttons
    const links = document.querySelectorAll("a, button, [role='button']");
    const mouseOverHandlers: Array<() => void> = [];
    const mouseLeaveHandlers: Array<() => void> = [];

    links.forEach((item) => {
      const mouseOver = () => {
        cursorBig.classList.add("hover__big");
        cursorSmall.classList.add("hover__small");
      };
      const mouseLeave = () => {
        cursorBig.classList.remove("hover__big");
        cursorSmall.classList.remove("hover__small");
      };
      item.addEventListener("mouseover", mouseOver);
      item.addEventListener("mouseleave", mouseLeave);

      // Store for cleanup
      mouseOverHandlers.push(mouseOver);
      mouseLeaveHandlers.push(mouseLeave);
    });

    // Cleanup function
    return () => {
      document.body.removeChild(cursorBig);
      document.body.removeChild(cursorSmall);
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      links.forEach((item, idx) => {
        item.removeEventListener("mouseover", mouseOverHandlers[idx]);
        item.removeEventListener("mouseleave", mouseLeaveHandlers[idx]);
      });
    };
  }, []);

  return null;
}

