import { City } from "../types/city.types"
import Image from "next/image"
import Link from "next/link"

export default function CityCard({city} : {city: City}) {

    return(
        <>
        <Link href={`/city/${city.slug}`} className="card">
            <div className="relative flex shrink-0 w-57.5 h-75 rounded-[20px] overflow-hidden">
                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-0.5 bg-[linear-gradient(180deg,rgba(0,0,0,0)_49.87%,rgba(0,0,0,0.8)_100%)] z-10">
                    <h3 className="font-bold text-xl leading-7.5 text-white">{city.name}</h3>
                    <p className="text-white">{city.offices} Offices</p>
                </div>
                <Image src={city.thumbnail} className="absolute object-cover" alt="thumbnails" sizes="(max-width: 768px) 100vw, 33vw" fill/>
            </div>
        </Link>
                        
        </>
    )
}