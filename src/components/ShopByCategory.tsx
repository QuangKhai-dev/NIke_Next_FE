import Image from "next/image";
import React from "react";
import shopCategory1 from "./../assets/img/shop_category_1.png";
import shopCategory2 from "./../assets/img/shop_category_2.png";
import shopCategory3 from "./../assets/img/shop_category_3.png";
type Props = {};

const ShopByCategory = (props: Props) => {
  return (
    <section className="shop_by_category">
      <div className="container">
        <h2 className="text-3xl">Shop By Category</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="shop_category_item relative ">
            <Image src={shopCategory1} alt="shop category" className="w-full" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-3xl mb-5">Apparel</h3>
              <button className="btn-white-light">Shop</button>
            </div>
          </div>
          <div className="shop_category_item relative">
            <Image src={shopCategory2} alt="shop category" className="w-full" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-3xl mb-5">Footwear</h3>
              <button className="btn-white-light">Shop</button>
            </div>
          </div>
          <div className="shop_category_item relative">
            <Image src={shopCategory3} alt="shop category" className="w-full" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-3xl mb-5">
                Accessories & Equipment
              </h3>
              <button className="btn-white-light">Shop</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
