import { useEffect, useState } from "react";
import Servicessvg from "../COMPONENTS/services/svg";
import anime from "animejs";
import { imagesourcesforservices } from "../data";
import Image from "next/image";
import Mouse from "../COMPONENTS/mouse";
import Languagebar from "../COMPONENTS/languagebar";
import Navigationbar from "../COMPONENTS/navigationbar";
import Header from "../COMPONENTS/header";
import { locales } from "../locales";
import { useRouter } from "next/dist/client/router";
import Soclinks from "../COMPONENTS/soclinks";
import Logoscreen from "../COMPONENTS/logoscreen";

export default function Services() {
  const router = useRouter();
  const [clicked, setclicked] = useState(null);
  const [firstclick, setfirstclick] = useState(false);
  const [rendertechs, setrendertechs] = useState([]);
  const [mousehidden, setmousehidden] = useState(false);
  const [stacktext, setstacktext] = useState(false);
  const [txtposition, settxtposition] = useState(false);
  const [refs, setrefs] = useState([]);

  useEffect(() => {
    if (txtposition !== false) {
      let localetxtlocation = ["fe", "be", "fs", "se"];
      let ll = locales.services[localetxtlocation[txtposition]][router.locale];
      setstacktext(ll);
    }
  }, [router.locale, txtposition]);

  useEffect(() => {
    if (refs.length > 0) {
      function animate(params) {
        anime.remove(refs);
        anime({
          targets: refs,
          opacity: [0, 1],
          duration: 600,
          easing: "easeInQuad",
          delay: anime.stagger(200),
        });
      }

      if (firstclick || window.innerWidth <= 1070) {
        animate();
      } else {
        setTimeout(() => {
          animate();
        }, 800);
      }
    }
  }, [refs, clicked, firstclick]);

  function generateTechs(arr, deg, links) {
    let generated = [];
    let r = deg;
    let elm = [];
    function pushref(el) {
      if (el) {
        elm.push(el);
      }
    }

    for (const [i, pic] of arr.entries()) {
      r = r - deg;
      let element = (
        <div
          style={
            window.innerWidth > 850 ? { transform: `rotate(${r}deg)` } : {}
          }
          key={i}
          className="techwrapper"
        >
          <div ref={pushref} className="bubble">
            <div
              onClick={() => {
                window.open(links[i], "_blank");
              }}
              onMouseEnter={() => {
                setmousehidden(true);
              }}
              onMouseLeave={() => {
                setmousehidden(false);
              }}
              className="imgbackgorundservices"
            >
              <div
                className="imagewrp"
                style={
                  window.innerWidth > 850
                    ? { transform: `rotate(${r * -1}deg)` }
                    : {}
                }
              >
                <Image
                  alt="project image"
                  layout="fill"
                  className="bubbleimg"
                  src={pic}
                />
              </div>
            </div>
          </div>
        </div>
      );

      generated.push(element);
    }
    setrefs(elm);
    setrendertechs(generated);

    generated = [];
  }

  useEffect(() => {
    switch (clicked) {
      case 1:
        generateTechs(
          imagesourcesforservices.fe,
          28,
          imagesourcesforservices.fel
        );

        break;
      case 2:
        generateTechs(
          imagesourcesforservices.be,
          28,
          imagesourcesforservices.bel
        );

        break;
      case 3:
        generateTechs(
          [...imagesourcesforservices.fe, ...imagesourcesforservices.be],
          24,
          [...imagesourcesforservices.fel, ...imagesourcesforservices.bel]
        );

        break;
      case 4:
        generateTechs(
          imagesourcesforservices.se,
          28,
          imagesourcesforservices.sel
        );

        break;

      default:
        break;
    }
  }, [clicked]);

  return (
    <div className="servicesglobalwrapper">
      <Logoscreen />
      <Soclinks
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <Header />
      <Navigationbar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />

      <div className="servicescenterwrapper">
        <Servicessvg
          mouse={(el) => {
            setmousehidden(el);
          }}
          clicked={(el) => {
            if (clicked) {
              setfirstclick(true);
            }
            setclicked(el);
          }}
          textposition={(i) => {
            settxtposition(i);
          }}
        />

        {stacktext ? (
          <div className="servicesinsidetxt">{stacktext}</div>
        ) : null}
        {rendertechs.length !== 0 ? (
          <div className="servicesiconswrapper">{rendertechs}</div>
        ) : null}
      </div>
      <Mouse mouse={mousehidden} />

      <Languagebar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
    </div>
  );
}
