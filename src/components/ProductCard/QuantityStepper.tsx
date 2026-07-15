import { decreaseQuantity, increaseQuantity } from "../../features/bundle/bundleSlice";
import { getVariantQuantity } from "../../features/bundle/selectors";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

interface QuantityStepperProps {
  productId: string;
  variantId: string;
}

const QuantityStepper = ({
  productId,
  variantId
}: QuantityStepperProps) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) =>
    getVariantQuantity(state, productId, variantId)
  );
  return (
    <div className="flex items-center gap-3 rounded-full border border-[#DADADA] px-3 py-2">
      <button
        disabled={quantity === 0}
        onClick={() =>
          dispatch(
            decreaseQuantity({
              productId,
              variantId,
            })
          )
        }
      >
        -
      </button>

      <span>{quantity}</span>

      <button
        onClick={() =>
          dispatch(
            increaseQuantity({
              productId,
              variantId,
            })
          )
        }
      >
        +
      </button>
    </div>
  );
};

export default QuantityStepper;