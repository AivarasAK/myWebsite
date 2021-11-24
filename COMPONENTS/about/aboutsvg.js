import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Aboutsvg() {
  const svgref = useRef();
  useEffect(() => {
    if (window.innerWidth > 425) {
      anime({
        targets: svgref.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeOutQuad",
        duration: 1000,
        loop: false,
        delay: 100,
      });
    }else{
    }
  }, []);

  return (
    <div className="aboutsvgwrapper">
      <svg
        className="mainsvg"
        id = 'aboutmesvg'
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 401 401"
      >
        <path
          ref={svgref}
          className="cls-1"
          d="M400.5,200.5c0,110.46-89.54,200-200,200S.5,311,.5,200.5,90,.5,200.5.5A201.33,201.33,0,0,1,232.14,3"
        />
      </svg>
    </div>
  );
}
