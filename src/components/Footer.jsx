import React from "react";

function Footer() {
  return (
    <div className="footer flex flex-space-between bg-secondary p-1">
      <div className="  flex">
        <div
          className="  flex flex-align-center "
          style={{ "--flex-gap": "0.2rem" }}
        >
          <img src="assets/phone.svg" alt="Phone" />
          <p className="fs-300">(480) 555-0103</p>
        </div>
        <div
          className="  flex flex-align-center "
          style={{ "--flex-gap": "0.2rem" }}
        >
          <img src="assets/map.svg" alt="map" />
          <p className="fs-300">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
        </div>
        <div
          className="  flex flex-align-center "
          style={{ "--flex-gap": "0.2rem" }}
        >
          <img src="assets/email.svg" alt="email" />
          <p className="fs-300">debra.holt@example.com</p>
        </div>
        <div className="  flex">
          <img src="assets/fb.svg" alt="facebook" />
          <img src="assets/instagram.svg" alt="instagram" />
          <img src="assets/twitter.svg" alt="Twitter" />
        </div>
      </div>

      <div
        className="  flex flex-align-center "
        style={{ "--flex-gap": "0.2rem" }}
      >
        <img src="assets/copyright.svg" alt="copyright" />
        <p className="fs-300">Developed by mabdullahse</p>
      </div>
    </div>
  );
}

export default Footer;
