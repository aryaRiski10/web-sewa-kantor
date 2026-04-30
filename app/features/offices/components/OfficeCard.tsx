import { offices } from "../data/offices.mock";
import Image from "next/image";
import Link from "next/link";
import { Offices } from "../types/office.types";

export default function OfficeCard({ office } : { office: Offices }) {
    return (
        <>
        <Link href={`/office/${office.slug}`} className="card">
            <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                <div className="thumbnail-container relative w-full h-[200px]">
                    <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                        {office.tags[0]}
                    </p>
                    <Image src={office.image} className="object-cover" alt="thumbnails" fill sizes="(max-width: 768px) 100vw, 33vw"
/>
                </div>
                <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                    <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">{office.title}</h3>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-xl leading-[30px]">Rp {office.price}</p>
                        <div className="flex items-center justify-end gap-[6px]">
                            <p className="font-semibold">{office.duration}</p>
                            <Image src="/assets/images/icons/clock.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-end gap-[6px]">
                            <Image src="/assets/images/icons/location.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
                            <p className="font-semibold">{office.location}</p>
                        </div>
                        <div className="flex items-center justify-end gap-[6px]">
                            <p className="font-semibold">{office.rating}/5</p>
                            <Image src="/assets/images/icons/Star 1.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-end gap-[6px]">
                            <Image src="/assets/images/icons/wifi.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
                            <p className="font-semibold">Fast-Connection</p>
                        </div>
                        <div className="flex items-center justify-end gap-[6px]">
                            <Image src="/assets/images/icons/security-user.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
                            <p className="font-semibold">Secure 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

        </>
    )
}