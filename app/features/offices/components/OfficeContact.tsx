import { SalesContact } from "../types/office.types"
import Image from "next/image"

type Props ={
    contact: SalesContact
}
export default function OfficeContact({contact}: Props){

    return (
       <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                <Image
                    src={contact.photo}
                    className="w-full h-full object-cover"
                    alt="photo"
                    width={100}
                    height={100}
                />
                </div>
                <div className="flex flex-col gap-[2px]">
                <p className="font-bold">{contact.name}</p>
                <p className="text-sm leading-[21px]">{contact.role}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <a href="#">
                <Image
                    src="/assets/images/icons/call-green.svg"
                    className="w-10 h-10"
                    alt="icon"
                    width={40}
                    height={40}
                />
                </a>
                
            </div>
        </div>
    )
}