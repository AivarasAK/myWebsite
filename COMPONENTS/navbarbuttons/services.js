import { useEffect, useRef } from "react";
import anime from "animejs";
import { useRouter } from "next/dist/client/router";
export default function Paslaugosbutton({ showel, mouse, txt }) {
  const elref = useRef();
  const router = useRouter();
  useEffect(() => {
    anime({
      targets: elref.current,
      opacity: [0, 1],
      duration: 2800,
      delay: window.innerWidth > 700 ? 1800 : 0,
    });
  }, []);

  return (
    <div
      onClick={() => {
        router.push("/projects");
      }}
      ref={elref}
      className="paslaugosbuttonmain"
    >
      <div
        className={
          showel && showel !== "paslaugos"
            ? "navbarelementwrapperdimmed"
            : "navbarelementwrapper"
        }
        onMouseEnter={() => {
          mouse(true, "paslaugos");
        }}
        onMouseLeave={() => {
          mouse(false, false);
        }}
      >
        <div
          style={{ opacity: showel === "paslaugos" ? 1 : 0 }}
          className="leftshevron"
        >
          {"<"}
        </div>
        <div className="navbarelementtext">{txt}</div>
        <div
          style={{ opacity: showel === "paslaugos" ? 1 : 0 }}
          className="rightshevron"
        >
          {"/>"}
        </div>
      </div>
    </div>
  );
}
