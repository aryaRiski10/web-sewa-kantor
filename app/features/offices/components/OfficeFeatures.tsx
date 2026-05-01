import Image from "next/image"

const FEATURES_MAP = [
  {
    label: "Privacy",
    description: "For Yourself",
    icon: "/assets/images/icons/security-user.svg"
  },
  {
    label: "Global Event",
    description: "Startup Contest",
    icon: "/assets/images/icons/cup.svg"
  },
  {
    label: "Sustainbility",
    description: "Long-term Goals",
    icon: "/assets/images/icons/home-trend-up.svg"
  },
  {
    label: "Extra Snacks",
    description: "Work-Life Balance",
    icon: "/assets/images/icons/coffee.svg"
  },
  {
    label: "Compact",
    description: "Good for Focus",
    icon: "/assets/images/icons/3dcube.svg"
  },
  {
    label: "Free Move",
    description: "Anytime 24/7",
    icon: "/assets/images/icons/group.svg"
  }
]
export default function OfficeFeatures( {features}: {features: string[]} ) {

    return (
        <>
        {features.map((feature) => {
          const matched = FEATURES_MAP.find((f) => f.label === feature);
          if (!matched) return null;

          return (
            <div key={feature} className="flex items-center gap-4">
              <Image width={24} height={24}
                src={matched.icon}
                className="w-[34px] h-[34px] max-md:w-[24px] max-md:h-[24px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px] max-md:text-base">{matched.label}</p>
                <p className="text-sm leading-[21px]">{matched.description}</p>
              </div>
            </div>
          )
        })}
            
        </>
    )
}