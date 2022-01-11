import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const slides = [1, 2, 3, 4, 5, 6];

function HeaderDashboard() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });
  useEffect(() => {
    const t = setInterval(
      () => set((state) => (state + 1) % slides.length),
      2000
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="primary-header flex main-section-shadow  p-1  mt-0 ">
      <div className="flex  flex-column  flex-justify-content-center flex-1">
        {/* <h3 className="fs-500 text-primary ">Welcome</h3> */}
        <h1 className="fs-800 text-secondary fancy-color cursor-pointer">
          Welcome to <span className="text-primary">M</span>TAK Pakistan !
        </h1>
        <p className="fs-400 text-tertiary ">
          Overcame any hurdle or any other problem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur, sapiente. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptates, aliquid.
        </p>
      </div>
      <div className="p-relative flex-1">
        {/* <img src="assets/docter.png" alt="Doctor Smiling" /> */}

        {transitions((style, i) => (
          <animated.div
            className="bg-dashboard-image"
            style={{
              ...style,
              backgroundImage: `url(assets/dashboard/${slides[i]}.jpg)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default HeaderDashboard;
