import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function Typewritter() {
  let typewriter = useRef();
  let insideref = useRef();
  let readyref = useRef();

  useEffect(() => {
    let tw = new Typewriter(typewriter.current, {
      autoStart: true,
    });
    let ready = new Typewriter(readyref.current, {
      autoStart: true,
    });
    tw.typeString("INITIALIZING...").start();

    ready.typeString("READY !").start();

    anime({
      targets: insideref.current,
      translateY: "-18px",
      delay: 3400,
      easing: "linear",
      duration: 1,
    });
  }, []);

  return (
    <div className="typewritterwrapper">
      <div ref={insideref} className="typewritterinsidewrp">
        <div ref={typewriter} className="classname"></div>
        <div ref={readyref} className="readytypewrp">
          READY
        </div>
      </div>
    </div>
  );
}
