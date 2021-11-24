import anime from "animejs";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { socicons } from "/data";
export default function Soclinks({ mouse, about }) {
  const links = useRef();
  const [showel, setshowel] = useState(null);

  useEffect(() => {
    anime({
      targets: links.current,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
      delay: 200,
    });
  }, []);

  return (
    <div ref={links} className="soclinkswrapper">
      {socicons.map((el, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              window.open(el.href0, el.href1);
            }}
            className="navbarelementwrapper"
            onMouseOver={() => {
              setshowel(el);
              mouse(true);
            }}
            onMouseLeave={() => {
              setshowel(null);
              mouse(false);
            }}
          >
            <div className="soclinksimgwrapper">
              <div
                style={{
                  opacity: showel === el ? 1 : 0,
                }}
                className="leftshevron"
              >
                {"<"}
              </div>
              <div
                onMouseEnter={() => {
                  mouse(true);
                }}
                onMouseLeave={() => {
                  mouse(false);
                }}
                className="soclinkfromwrp"
              >
                <Image
                  alt="social link"
                  className="soclinkimgwrp"
                  width={20}
                  height={20}
                  src={el.l}
                />
              </div>
              <div
                style={{
                  opacity: showel === el ? 1 : 0,
                }}
                className="rightshevron"
              >
                {"/>"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
