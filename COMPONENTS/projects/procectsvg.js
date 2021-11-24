import { useEffect, useRef } from "react";
import anime from "animejs";
export default function ProjectsSvg() {
  const path1 = useRef();
  useEffect(() => {
    anime({
      targets: path1.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeOutQuad",
      duration: 2200,
      loop: false,
      delay: 0,
    });


  }, []);

  return (
    <div className="projectssvgwrapper">
      <svg
        className="mainsvgproj"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1231.05 561"
      >
        <path
          ref={path1}
          className="cls-1"
          d="M888.39,368.53a279.15,279.15,0,0,0-198.07-82.08c-154.64,0-280,125.36-280,280s125.36,280,280,280,280-125.36,280-280h560a55,55,0,1,1,16,38.77"
          transform="translate(-409.82 -285.95)"
        />
      </svg>
    </div>
  );
}
