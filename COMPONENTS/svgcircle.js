import { useEffect, useRef } from "react";
import anime from "animejs";
export default function Svgcircle() {
  const circle = useRef();
  const rbhand = useRef();
  const lbhand = useRef();
  const thand = useRef();


  useEffect(() => {
    if (window.innerWidth > 700) {
 
      anime({
        targets: circle.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: 1600,
      });
      anime({
        targets: rbhand.current,
        strokeDashoffset: [anime.setDashoffset, 70],
        easing: "easeOutQuad",
        duration: 600,
        delay: 2000,
      });
      anime({
        targets: lbhand.current,
        strokeDashoffset: [anime.setDashoffset, 165],
        easing: "easeOutQuad",
        duration: 600,
        delay: 2400,
      });
      anime({
        targets: thand.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "linear",
        duration: 800,
        delay: 2600,
      });
    }
  }, []);

  return (
    <div  className="svgglobalwarapper">
      <svg
        className="mainsvg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 819 314"
      >
        <path
          ref={circle}
          className="svghand"
          d="M1215.5,566.5a165.9,165.9,0,0,1-1.26,20.43,156.52,156.52,0,1,1-44-130"
          transform="translate(-648.5 -410)"
        />
        <polyline
          ref={thand}
          className="svghand"
          points="521.7 46.88 568 0.5 569.5 0.5 683.5 0.5"
        />

        <polyline
          ref={lbhand}
          className="svghand"
          points="300 267.5 254 313.5 253.5 313.5 0.5 313.5"
        />
        <polyline
          ref={rbhand}
          className="svghand"
          points="567 156.5 625 214.5 626 214.5 818.5 214.5"
        />
      </svg>
    </div>
  );
}
