'use client'
import Navbar from "./components/Navbar";
import CitiesSection from "./features/cities/sections/CitiesSection";
import OfficesSection from "./features/offices/sections/OfficesSection";
import BenefitsSection from "./components/BenefitsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

export default function Home() {
    const clientLogos = [
        { name: "tesla", image: "/assets/images/logos/TESLA.svg" },
        { name: "libra", image: "/assets/images/logos/Libra 2.svg" },
        { name: "binance", image: "/assets/images/logos/Binance logo.svg" },
        { name: "facebook", image: "/assets/images/logos/Facebook 7.svg" },
        { name: "microsoft", image: "/assets/images/logos/Microsoft 6.svg" },
    ];

    const loopingLogos = [...clientLogos, ...clientLogos];

  return (
    <>
    <Navbar />
    <header className="flex flex-col w-full">
        <section id="Hero-Banner" className="relative flex h-[720px] -mb-[93px]">
            <div id="Hero-Text" className="relative flex flex-col w-full max-w-[650px] max-md:max-w-full max-lg:mx-6 h-fit rounded-[30px] border border-[#E0DEF7] p-10 max-md:p-4 max-md:mt-36 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10">
                <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929] ">
                    <Image src="/assets/images/icons/crown-white.svg" className="w-5 h-5" alt="icon" width={20} height={20} />
                    <span className="font-semibold text-white max-md:text-sm">We’ve won top productivity 500 fortunes</span>
                </div>
                <h1 className="font-extrabold text-[50px] leading-[60px] max-md:text-[30px] max-md:leading-[36px]">All Great Offices.<br />Grow Your Business.</h1>
                <p className="text-lg leading-8 text-[#000929] max-md:text-sm max-md:leading-6">Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik dan sehat dalam tumbuhkan karir.</p>
                <div className="flex items-center gap-5 max-md:gap-3 flex-wrap">
                    <a href="#" className="flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0D903A] max-md:px-4 max-md:py-2">
                        <Image src="/assets/images/icons/slider-horizontal-white.svg" className="w-[30px] h-[30px] max-md:w-5 max-md:h-5" alt="icon" width={30} height={30} />
                        <span className="font-bold text-xl leading-[30px] text-[#F7F7FD] max-md:text-sm">Explore Now</span>
                    </a>
                    <a href="#" className="flex items-center rounded-full border border-[#000929] p-[20px_26px] gap-3 bg-white max-md:px-4 max-md:py-2">
                        <Image src="/assets/images/icons/video-octagon.svg" className="w-[30px] h-[30px] max-md:w-5 max-md:h-5" alt="icon" width={30} height={30} />
                        <span className="font-semibold text-xl leading-[30px] max-md:text-sm">Watch Story</span>
                    </a>
                </div>
            </div>
            <div id="Hero-Image" className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden">
                <Image src="/assets/images/backgrounds/banner.webp" className="object-cover" alt="hero background" loading="eager" fill />
            </div>
        </section>
        <div className="flex flex-col pt-[150px] pb-10 px-0 gap-10 bg-[#0D903A] w-full py-10 overflow-hidden">
            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={40}
                grabCursor={true}
                a11y={false}
                freeMode={true}
                speed={11000}
                loop={true}
                slidesPerView="auto"
                autoplay={{
                    delay: 0.5,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0:   { spaceBetween: 40 },
                    480: { spaceBetween: 60 },
                    767: { spaceBetween: 80 },
                    992: { spaceBetween: 120 },
                }}
                className="ease-linear logo-carousel flex items-center justify-center flex-wrap max-w-full h-[38px] mx-auto gap-[60px]"
            >
                {loopingLogos.map((logo, index) => (
                    <SwiperSlide key={`${logo.name}-${index}`} className="w-auto content-center flex items-center justify-center">
                        <Image className={`${logo.name}`} src={logo.image} alt={`${logo.name} logo`} width={120} height={38} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 justify-center gap-[50px] px-4">
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="text-xl leading-[30px] text-[#F7F7FD]">Comfortable Space</p>
                    <p className="font-bold text-[38px] leading-[57px] text-white">580M+</p>
                </div>
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="text-xl leading-[30px] text-[#F7F7FD]">Startups Succeed</p>
                    <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
                </div>
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
                    <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
                </div>
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="text-xl leading-[30px] text-[#F7F7FD]">Supportive Events</p>
                    <p className="font-bold text-[38px] leading-[57px] text-white">139M+</p>
                </div>
            </div>
        </div>
    </header>
    <CitiesSection  />
    <BenefitsSection />
    <OfficesSection />
    </>
  );
}
