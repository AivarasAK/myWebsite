import anime from "animejs";
import { useRouter } from "next/dist/client/router";
import { useEffect, useRef, useState } from "react";
import { locales } from "../../locales";
export default function Servicessvg(p) {
  const router = useRouter();
  const circle = useRef();

  const servicestxt = useRef();
  const h1 = useRef();
  const h2 = useRef();
  const h3 = useRef();
  const h4 = useRef();

  const [clicked, setclicked] = useState(null);
  const [showel, setshowel] = useState(null);
  const [ww, setww] = useState(null);

  function animate(
    target,
    opacity,
    easing,
    duration,
    delay,
    translateY,
    dashoffset
  ) {
    anime({
      targets: target,
      opacity: opacity,
      strokeDashoffset: [anime.setDashoffset, dashoffset],
      easing: easing,
      translateY: translateY,
      duration: duration,
      delay: delay,
    });
  }

  useEffect(() => {
    setww = window.innerWidth;

    animate(
      servicestxt.current,
      [0, 1],
      "easeInOutQuad",
      800,
      200,
      [80, 0],
      null
    );
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1070) {
      let tgt;

      switch (clicked) {
        case 1:
          tgt = h1.current;
          break;
        case 2:
          tgt = h2.current;
          break;
        case 3:
          tgt = h3.current;
          break;
        case 4:
          tgt = h4.current;
          break;

        default:
          break;
      }

      let arr = [h1.current, h2.current, h3.current, h4.current];
      for (const it of arr) {
        if (tgt !== it) {
          it.style.opacity = 0;
        }
        anime.remove(it);
      }

      animate(tgt, [1, 1], "easeOutQuad", 400, 0, null, 40);
    }
  }, [clicked]);


 

  return (
    <div className="servicessvgwrapper">
      <div ref={servicestxt} className="servicestxt">
        {locales.services.navigation[router.locale].map((el, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                if (!clicked) {
                  animate(
                    circle.current,
                    [1, 1],
                    "easeInOutQuad",
                    1000,
                    0,
                    null,
                    0
                  );
                }
                p.clicked(i + 1);

                p.textposition(i);
                setclicked(i + 1);
              }}
              className="apiebutton"
            >
              <div
                className={
                  showel && showel !== el
                    ? "navbarelementwrapperdimmed"
                    : "navbarelementwrapper"
                }
                onMouseEnter={() => {
                  setshowel(el);
                  p.mouse(true);
                }}
                onMouseLeave={() => {
                  setshowel(null);
                  p.mouse(false);
                }}
              >
                <div
                  style={{ opacity: showel === el ? 1 : 0 }}
                  className="leftshevron"
                >
                  {"<"}
                </div>
                <div className="navbarelementtext"> {el}</div>
                <div
                  style={{ opacity: showel === el ? 1 : 0 }}
                  className="rightshevron"
                >
                  {"/>"}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <svg
        height="100%"
        width="100%"
        className="mainsvg"
        id = 'servicessvg'
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={ww > 1070 ? "0 0 862.08 401" : "0 0 862.08 401"}
      >
        <path
          ref={circle}
          className="servicescircle"
          d="M391.06,139.61a199.88,199.88,0,0,1,9.44,60.89c0,110.46-89.54,200-200,200S.5,311,.5,200.5,90,.5,200.5.5a199.91,199.91,0,0,1,56.13,8"
        />

        <polyline
          ref={h4}
          className="servicessvghand"
          points="391.06 139.61 585.2 207.61 862.08 207.61"
        />

        <polyline
          ref={h1}
          className="servicessvghand"
          points="391.06 139.61 582.02 3.61 862.08 3.61"
        />
        <line
          ref={h3}
          className="servicessvghand"
          x1="391.06"
          y1="139.61"
          x2="862.08"
          y2="139.61"
        />

        <polyline
          ref={h2}
          className="servicessvghand"
          points="391.06 139.61 583.56 71.61 862.08 71.61"
        />
      </svg>
    </div>
  );
}
