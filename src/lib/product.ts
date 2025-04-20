export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Simulate a delay to demonstrate suspense
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchProducts(): Promise<Product[]> {
  // Simulate network delay
  await delay(1000);

  // Sample product data
  return [
    {
      id: 1,
      title: "Modern Desk Lamp",
      price: 49.99,
      description:
        "A sleek, adjustable desk lamp with multiple brightness settings and a USB charging port.",
      category: "Home",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      price: 129.99,
      description:
        "Premium wireless earbuds with noise cancellation and 24-hour battery life.",
      category: "Electronics",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "Leather Wallet",
      price: 39.99,
      description:
        "Genuine leather wallet with RFID protection and multiple card slots.",
      category: "Accessories",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      title: "Smart Water Bottle",
      price: 24.99,
      description:
        "Track your hydration with this smart water bottle that syncs with your phone.",
      category: "Health",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      title: "Ceramic Plant Pot",
      price: 19.99,
      description:
        "Minimalist ceramic pot perfect for small indoor plants and succulents.",
      category: "Home",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      title: "Portable Bluetooth Speaker",
      price: 79.99,
      description:
        "Waterproof Bluetooth speaker with 20-hour battery life and impressive sound quality.",
      category: "Electronics",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      title: "Notebook Set",
      price: 14.99,
      description:
        "Set of 3 premium notebooks with dotted, lined, and blank pages.",
      category: "Stationery",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      title: "Yoga Mat",
      price: 29.99,
      description: "Non-slip yoga mat made from eco-friendly materials.",
      category: "Fitness",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];
}
