const properties = [
    {
        id: "1",
        title: "Modern Oceanfront Villa",
        price: "$4,500,000",
        priceValue: 4500000,
        location: "Malibu, CA",
        beds: 5,
        baths: 6,
        sqft: 6500,
        type: "Villa",
        description: "Experience true luxury in this stunning modern oceanfront villa. Features include an infinity pool, private beach access, and panoramic ocean views from every room.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: "2",
        title: "Skyline Penthouse",
        price: "$2,850,000",
        priceValue: 2850000,
        location: "New York, NY",
        beds: 3,
        baths: 3.5,
        sqft: 3200,
        type: "Apartment",
        description: "Breathtaking city views from this top-floor penthouse. Custom Italian kitchen, smart home integration, and a private rooftop terrace.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: "3",
        title: "Contemporary Hillside Estate",
        price: "$5,200,000",
        priceValue: 5200000,
        location: "Beverly Hills, CA",
        beds: 6,
        baths: 8,
        sqft: 8500,
        type: "House",
        description: "A masterpiece of modern architecture seamlessly blending indoor and outdoor living. Includes a home theater, wine cellar, and guest house.",
        image: "https://images.unsplash.com/photo-1600607687931-cebf1a513028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: "4",
        title: "Minimalist Desert Retreat",
        price: "$1,750,000",
        priceValue: 1750000,
        location: "Scottsdale, AZ",
        beds: 4,
        baths: 4,
        sqft: 4100,
        type: "House",
        description: "Tranquil desert living in a sleek, minimalist home. Zero-edge pool, extensive outdoor entertainment areas, and spectacular sunset views.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: false
    },
    {
        id: "5",
        title: "Historic Townhouse Renovation",
        price: "$3,100,000",
        priceValue: 3100000,
        location: "Boston, MA",
        beds: 4,
        baths: 3,
        sqft: 2800,
        type: "Townhouse",
        description: "Meticulously restored historic townhouse featuring modern amenities while preserving original architectural details. Private courtyard garden.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: false
    },
    {
        id: "6",
        title: "Lakeside Modern Cabin",
        price: "$1,450,000",
        priceValue: 1450000,
        location: "Lake Tahoe, NV",
        beds: 3,
        baths: 2.5,
        sqft: 2200,
        type: "Cabin",
        description: "A modern take on the classic lakeside cabin. Floor-to-ceiling windows, private dock, and environmentally conscious design.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        featured: false
    }
];

// If using ES modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = properties;
}
