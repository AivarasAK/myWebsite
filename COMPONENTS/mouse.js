import { useEffect, useRef, useState } from "react";
import Image from "next/dist/client/image";
export default function Mouse(p) {
  const [mobile, setmobile] = useState(null);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setmobile(true);
    } else {
      setmobile(false);
    }
  }, []);

  let mouse = useRef();

  useEffect(() => {
    if (!mobile) {
      onmousemove = (e) => {
        if (mouse.current) {
          mouse.current.style.left = e.clientX - 13 + "px";
          mouse.current.style.top = e.clientY - 13 + "px";
        }
      };
    }
  }, [mouse, mobile]);

  {
    if (!mobile) {
      return (
        <div className="mouseglobalwrapper">
          <div
            style={{ opacity: p.mouse ? 0 : 1 }}
            ref={mouse}
            className="mouseimg"
          >
            <Image
              className="imagepic"
              alt="mouse image"
              src="/mouse.svg"
              priority="true"
              width={26}
              height={26}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
