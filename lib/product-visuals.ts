type ProductLike = {
  id: string;
  name: string;
  category: string;
  image: string;
};

export const homepageImagePool = [
  "https://images.pexels.com/photos/31531768/pexels-photo-31531768.jpeg",
  "https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg",
  "https://images.pexels.com/photos/14097580/pexels-photo-14097580.jpeg",
  "https://images.pexels.com/photos/33540495/pexels-photo-33540495.jpeg"
] as const;

const categoryImageMap: Record<string, string> = {
  cement: homepageImagePool[0],
  sand: homepageImagePool[1],
  ballast: homepageImagePool[2],
  steel: homepageImagePool[3],
  bricks: homepageImagePool[1]
};

export function getProductDisplayImage(product: Pick<ProductLike, "id" | "name" | "category">, index = 0) {
  const categoryKey = product.category.trim().toLowerCase();
  return categoryImageMap[categoryKey] ?? homepageImagePool[index % homepageImagePool.length];
}

export function withHomepageProductImages<T extends ProductLike>(products: T[]) {
  return products.map((product, index) => ({
    ...product,
    image: getProductDisplayImage(product, index)
  }));
}
