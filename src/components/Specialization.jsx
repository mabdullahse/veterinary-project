import React from "react";
import Bar from "../components/Bar";

function Specialization() {
  return (
    <section className=" flex flex-space-between ">
      <div
        className="flex  flex-column  flex-justify-content-center "
        style={{ maxWidth: "33rem" }}
      >
        <Bar />
        <h1 className="fs-800 text-secondary">Our Doctors Specialize in you</h1>
        <h5 className="fs-300 text-tertiary">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </h5>
      </div>
      <div>
        <img
          src="assets/ambulance.png"
          alt="Doctor Smiling"
          style={{ maxWidth: "77%", marginLeft: "auto" }}
        />
      </div>
    </section>
  );
}

export default Specialization;
