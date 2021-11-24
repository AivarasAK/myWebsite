import { useEffect, useRef, useState } from "react";
import ProjectsSvg from "../COMPONENTS/projects/procectsvg";
import anime from "animejs";
import Mouse from "../COMPONENTS/mouse";
import Languagebar from "../COMPONENTS/languagebar";
import { projects } from "../data";
import Navigationbar from "../COMPONENTS/navigationbar";
import Image from "next/dist/client/image";
import { useRouter } from "next/dist/client/router";
import { locales } from "../locales";
import Header from "../COMPONENTS/header";
import Soclinks from "../COMPONENTS/soclinks";
import Logoscreen from "../COMPONENTS/logoscreen";

export default function Projects() {
  const router = useRouter();
  const refarray = useRef([]);
  const projelwrpref = useRef();
  const dotswrp = useRef();
  refarray.current = [];
  const [mousehidden, setmousehidden] = useState(false);
  const [showel, setshowel] = useState(false);
  const [firstanimation, setfirstanimation] = useState(false);
  const [dot, setdot] = useState(1);
  const [entereddot, setentereddot] = useState(null);
  const [scrollindex, setscrollindex] = useState(0);
  const [projectsimage, setprojectsimage] = useState([]);
  const [websitenames, setwebsitenames] = useState([]);
  const [websitenr, setwebsitenr] = useState([]);
  const [websitereview, setwebsitereview] = useState([]);
  const [drops, setDrops] = useState([]);
  const [wheeling, setwheeling] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setfirstanimation(true);
    }
  }, []);

  useEffect(() => {
    setscrollindex(0);
  }, [router.locale]);

  useEffect(() => {
    let wh = true;
    function wheeled(e) {
      if (wh) {
        if (e.deltaY < 0) {
          setwheeling(Date.now() * -1);
        } else {
          setwheeling(Date.now() * 1);
        }

        wh = false;
        setTimeout(() => {
          wh = true;
        }, 500);
      }
    }
    let ts, te;
    function whattodo() {
      if (ts && te) {
        if (ts > te) {
          setwheeling(Date.now() * 1);
        } else {
          setwheeling(Date.now() * -1);
        }
      }
    }

    function touchst(e) {
      ts = e.touches[0].pageX;
    }
    function touchend(e) {
      te = e.changedTouches[0].pageX;
      whattodo();
    }

    document.addEventListener("touchstart", touchst);
    document.addEventListener("touchend", touchend);
    document.addEventListener("wheel", wheeled);
    return () => {
      document.removeEventListener("wheel", wheeled);
      document.removeEventListener("touchstart", touchst);
      document.removeEventListener("touchend", touchend);
    };
  }, []);

  useEffect(() => {
    if (wheeling !== false) {
      if (wheeling < 0) {
        if (scrollindex > 0) {
          setscrollindex(scrollindex - 1);
        }
      } else {
        if (scrollindex < 3) {
          setscrollindex(scrollindex + 1);
        }
      }
    }
  }, [wheeling]);

  function animate(
    targets,
    opacity,
    easing,
    duration,
    delay,
    translateY,
    scale
  ) {
    anime({
      targets,
      opacity,
      easing,
      duration,
      delay,
      translateY,
      scale,
      complete: () => {
        anime.remove(targets);
      },
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: window.innerWidth * scrollindex,
      behavior: "smooth",
    });
    setdot(scrollindex + 1);
  }, [scrollindex]);

  useEffect(() => {
    if (firstanimation) {
      animate(websitenr[scrollindex], [0, 1], "easeOutQuad", 1000, 1200, null);
      animate(
        websitenames[scrollindex],
        [0, 1],
        "easeOutQuad",
        400,
        600,
        [0, 0],
        [0, 1]
      );
      animate(
        projectsimage[scrollindex],
        [1, 1],
        "easeOutQuad",
        1000,
        1450,
        [0, 0],
        [0.9, 1]
      );
      animate(
        websitereview[scrollindex],
        [0, 1],
        "easeInOutQuad",
        600,
        600,
        [10, 0],
        [1, 1]
      );

      animate(
        drops[scrollindex],
        [1, 0],
        "easeInOutQuad",
        1300,
        1000,
        [0, 0],
        [0, 1]
      );
    }
  }, [
    scrollindex,
    drops,
    projectsimage,
    websitenames,
    websitenr,
    websitereview,
  ]);

  useEffect(() => {
    animate(
      dotswrp.current,
      [0, 1],
      "easeInOutQuad",
      1000,
      200,
      ["-50%", "-50%"],
      1
    );
    animate(projelwrpref.current, [0, 1], "easeInQuad", 100, 0, [0, 0], [1, 1]);
    let prin = [];
    let wn = [];
    let nr = [];
    let wr = [];

    let drops = [];

    for (const el of refarray.current) {
      if (el.className === "projectsimgref") {
        prin.push(el);
      }
      if (el.className === "navbarelementtext") {
        wn.push(el);
      }
      if (el.className === "websitenr") {
        nr.push(el);
      }
      if (el.className === "websitereview") {
        wr.push(el);
      }

      if (el.className === "dotdropprojects") {
        drops.push(el);
      }
    }
    animate(prin[0], [0, 1], "easeInQuad", 1800, 600, [0, 0], [1, 1]);
    animate(wn[0], [0, 1], "easeInQuad", 500, 1000);
    animate(nr[0], [0, 1], "linear", 500, 2400);
    animate(wr[0], [0, 1], "easeInQuad", 1000, 1900);

    setprojectsimage(prin);
    setwebsitenames(wn);
    setwebsitenr(nr);
    setwebsitereview(wr);

    setDrops(drops);

    let st = setTimeout(() => {
      setfirstanimation(true);
      prin = [];
      wn = [];
      nr = [];
      wr = [];

      drops = [];
    }, 2600);

    return () => {
      clearTimeout(st);
    };
  }, []);

  function createDots() {
    let arr = [];
    for (let i = 1; i < 5; i++) {
      arr.push(
        <div
          className={dot === i ? "dotwrappermarked" : "dotwrapper"}
          key={i}
          onMouseEnter={() => {
            setmousehidden(true);
            setentereddot(i);
          }}
          onMouseLeave={() => {
            setmousehidden(false);
            setentereddot(null);
          }}
          onClick={() => {
            setdot(i);
            setscrollindex(i - 1);
          }}
        >
          <div className={entereddot === i ? "leftshevron" : "shhidden"}>
            {"<"}
          </div>
          <div className="dot">
            {dot && dot === i ? <div className="dotcenter"></div> : null}
          </div>
          <div className={entereddot === i ? "rightshevron" : "shhidden"}>
            {"/>"}
          </div>
        </div>
      );
    }
    return arr;
  }

  function addtorefs(el) {
    if (el && !refarray.current.includes(el)) {
      refarray.current.push(el);
    }
  }

  return (
    <div className="projectsglobalwrapper">
      <Logoscreen />
      <Header />
      <Soclinks
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <Languagebar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <div ref={dotswrp} className="projectsdotsglobal">
        {createDots()}
      </div>
      <Navigationbar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <Mouse mouse={mousehidden} />

      <div ref={projelwrpref} className="smoothloaderprojects">
        {projects.map((el, i) => {
          return (
            <div key={i} className="project">
              <div className="projectelementswrapper">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={el.href}
                  className="imgwrapper"
                  onMouseEnter={() => {
                    setmousehidden(true);
                  }}
                  onMouseLeave={() => {
                    setmousehidden(false);
                  }}
                >
                  <div ref={addtorefs} className="projectsimgref">
                    <div className="projectsimgwrapper">
                      <Image
                        width={400}
                        height={400}
                        alt="projects image"
                        id={el.imgclass}
                        className="projectsimage"
                        src={el.imgsrc}
                        priority="true"
                      />
                    </div>
                  </div>
                </a>

                <div className="middletextwrapper">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={el.href}
                    className="websitename"
                  >
                    <div
                      className="navbarelementwrapper"
                      onMouseEnter={() => {
                        setshowel(el.showel);
                        setmousehidden(true);
                      }}
                      onMouseLeave={() => {
                        setshowel(false);
                        setmousehidden(false);
                      }}
                    >
                      <div
                        className={
                          showel && showel === el.showel
                            ? "leftshevron"
                            : "shhidden"
                        }
                      >
                        {"<"}
                      </div>
                      <div ref={addtorefs} className="navbarelementtext">
                        {el.linktxt}
                      </div>
                      <div
                        className={
                          showel && showel === el.showel
                            ? "rightshevron"
                            : "shhidden"
                        }
                      >
                        {"/>"}
                      </div>
                    </div>
                  </a>

                  <div ref={addtorefs} className="websitereview">
                    {locales.projects[router.locale][i].reviewtxt}
                  </div>
                </div>
                <div className="nrwrapper">
                  <div ref={addtorefs} className="websitenr">
                    {el.nrtxt}
                  </div>
                  <div ref={addtorefs} className="dotdropprojects"></div>
                </div>

                <ProjectsSvg />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
