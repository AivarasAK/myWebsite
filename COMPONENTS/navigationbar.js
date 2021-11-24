import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import anime from "animejs";
import { useRouter } from "next/dist/client/router";
import { locales } from "../locales";
export default function Navigationbar({ mouse }) {
  const router = useRouter();
  const navbarwrp = useRef();

  let arr2 = ["/services", "/projects", "/about"];

  const [showel, setshowel] = useState(null);
  const [width, setwidth] = useState(null);
  const [navbarshow, setnavbarshow] = useState(false);

  useEffect(() => {
    let w = window.innerWidth;

    navbarwrp.current.style.display = "block";
    anime({
      targets: navbarwrp.current,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
      delay: 200,
    });

    w > 750 ? setnavbarshow(true) : setnavbarshow(false);
    setwidth(window.innerWidth);
  }, []);

  function navbar(params) {
    return (
      <div
        className={width > 750 ? "navbarinsidewrp" : "navbarinsidewrpcolumn"}
      >
        {locales.navbar[router.locale].map((el, i) => {
          return (
            <Link passHref key={i} href={arr2[i]}>
              <div
                className={
                  (showel && showel !== el) || router.pathname !== arr2[i]
                    ? "navbarelementwrapperdimmed"
                    : "navbarelementwrapper"
                }
                onMouseOver={() => {
                  setshowel(el);
                  mouse(true);
                }}
                onMouseLeave={() => {
                  setshowel(null);
                  mouse(false);
                }}
              >
                <div
                  style={{
                    opacity:
                      showel === el || router.pathname === arr2[i] ? 1 : 0,
                  }}
                  className="leftshevron"
                >
                  {"<"}
                </div>
                <div className="navbarelementtextrealbar"> {el}</div>
                <div
                  style={{
                    opacity:
                      showel === el || router.pathname === arr2[i] ? 1 : 0,
                  }}
                  className="rightshevron"
                >
                  {"/>"}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div
        ref={navbarwrp}
        className={
          navbarshow ? "navigationbarwrapper" : "navigationbarwrapperhidden"
        }
      >
        {width > 750 ? (
          navbar()
        ) : (
          <div>
            {navbarshow ? (
              navbar()
            ) : (
              <div
                className="navbariconbubble"
                onClick={() => {
                  setnavbarshow(true);
                }}
              >
                <div className="navbarbubble"></div>
                <div className="navbarbubble"></div>
                <div className="navbarbubble"></div>
                <div className="navbarbubble"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
