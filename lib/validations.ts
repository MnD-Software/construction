import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  price: z.coerce.number().nonnegative(),
  image: z.string().url(),
  category: z.string().min(2),
  featured: z.boolean().optional().default(false)
});

export const testimonialSchema = z.object({
  name: z.string().min(2),
  role: z.string().optional(),
  message: z.string().min(10)
});

export const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  message: z.string().min(10)
});

export const siteContentSchema = z.object({
  heroTitle: z.string().min(10),
  heroSubtitle: z.string().min(20),
  heroImage: z.string().url(),
  ctaBannerTitle: z.string().min(10),
  ctaBannerCopy: z.string().min(10),
  aboutSnippet: z.string().min(20).optional().default("Trusted supply for projects across Homa Bay.")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
