'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Offices } from "../types/office.types";
import Image from "next/image";

export default function OfficeHeader({office}: {office: Offices}) {
    return (
        <section id="Gallery" className="-mb-[50px]">
          <Swiper className="swiper w-full"  spaceBetween={0} slidesPerView="auto" slidesOffsetAfter={0} slidesOffsetBefore={0}>
            <div className="swiper-wrapper">
              {office.images.map((image, i) => (
              <SwiperSlide key={i} className="swiper-slide !w-fit">
                <div className="w-[700px] h-[550px] overflow-hidden">
                  <Image
                    src={image}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                    priority
                    width={900}
                    height={600}
                  />
                </div>
              </SwiperSlide>
              ))}
              
            </div>
          </Swiper>
        </section>
    )
}