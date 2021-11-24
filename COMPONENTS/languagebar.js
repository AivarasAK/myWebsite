import anime from "animejs";
import { useRouter } from "next/dist/client/router";
import { useEffect, useRef, useState } from "react";

export default function Languagebar({ mouse }) {
  const router = useRouter();
  const langbar = useRef();
  const [lang, setlang] = useState(null);

  function setlocalecookie(loc) {
    document.cookie = `NEXT_LOCALE=${loc}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    router.push(router.route, router.route, { locale: loc });
  }

  useEffect(() => {
    anime({
      targets: langbar.current,
      translateY: router.pathname === "/" ? [-50, 0] : [0, 0],
      duration: router.pathname === "/" ? 800 : 1000,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      delay: router.pathname === "/" && window.innerWidth > 700 ? 1800 : 200,
    });
  }, [router.pathname]);

  return (
    <div ref={langbar} className="Languagebarwrapper">
      <div
        className="languageinsidewrapper"
        onMouseEnter={() => {
          setlang("lt");
          mouse(true);
        }}
        onMouseLeave={() => {
          setlang(null);
          mouse(false);
        }}
        onClick={() => {
          setlocalecookie("lt");
        }}
      >
        <div className={lang === "lt" ? "leftshevron" : "shhidden"}>{"<"}</div>
        <div
          style={{ opacity: router.locale === "lt" ? 1 : 0.5 }}
          className="language"
        >
          LT
        </div>
        <div className={lang === "lt" ? "rightshevron" : "shhidden"}>
          {"/>"}
        </div>
      </div>
      <div
        className="languageinsidewrapper"
        onMouseEnter={() => {
          setlang("en");
          mouse(true);
        }}
        onMouseLeave={() => {
          setlang(null);
          mouse(false);
        }}
        onClick={() => {
          setlocalecookie("en");
        }}
      >
        <div className={lang === "en" ? "leftshevron" : "shhidden"}>{"<"}</div>
        <div
          style={{ opacity: router.locale === "en" ? 1 : 0.5 }}
          className="language"
        >
          EN
        </div>
        <div className={lang === "en" ? "rightshevron" : "shhidden"}>
          {"/>"}
        </div>
      </div>
    </div>
  );
}
