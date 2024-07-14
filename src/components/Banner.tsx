import React from "react";
type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="banner">
      <div className="container">
        <video
          src="/video/videoBanner.mp4"
          className="w-full"
          autoPlay
          muted
          loop
        />
        <div className="text-center mt-5">
          <h3 className="uppercase font-bold text-8xl">win on air</h3>
          <p>
            Meet the next generation of Nike Air. Engineered to the exact
            specifications of championship athletes.
          </p>
          <span className="btn-dark-light mt-5">Shop Air</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
