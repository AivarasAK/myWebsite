import { useEffect, useRef, useState } from "react";
import Aboutsvg from "../COMPONENTS/about/aboutsvg";
import Mouse from "../COMPONENTS/mouse";
import Image from "next/image";
import anime from "animejs";
import { socicons } from "../data";
import Header from "../COMPONENTS/header";
import Languagebar from "../COMPONENTS/languagebar";
import Navigationbar from "../COMPONENTS/navigationbar";
import { useRouter } from "next/dist/client/router";
import { locales } from "../locales";
import Soclinks from "../COMPONENTS/soclinks";
import Logoscreen from "../COMPONENTS/logoscreen";

export default function Apie() {
  const router = useRouter();
  const motofoto = useRef();
  const helloref = useRef();
  const aboutmetxt = useRef();
  const bottomtxt = useRef();
  const hiderref = useRef();

  const [mousehidden, setmousehidden] = useState(false);
  const [iconstorender, seticonstorender] = useState([]);
  const [refs, setrefs] = useState([]);

  useEffect(() => {
    let rf = [];

    function addtorefs(el) {
      if (el) {
        rf.push(el);
      }
    }

    let arr = socicons.map(({ l, href0, href1 }) => {
      return (
        <div
          key={l}
          onClick={() => {
            window.open(href0, href1);
          }}
          ref={addtorefs}
          onMouseEnter={(e) => {
            setmousehidden(true);
          }}
          onMouseLeave={(e) => {
            setmousehidden(false);
          }}
          className="socicon"
        >
          <Image alt="about picture" layout="fill" src={l} />
        </div>
      );
    });
    setrefs(rf);
    seticonstorender(arr);
  }, []);

  function animate(
    targets,
    opacity,
    easing,
    duration,
    delay,
    translateY,
    translateX,
    scale
  ) {
    anime({
      targets,
      opacity,
      easing,
      translateY,
      duration,
      delay,
      translateX,
      scale,
      complete: () => {
        anime.remove(targets);
      },
    });
  }
  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: refs,
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [20, 0],
        duration: 600,
        easing: "easeOutQuad",
        delay: anime.stagger(200),
      });
    }, 1200);
  }, [refs]);

  useEffect(() => {
    animate(hiderref.current, [0, 1], "easeInQuad", 100, 0, 0, 0, 1);
    animate(motofoto.current, [0, 0.2], "easeInOutQuad", 200, 0, false);
    animate(helloref.current, [0, 1], "easeInOutQuad", 600, 1000, [0, 0]);
    animate(aboutmetxt.current, [0, 1], "easeOutQuad", 1200, 1000, [30, 0]);
    animate(bottomtxt.current, [0, 1], "easeOutQuad", 1200, 1000, [30, 0]);
  }, []);

  return (
    <div className="aboutmainwrapper">
      <Logoscreen />
      <Soclinks
        about={true}
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <Header />
      <Mouse mouse={mousehidden} />
      <Languagebar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <Navigationbar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <div ref={hiderref} className="aboutcenterwrapper">
        <div className="aboutelementswrapper">
          <div ref={motofoto} className="aboutmotoimagewrapper">
            <div className="aboutimginsidewrp">
              <Image
                alt="about motorcycle"
                priority={true}
                layout="fill"
                src="/mocas.svg"
              />
            </div>
          </div>

          <Aboutsvg />
          <div className="abouttxtwrapper">
            <div ref={helloref} className="hellotxtabout">
              {locales.about.title[router.locale]}
            </div>
          </div>
          <div className="aboutmetxtwrapper">
            <div ref={aboutmetxt} className="aboutmetxt">
              {locales.about.subtitle[router.locale]}
            </div>
            <div ref={bottomtxt} className="aboutbottomtxtwrapper">
              <div className="aboutbottomtxt">
                {locales.about.txt1[router.locale]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
