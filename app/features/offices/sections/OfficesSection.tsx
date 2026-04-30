import Image from "next/image"
import {offices} from "../data/offices.mock"
import Link from "next/link"
import OfficeCard from "../components/OfficeCard"

export default function OfficesSection() {
    return (
        <>
        <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px] px-6">
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center max-md:text-2xl/normal">Browse Our Fresh Space.<br />For Your Better Productivity.</h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[30px]">
                {offices.slice(0, 6).map((office, index) =>(
                    <OfficeCard key={office.id} office={office} />
                ))} 
            </div>
            <div className="flex items-center justify-center">
                <Link href="/browse" className="rounded-full py-3 px-5 bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                    Explore All Offices
                </Link>
            </div>
        </section>
        </>
    )
}