import { useEffect, useRef } from "react";
import anime from "animejs";
import { useRouter } from "next/dist/client/router";
export default function Projektaibutton({ showel, mouse, txt }) {
  const router = useRouter();
  const elref = useRef();
  useEffect(() => {
    anime({
      targets: elref.current,
      opacity: [0, 1],
      duration: 2800,
      delay: window.innerWidth > 700 ? 2200 : 0,
    });
  }, []);

  return (
    <div
      onClick={() => {
        router.push("/about");
      }}
      ref={elref}
      className="projektaibuttonmain"
    >
      <div
        className={
          showel && showel !== "projektai"
            ? "navbarelementwrapperdimmed"
            : "navbarelementwrapper"
        }
        onMouseEnter={() => {
          mouse(true, "projektai");
        }}
        onMouseLeave={() => {
          mouse(false, false);
        }}
      >
        <div
          style={{ opacity: showel === "projektai" ? 1 : 0 }}
          className="leftshevron"
        >
          {"<"}
        </div>
        <div className="navbarelementtext">{txt}</div>
        <div
          style={{ opacity: showel === "projektai" ? 1 : 0 }}
          className="rightshevron"
        >
          {"/>"}
        </div>
      </div>
    </div>
  );
}
