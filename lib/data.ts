import { prisma } from "@/lib/prisma";
import { getProductDisplayImage, withHomepageProductImages } from "@/lib/product-visuals";
import { fallbackContent } from "@/lib/site";

const fallbackProducts = [
  {
    id: "cement",
    name: "Premium Cement",
    description: "High-strength cement for homes, commercial work and infrastructure projects.",
    price: 920,
    image: fallbackContent.heroImage,
    category: "Cement",
    featured: true
  },
  {
    id: "sand",
    name: "Washed River Sand",
    description: "Clean sand for plastering, masonry and concrete mixes.",
    price: 4200,
    image: "https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=1200&q=80",
    category: "Sand",
    featured: true
  },
  {
    id: "ballast",
    name: "Machine-Cut Ballast",
    description: "Consistent ballast for slab casting, foundations and roadwork.",
    price: 5800,
    image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&q=80",
    category: "Ballast",
    featured: false
  },
  {
    id: "steel",
    name: "Reinforcement Steel",
    description: "Strong steel bars for reinforced concrete and structural builds.",
    price: 1250,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    category: "Steel",
    featured: true
  },
  {
    id: "bricks",
    name: "Pressed Bricks",
    description: "Affordable bricks for durable walling and utility structures.",
    price: 38,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    category: "Bricks",
    featured: false
  }
];

const fallbackTestimonials = [
  {
    id: "1",
    name: "Samuel Otieno",
    role: "Contractor, Homa Bay",
    message: "Tagotha keeps our projects on schedule and the quality has stayed consistent."
  },
  {
    id: "2",
    name: "Mercy Achieng",
    role: "Hardware Owner",
    message: "We rely on them for practical pricing and dependable restocking."
  },
  {
    id: "3",
    name: "David Onyango",
    role: "Home Builder",
    message: "The team explained what I needed clearly and delivered without delay."
  }
];

export async function getSiteContent() {
  try {
    return (await prisma.siteContent.findFirst()) ?? fallbackContent;
  } catch {
    return fallbackContent;
  }
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
    return products.length
      ? withHomepageProductImages(products.map((item) => ({ ...item, price: Number(item.price) })))
      : withHomepageProductImages(fallbackProducts);
  } catch {
    return withHomepageProductImages(fallbackProducts);
  }
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  return products.filter((item) => item.featured).slice(0, 4);
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return product ? { ...product, price: Number(product.price), image: getProductDisplayImage(product) } : null;
  } catch {
    const product = fallbackProducts.find((item) => item.id === id);
    return product ? { ...product, image: getProductDisplayImage(product) } : null;
  }
}

export async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
    return testimonials.length ? testimonials : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}
