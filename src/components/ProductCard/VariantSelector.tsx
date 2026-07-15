import {
  selectVariant,
} from "../../features/bundle/bundleSlice";

import { getCartItems, getSelectedVariant } from "../../features/bundle/selectors";

import type { Variant } from "../../features/bundle/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

interface VariantSelectorProps {
  productId: string;
  variants: Variant[];
}

const VariantSelector = ({
  productId,
  variants,
}: VariantSelectorProps) => {

  const dispatch = useAppDispatch();

  const selectedVariant = useAppSelector((state) =>
    getSelectedVariant(state, productId)
  );


  return (
    <section className="flex gap-2">

      {variants.map((variant) => {

        const active =
          selectedVariant === variant.id;

        return (
          <div key={variant.id}
            className={`border px-3 py-2 flex gap-2 transition
              ${active
                ? "border-[#4E2FD2] bg-[#F3F0FF]"
                : "border-[#0AA288]"
              }`}
          >
            <span>
              <img src={variant.image} alt="photo" className="" />
            </span>
            <button
              onClick={() =>
                dispatch(
                  selectVariant({
                    productId,
                    variantId: variant.id,
                  })
                )
              }
            >
              {variant.name}
            </button>
          </div>
        );
      })}

    </section>
  );
};

export default VariantSelector;
