import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductSelection {
  selectedVariant: string | null;
  quantities: Record<string, number>;
}

interface BundleState {
  currentStep: number;
  selections: Record<string, ProductSelection>;
}

interface QuantityPayload {
  productId: string;
  variantId: string;
}
interface SelectVariantPayload {
  productId: string;
  variantId: string;
}

const initialState: BundleState = {
  currentStep: 1,
  selections: {},
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    increaseQuantity: (state, action: PayloadAction<QuantityPayload>) => {
      const { productId, variantId } = action.payload;

      if (!state.selections[productId]) {
        state.selections[productId] = {
          selectedVariant: variantId,
          quantities: {},
        };
      }

      if (!state.selections[productId].quantities[variantId]) {
        state.selections[productId].quantities[variantId] = 0;
      }

      state.selections[productId].selectedVariant = variantId;
      state.selections[productId].quantities[variantId]++;
    },
    selectVariant: (
      state,
      action: PayloadAction<SelectVariantPayload>
    ) => {
      const { productId, variantId } = action.payload;

      if (!state.selections[productId]) {
        state.selections[productId] = {
          selectedVariant: variantId,
          quantities: {},
        };
      }

      state.selections[productId].selectedVariant = variantId;
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<QuantityPayload>
    ) => {
      const { productId, variantId } = action.payload;

      const product = state.selections[productId];

      if (!product) return;

      const currentQty = product.quantities[variantId] ?? 0;

      if (currentQty > 0) {
        product.quantities[variantId]--;
      }
    },
    clearBundle: (state) => {
      state.currentStep = 1;
      state.selections = {};
    },
  },
});

export const { setCurrentStep, increaseQuantity, selectVariant, decreaseQuantity ,clearBundle} = bundleSlice.actions;

export default bundleSlice.reducer;