import { useEffect, useRef, useState } from "react";
import Mouse from "../COMPONENTS/mouse";

import Typewritter from "../COMPONENTS/landingtypewritter";
import Svgcircle from "../COMPONENTS/svgcircle";
import Apiebutton from "../COMPONENTS/navbarbuttons/apie";
import Paslaugosbutton from "../COMPONENTS/navbarbuttons/services";
import Projektaibutton from "../COMPONENTS/navbarbuttons/projektai";
import Languagebar from "../COMPONENTS/languagebar";
import Header from "../COMPONENTS/header";
import { useRouter } from "next/dist/client/router";
import { locales } from "../locales";
import Logoscreen from "../COMPONENTS/logoscreen";

export default function Home() {
  const router = useRouter();
  const centerref = useRef();
  const indexpageref = useRef();
  const [mousehidden, setmousehidden] = useState(false);
  const [showel, setshowel] = useState(false);

  useEffect(() => {
    indexpageref.current.style.opacity = 1;
  }, []);

  return (
    <div ref={indexpageref} className="indexglobalwrp">
      <Logoscreen />
      <Header />
      <Mouse mouse={mousehidden} />
      <Languagebar
        mouse={(el) => {
          setmousehidden(el);
        }}
      />
      <div className="centerdivwrapper">
        <div ref={centerref} className="centerdiv">
          <Typewritter />
          <Svgcircle />

          <div className="apiebtnwrapper">
            <Apiebutton
              txt={locales.main.servicesbutton[router.locale]}
              showel={showel}
              mouse={(el, el2) => {
                setmousehidden(el);
                setshowel(el2);
              }}
            />
          </div>
          <div className="paslaugosbuttonwrapper">
            <Paslaugosbutton
              txt={locales.main.projectsbutton[router.locale]}
              showel={showel}
              mouse={(el, el2) => {
                setmousehidden(el);
                setshowel(el2);
              }}
            />
          </div>
          <div className="projektaibuttonwrapper">
            <Projektaibutton
              txt={locales.main.aboutbutton[router.locale]}
              showel={showel}
              mouse={(el, el2) => {
                setmousehidden(el);
                setshowel(el2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
