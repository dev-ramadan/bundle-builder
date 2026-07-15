import type { CartItem } from "../../features/bundle/selectors";
import QuantityStepper from "../ProductCard/QuantityStepper";

interface Props {
  item: CartItem;
}

const ReviewItem = ({ item }: Props) => {
  return (
    <article className="flex items-center justify-between py-3">

      <div className="flex items-center gap-3">

        <img
          src={item.image}
          alt={item.name}
          className="h-14 w-14 rounded-lg border object-contain"
        />

        <div>
          <h4 className="font-medium text-[#1F1F1F]">
            {item.name}
          </h4>

          {item.variantName && (
            <p className="text-sm text-gray-500">
              {item.variantName}
            </p>
          )}
        </div>

      </div>

      <div className="flex items-center gap-5">

        <QuantityStepper
          productId={item.productId}
          variantId={item.variantId}
        />

        <div className="text-right">

          {item.compareAtPrice && (
            <p className="text-xs text-gray-400 line-through">
              ${item.compareAtPrice.toFixed(2)}
            </p>
          )}

          <p className="font-semibold text-[#4E2FD2]">
            ${item.price.toFixed(2)}
          </p>

        </div>

      </div>

    </article>
  );
};

export default ReviewItem;