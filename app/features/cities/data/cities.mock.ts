import { offices } from "../../offices/data/offices.mock";
import { City } from "../types/city.types";

const cityNames = [
    "Jakarta",
    "Tangerang",
    "Bandung",
    "Surabaya",
    "Bekasi",
    "Bogor",
    "Depok",
]
function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
export const cities: City[]  =  cityNames.map((name, index) => {
    const officeCount = offices.filter((office) => office.location === name).length;
    const rand = seededRandom(index + 1);
    return {
        id: index + 1,
        name: name,
        offices: officeCount,
        thumbnail: `/assets/images/thumbnails/thumbnails-${index + 1}.png`,
        slug: name.toLowerCase().replace(/\s+/g, '-')
    }
})
