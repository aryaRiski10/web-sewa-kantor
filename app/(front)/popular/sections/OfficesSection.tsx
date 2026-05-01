import Image from "next/image"
import {offices} from "../../../features/offices/data/offices.mock"
import Link from "next/link"
import OfficeCard from "../components/OfficeCard"

export default function OfficesSection() {
    return (
        <>
        <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px] px-6">
            <h2 className="font-bold text-[32px] leading-[48px] text-wrap text-center">Browse Our Fresh Space.<br />For Your Better Productivity.</h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[30px]">
                {offices.filter((office) => 
                office.tags.includes("Popular"))
                .map((office) => (
                    <OfficeCard key={office.id} office={office} />
                ))}
            </div>
        </section>
        </>
    )
}