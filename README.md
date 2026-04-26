# Tagotha Investments

Production-ready Next.js app for a Kenyan construction materials supplier, built with App Router, Tailwind CSS, TypeScript, Prisma, NextAuth, Cloudinary, Zustand, Framer Motion, and ShadCN-style UI primitives.

## 1. Project Setup

### Requirements

- Node.js 20+
- npm 10+
- SQLite for local fallback or PostgreSQL for production

### Install

```bash
npm install
cp .env.example .env
```

### Environment

Set these values in `.env`:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="replace-with-a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_EMAIL="admin@tagotha.co.ke"
ADMIN_PASSWORD="ChangeMe123!"
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### Database

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### Run

```bash
npm run dev
```

Open `http://localhost:3000`.

Admin login: use `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## 2. Folder Structure

```text
app/
  about/
  admin/
  api/
  contact/
  login/
  products/
  services/
components/
  admin/
  motion/
  ui/
lib/
prisma/
types/
```

## 3. Components

- Marketing UI: hero, navbar, footer, WhatsApp float, section heading, product cards, testimonial slider
- Admin UI: sidebar, product form, testimonial form, homepage content form, image upload field, delete actions
- Base UI: button, card, input, textarea, badge, label, table, skeleton

## 4. Pages

- `/` homepage with hero, featured products, services, stats, testimonials, CTA
- `/about` company story, mission, vision, local trust messaging
- `/products` searchable and filterable catalogue
- `/products/[id]` product detail with pricing and WhatsApp order CTA
- `/services` delivery, bulk supply, contractor partnerships
- `/contact` phone, WhatsApp, map, contact form
- `/login` admin sign-in
- `/admin/*` dashboard and CRUD management pages

## 5. API Routes

- `POST /api/contact`
- `GET, POST /api/products`
- `PATCH, DELETE /api/products/[id]`
- `GET, POST /api/testimonials`
- `PATCH, DELETE /api/testimonials/[id]`
- `PATCH /api/site-content`
- `POST /api/upload`
- `GET, POST /api/auth/[...nextauth]`

## 6. Database Schema

- `User`
- `Product`
- `Testimonial`
- `Contact`
- `SiteContent`

Schema lives in [prisma/schema.prisma](./prisma/schema.prisma).

## 7. Admin Dashboard

Features included:

- Email/password login with NextAuth credentials
- Product CRUD
- Testimonial CRUD
- Homepage content editing
- Contact submission review
- Cloudinary image upload
- Toast notifications and loading states

## Deployment Notes

- Primary target: Node hosting such as Truehost using `npm run build` and `npm start`
- Static export fallback: set `STATIC_EXPORT=true` for brochure-style export only; admin auth, API routes, and DB-backed editing require Node runtime
- For PostgreSQL, switch the Prisma datasource provider in [prisma/schema.prisma](./prisma/schema.prisma) from `sqlite` to `postgresql` and update `DATABASE_URL`
