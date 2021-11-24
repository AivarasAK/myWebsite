import { useEffect, useRef } from "react";
import anime from "animejs";
import { useRouter } from "next/dist/client/router";
export default function Apiebutton({ showel, mouse, txt }) {
  const elref = useRef();
  const router = useRouter();
  useEffect(() => {
    anime({
      targets: elref.current,
      opacity: [0, 1],
      duration: 2800,
      delay: window.innerWidth > 700 ? 2800 : 0,
    });
  }, []);

  return (
    <div
      onClick={() => {
        router.push("/services");
      }}
      ref={elref}
      className="apiebuttonmain"
    >
      <div
        className={
          showel && showel !== "apie"
            ? "navbarelementwrapperdimmed"
            : "navbarelementwrapper"
        }
        onMouseEnter={() => {
          mouse(true, "apie");
        }}
        onMouseLeave={() => {
          mouse(false, false);
        }}
      >
        <div
          style={{ opacity: showel === "apie" ? 1 : 0 }}
          className="leftshevron"
        >
          {"<"}
        </div>
        <div className="navbarelementtext"> {txt}</div>
        <div
          style={{ opacity: showel === "apie" ? 1 : 0 }}
          className="rightshevron"
        >
          {"/>"}
        </div>
      </div>
    </div>
  );
}
