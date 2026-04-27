import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const ADMIN_EMAIL = "admin@tagotha.co.ke";
const ADMIN_PASSWORD = "ChangeMe123!";

async function main() {
  const password = await bcrypt.hash(ADMIN_PASSWORD, 10);

  await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: { password },
    create: {
      email: ADMIN_EMAIL,
      password
    }
  });

  await prisma.siteContent.upsert({
    where: { id: "default-site-content" },
    update: {},
    create: {
      id: "default-site-content",
      heroTitle: "Building Kenya with Quality Materials",
      heroSubtitle:
        "Reliable supply of cement, steel, sand and bulk materials for contractors, hardware stores and home builders across Homa Bay and beyond.",
      heroImage:
        "https://images.unsplash.com/photo-1741778792300-3e420d5fcb26?auto=format&fit=crop&w=1600&q=80",
      ctaBannerTitle: "Ready to source materials for your next project?",
      ctaBannerCopy:
        "Speak with Tagotha Investments for dependable pricing, fast delivery and bulk supply support.",
      aboutSnippet:
        "Tagotha Investments supplies dependable construction materials in Homa Bay with a practical focus on reliability, affordability and durability."
    }
  });

  const products = [
    {
      name: "Premium Cement",
      description: "High-strength cement suited for residential, commercial and infrastructure work.",
      price: 920,
      image:
        "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
      category: "Cement",
      featured: true
    },
    {
      name: "Washed River Sand",
      description: "Clean, consistent sand for plastering, masonry and slab work.",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=1200&q=80",
      category: "Sand",
      featured: true
    },
    {
      name: "Machine-Cut Ballast",
      description: "Durable ballast for foundations, concrete mixing and road projects.",
      price: 5800,
      image:
        "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&q=80",
      category: "Ballast",
      featured: false
    },
    {
      name: "Reinforcement Steel",
      description: "Quality steel bars with dependable tensile strength for site work.",
      price: 1250,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      category: "Steel",
      featured: true
    },
    {
      name: "Pressed Bricks",
      description: "Affordable bricks for perimeter walls, homes and utility structures.",
      price: 38,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      category: "Bricks",
      featured: false
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.name.toLowerCase().replace(/\s+/g, "-") },
      update: product,
      create: {
        id: product.name.toLowerCase().replace(/\s+/g, "-"),
        ...product
      }
    });
  }

  const testimonials = [
    {
      id: "samuel-otieno",
      name: "Samuel Otieno",
      role: "Contractor, Homa Bay",
      message: "Tagotha keeps our sites moving. Delivery is timely and the material quality is consistent."
    },
    {
      id: "mercy-achieng",
      name: "Mercy Achieng",
      role: "Hardware Owner",
      message: "Their pricing works for retail and bulk orders. Communication is direct and dependable."
    },
    {
      id: "david-onyango",
      name: "David Onyango",
      role: "Home Builder",
      message: "I ordered cement and ballast for my home build and the process was smooth from quote to delivery."
    }
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.id },
      update: testimonial,
      create: testimonial
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
