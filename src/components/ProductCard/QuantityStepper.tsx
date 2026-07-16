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
    <div className="flex items-center gap-3 px-3 py-2">
      <button
        className="cursor-pointer text-[#575757] font-semibold p-2.5 w-5 h-5 border-2 flex items-center justify-center border-[#CED6DE] rounded-[4px]"
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

      <span className="font-bold">{quantity}</span>

      <button
        className="cursor-pointer text-[#575757] font-semibold w-5 h-5 border-2 flex items-center justify-center p-2.5 border-[#CED6DE] rounded-[4px]"
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