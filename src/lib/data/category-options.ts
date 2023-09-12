import { Category } from "@prisma/client";

export const categoryOptions = Object.values(Category);

export const categoryData: { category: Category; image: string }[] = [
  { category: Category.fruits, image: "/fruits.webp" },
  { category: Category.berries, image: "/berries.webp" },
  { category: Category.desserts, image: "/desserts.webp" },
  { category: Category.drinks, image: "/drinks.webp" },
];
