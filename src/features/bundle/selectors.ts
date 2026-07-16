import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import products from "../../data/products.json";
import type { Product } from "./types";

export interface CartItem {
  productId: string;
  variantId: string;
  variantName: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  compareAtPrice?: number;
  category: string;
}

export const getCurrentStep = (state: RootState) =>
  state.bundle.currentStep;

export const getSelectedVariant = (
  state: RootState,
  productId: string
) => state.bundle.selections[productId]?.selectedVariant;

export const getVariantQuantity = (
  state: RootState,
  productId: string,
  variantId: string
) =>
  state.bundle.selections[productId]?.quantities[variantId] ?? 0;


export const getCartItems = createSelector(
  [
    (state: RootState) => state.bundle.selections,
  ],
  (selections): CartItem[] => {
    const items: CartItem[] = [];

    Object.entries(selections).forEach(
      ([productId, selection]) => {
        const product = (products as Product[]).find(
          (p) => p.id === productId
        );

        if (!product) return;

        Object.entries(selection.quantities).forEach(
          ([variantId, quantity]) => {
            if (quantity <= 0) return;

            const variant = product.variants.find(
              (v) => v.id === variantId
            );

            items.push({
              productId,
              variantId,
              variantName: variant?.name ?? "",
              name: product.name,
              image: variant?.image ?? product.image,
              quantity,
              price: product.price,
              compareAtPrice: product.compareAtPrice,
              category: product.category,
            });
          }
        );
      }
    );

    return items;
  }
);


export const getSelectedCountByCategory = (
  state: RootState,
  category: string
) => {
  const categoryProducts = (products as Product[]).filter(
    (product) => product.category === category
  );

  let count = 0;

  categoryProducts.forEach((product) => {
    const selection = state.bundle.selections[product.id];

    if (!selection) return;

    const hasSelected = Object.values(selection.quantities).some(
      (qty) => qty > 0
    );

    if (hasSelected) {
      count++;
    }
  });

  return count;
};

export const getSummary = createSelector(
  [getCartItems],
  (items) => {

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const original = items.reduce(
      (sum, item) =>
        sum +
        (item.compareAtPrice ?? item.price) *
          item.quantity,
      0
    );

    return {
      subtotal,
      original,
      savings: original - subtotal,
    };
  }
);