export type Offices ={
    id: number;
    title: string;
    slug: string;
    price: number;
    duration: string;
    address: string;
    about: string;
    location: string;
    rating: number;
    tags: string[];
    image: string;
    images: string[];
    features: string[];
    salesContact: SalesContact[];
    isBooked: boolean;
}

export type SalesContact = {
    name: string;
    role: string;
    photo: string;
}