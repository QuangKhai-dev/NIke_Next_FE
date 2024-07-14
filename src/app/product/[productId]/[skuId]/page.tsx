// "use client";
import React, { useState } from "react";

import "./style.css";

import Image from "next/image";
import CarouselSwiper from "@/components/Carousel/CarouselSwiper";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imgLook1 from "./../../../../assets/img/completeLook/1.png";
import imgLook2 from "./../../../../assets/img/completeLook/2.png";
import imgLook3 from "./../../../../assets/img/completeLook/3.png";
type Props = {};

async function getData(id: number, sku: string) {
  const res = await fetch(`http://127.0.0.1:8080/products/${id}/${sku}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({
  params,
}: {
  params: { productId: string; skuId: string };
}) => {
  const data = await getData(Number(params.productId), params.skuId);
  console.log(data.productSkus[0]);

  return (
    <section className="product_detail">
      <div className="container">
        <div className="flex pb-20">
          <div className="product_carousel_intro flex flex-row-reverse w-7/12 pr-10 sticky top-10 h-max">
            <CarouselSwiper images={data.productSkus[0].images} />
          </div>
          <div className="product_carousel_info w-3/12 mb-3">
            <h1 className="text-2xl font-helvetica">{data.name}</h1>
            <h2 className="sub_title font-helvetica font-medium">Mens Shoes</h2>
            <p className="py-3">
              {data.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <div className="product_image_color flex space-x-2 mb-5">
              {data.skus.map((item: any, index: any) => {
                return (
                  <Link
                    key={index}
                    href={`/product/${params.productId}/${item.productSkus_sku}`}
                    className="rounded-md border hover:border-black duration-300 border-transparent"
                  >
                    <Image
                      src={item.images_imageUrl}
                      alt={item.productSkus_sku}
                      width={70}
                      height={70}
                      className="rounded-md inline-block"
                    />
                  </Link>
                );
              })}
            </div>
            <div className="product_size">
              <div className="flex justify-between mb-3">
                <h3>Select Size</h3>
                <Link href={"#"}>Size Guide</Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {data.productSkus[0].productStocks.map(
                  (item: any, index: any) => {
                    return (
                      <button
                        key={index}
                        className="py-2 px-5 border border-gray-300 rounded-md hover:border-black duration-300"
                      >
                        {item.optionValue.value}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            <div className="product_action space-y-3 mt-3">
              <button className="w-full inline-block rounded-3xl py-4 bg-black text-white">
                Add to Bag
              </button>
              <button className="w-full inline-block rounded-3xl py-4 border border-gray-300">
                Favourite
              </button>
            </div>
            <div className="product_short_info mt-7">
              <p className="bg-gray-200 py-3 px-6 rounded-md">
                This product is made with at least 20% recycled content by
                weight
              </p>
            </div>
            <div className="product_information mt-10 leading-relaxed">
              <p>
                These AF-1s are going back to school and they just won
                &quot;Best Dressed&quot;. Layers of canvas, synthetic leather
                and velvet create a vintage, varsity-inspired aesthetic.
                Don&apos;t forget to leave your mark: the sockliner graphics are
                inspired by school yearbooks—and we already signed it.
              </p>
              <ul className="mt-5 font-medium list-disc pl-4 space-y-2">
                <li>Colour Shown: {data.productSkus[0].color}</li>
                <li>Style: {data.productSkus[0].sku}</li>
              </ul>

              <button className="font-medium underline mt-7 hover:text-gray-400">
                View Product Details
              </button>
            </div>
            <div className="product_faq mt-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl">
                    Free Delivery and Returns
                  </AccordionTrigger>
                  <AccordionContent>
                    Your order of 5.000.000₫ or more gets free standard
                    delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl">
                    How This Was Made
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4">
                      <li>
                        This product was responsibly designed utilising recycled
                        materials from post-consumer and/or post-manufactured
                        waste. One of our biggest steps on our journey to zero
                        carbon and zero waste is in choosing our materials
                        because they account for more than 70% of any footprint.
                        By reusing existing plastics, yarns and textiles, we
                        significantly reduce our emissions. Our goal is to use
                        as many recycled materials as possible without
                        compromising on performance, durability and style.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">
                    <div>Reviews (1)</div>
                    <div>
                      {/* tạo một mảng ảo render 5 ngôi sao bằng icon <i class="fa-solid fa-star"></i> */}
                      {Array.from({ length: 5 }, (_, index) => (
                        <i
                          key={index}
                          className="fa-solid fa-star text-yellow-500"
                        ></i>
                      ))}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="how_orther_wear space-y-2">
          <h2 className="text-2xl font-medium">How Others Are Wearing It</h2>
          <p>
            Upload your photo or mention @Nike on Instagram for a chance to be
            featured.
          </p>
          <button className="py-2 px-4 border border-gray-300 rounded-3xl font-medium">
            Upload Your Photo
          </button>
        </div>
        <div className="complete_look mt-10">
          <h2 className="text-2xl font-medium mb-10">Complete the Look</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="complete_look_item relative h-[500px]">
              <Image fill src={imgLook1} alt="complete_look_1" />
            </div>
            <div className="complete_look_item relative h-[500px]">
              <Image fill src={imgLook2} alt="complete_look_1" />
            </div>
            <div className="complete_look_item relative h-[500px]">
              <Image fill src={imgLook3} alt="complete_look_1" />
            </div>
          </div>
        </div>
        <div className="you_also_like">
          <Carousel>
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-1/3">
                <Image
                  width={200}
                  height={500}
                  src={imgLook1}
                  alt="complete_look_1"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Page;
