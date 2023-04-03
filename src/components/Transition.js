import React from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={1300}
        onEnter={(node) => {
          console.log("LAYOUT ON ENTER", location.pathname);
          gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
          gsap
            .timeline({
              paused: true,
            })
            .to(node, {
              autoAlpha: 1,
              xPercent: 0,
              ease: "power2.out",
              duration: 0.85,
            })
            .to(node, { scale: 1, duration: 0.85, ease: "power2.in" }, "-=0.25")
            .play();
        }}
        onExit={(node) => {
          console.log("LAYOUT ON EXIT", location.pathname);
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.8, duration: 0.8, ease: "power2.out" })
            .to(
              node,
              {
                xPercent: 100,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.in",
              },
              "-=0.2"
            )
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
