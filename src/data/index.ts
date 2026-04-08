import type { Category, Example, Manifest } from '../types/manifest';
import manifestData from './manifest.json';

const manifest = manifestData as Manifest;

export function getCategories(): Category[] {
  return manifest.categories;
}

export function getExamples(): Example[] {
  return manifest.examples;
}

export function getExampleBySlug(slug: string): Example | undefined {
  return manifest.examples.find((e) => e.slug === slug);
}

export function getExamplesByCategory(categoryId: string): Example[] {
  return manifest.examples.filter((e) => e.category === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return manifest.categories.find((c) => c.id === id);
}

/**
 * Returns only categories that have at least one example.
 * Used by CategoryPills to avoid rendering empty categories.
 */
export function getCategoriesWithExamples(): (Category & { count: number })[] {
  return manifest.categories
    .map((cat) => ({
      ...cat,
      count: manifest.examples.filter((e) => e.category === cat.id).length,
    }))
    .filter((cat) => cat.count > 0);
}
