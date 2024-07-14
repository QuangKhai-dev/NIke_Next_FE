import React from "react";
import feature1 from "../assets/img/feature_1.png";
import feature2 from "../assets/img/feature_2.jpg";
import Image from "next/image";

type Props = {};

const Feature = (props: Props) => {
  return (
    <section className="feature py-10">
      <div className="container">
        <h2 className="text-3xl">Featured</h2>
        <div>
          <Image src={feature1} alt="feature img" />
          <Image src={feature2} alt="feature img" className="w-full" />
        </div>
        <div className="text-center mt-5 flex flex-col items-center">
          <h3 className="uppercase font-bold text-8xl w-[72%]">
            Built to Compete Against the Best on Every Track, Court and Pitch
          </h3>
          <span className="btn-dark-light mt-5">Shop Air</span>
        </div>
      </div>
    </section>
  );
};

export default Feature;
