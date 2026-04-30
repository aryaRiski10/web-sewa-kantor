import { Offices } from "../types/office.types";

export const offices: Offices[] = [
    {
        id: 1,
        title: "Grand Office Tower",
        slug: "grand-office-tower",
        price: 80000000,
        duration: "1 year",
        address: "123 Main St, Jakarta",
        about: "A great office space in the heart of the city.",
        location: "Jakarta",
        rating: 4.5,
        tags: ["Popular"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
        ],
        features: ["Privacy", "Global Event"],
        salesContact: [
            { name: "John Doe", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Jane Smith", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 2,
        title: "Prime Office Building",
        slug: "prime-office-building",
        price: 120000000,
        duration: "1 year",
        address: "456 Elm St, Tangerang",
        about: "Modern office building with premium facilities.",
        location: "Tangerang",
        rating: 4.5,
        tags: ["Popular"],
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Global Event", "Sustainability", "Extra Snacks"],
        salesContact: [
            { name: "John Doe", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Jane Smith", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 3,
        title: "Skyline Business Center",
        slug: "skyline-business-center",
        price: 95000000,
        duration: "1 year",
        address: "789 Oak Ave, Bandung",
        about: "A stunning office with skyline views and modern amenities.",
        location: "Bandung",
        rating: 4.2,
        tags: ["New"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Compact", "Free Move", "Extra Snacks"],
        salesContact: [
            { name: "Alice Brown", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Bob Johnson", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 4,
        title: "Central Park Office",
        slug: "central-park-office",
        price: 150000000,
        duration: "1 year",
        address: "101 Park Rd, Jakarta Barat",
        about: "Luxury office space surrounded by greenery.",
        location: "Jakarta",
        rating: 4.8,
        tags: ["Popular", "Luxury"],
        image: "/assets/images/thumbnails/thumbnails-4.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Global Event", "Sustainability", "Extra Snacks", "Compact", "Free Move"],
        salesContact: [
            { name: "Charlie Davis", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Diana Evans", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: true
    },
    {
        id: 5,
        title: "Harbor View Office",
        slug: "harbor-view-office",
        price: 110000000,
        duration: "1 year",
        address: "202 Harbor Blvd, Surabaya",
        about: "Office with a breathtaking harbor view.",
        location: "Surabaya",
        rating: 4.3,
        tags: ["New"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Global Event", "Free Move"],
        salesContact: [
            { name: "Eve Foster", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Frank Green", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 6,
        title: "Metro Square Office",
        slug: "metro-square-office",
        price: 75000000,
        duration: "1 year",
        address: "303 Metro St, Bekasi",
        about: "Affordable office space in a strategic location.",
        location: "Bekasi",
        rating: 4.0,
        tags: ["Affordable"],
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Compact", "Extra Snacks", "Privacy"],
        salesContact: [
            { name: "Grace Hill", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Henry Irving", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 7,
        title: "Emerald Office Plaza",
        slug: "emerald-office-plaza",
        price: 135000000,
        duration: "1 year",
        address: "404 Emerald Ln, Depok",
        about: "A premium office plaza with top-notch facilities.",
        location: "Depok",
        rating: 4.6,
        tags: ["Popular"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Sustainability", "Free Move", "Global Event", "Compact"],
        salesContact: [
            { name: "Isla James", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Jack King", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 8,
        title: "Sapphire Tech Hub",
        slug: "sapphire-tech-hub",
        price: 200000000,
        duration: "1 year",
        address: "505 Tech Park, Tangerang Selatan",
        about: "A tech-focused office hub with state-of-the-art infrastructure.",
        location: "Tangerang",
        rating: 4.9,
        tags: ["Popular", "Luxury"],
        image: "/assets/images/thumbnails/thumbnails-4.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Global Event", "Sustainability", "Extra Snacks", "Compact", "Free Move"],
        salesContact: [
            { name: "Karen Lee", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Leo Martin", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: true
    },
    {
        id: 9,
        title: "Golden Gate Office",
        slug: "golden-gate-office",
        price: 88000000,
        duration: "1 year",
        address: "606 Golden St, Bogor",
        about: "A cozy office space perfect for small to medium teams.",
        location: "Bogor",
        rating: 4.1,
        tags: ["New"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Compact", "Free Move"],
        salesContact: [
            { name: "Mia Nelson", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Noah Owen", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 10,
        title: "Diamond Business Suite",
        slug: "diamond-business-suite",
        price: 175000000,
        duration: "1 year",
        address: "707 Diamond Ave, Jakarta Selatan",
        about: "Exclusive business suite for corporate clients.",
        location: "Jakarta",
        rating: 4.7,
        tags: ["Popular", "Luxury"],
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Global Event", "Sustainability", "Extra Snacks"],
        salesContact: [
            { name: "Olivia Parker", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Peter Quinn", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 11,
        title: "Platinum Work Space",
        slug: "platinum-work-space",
        price: 65000000,
        duration: "1 year",
        address: "808 Platinum Rd, Tangerang",
        about: "Budget-friendly office with essential amenities.",
        location: "Tangerang",
        rating: 3.9,
        tags: ["Affordable"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Extra Snacks", "Compact"],
        salesContact: [
            { name: "Quinn Roberts", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Rachel Scott", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 12,
        title: "Urban Nest Office",
        slug: "urban-nest-office",
        price: 99000000,
        duration: "1 year",
        address: "909 Urban Blvd, Surabaya",
        about: "A vibrant office space in the urban district.",
        location: "Surabaya",
        rating: 4.4,
        tags: ["Popular"],
        image: "/assets/images/thumbnails/thumbnails-4.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Global Event", "Sustainability", "Free Move"],
        salesContact: [
            { name: "Sam Taylor", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Tina Underwood", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: true
    },
    {
        id: 13,
        title: "Royal Business Tower",
        slug: "royal-business-tower",
        price: 160000000,
        duration: "1 year",
        address: "1010 Royal Ave, Bandung",
        about: "A prestigious tower for high-profile businesses.",
        location: "Bandung",
        rating: 4.6,
        tags: ["Popular", "Luxury"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Sustainability", "Extra Snacks", "Compact", "Free Move"],
        salesContact: [
            { name: "Uma Vance", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Victor White", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 14,
        title: "Silicon Valley Hub",
        slug: "silicon-valley-hub",
        price: 185000000,
        duration: "1 year",
        address: "1111 Silicon St, Jakarta Utara",
        about: "A tech-inspired office hub for startups and enterprises.",
        location: "Jakarta",
        rating: 4.8,
        tags: ["Popular", "New"],
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-4.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Privacy", "Global Event", "Sustainability", "Free Move"],
        salesContact: [
            { name: "Wendy Xavier", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Xander Young", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    },
    {
        id: 15,
        title: "Infinity Office Park",
        slug: "infinity-office-park",
        price: 145000000,
        duration: "1 year",
        address: "1212 Infinity Loop, Bekasi",
        about: "An expansive office park with endless possibilities.",
        location: "Bekasi",
        rating: 4.5,
        tags: ["Popular"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-1.png",
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
            "/assets/images/thumbnails/thumbnail-details-5.png",
        ],
        features: ["Extra Snacks", "Compact", "Free Move"],
        salesContact: [
            { name: "Yara Zimmerman", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
            { name: "Zack Adams", role: "Sales Representative", photo: "/assets/images/photos/photo-2.png" }
        ],
        isBooked: false
    }
]