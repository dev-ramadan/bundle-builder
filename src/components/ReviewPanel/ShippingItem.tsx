interface ShippingItemProps {
  shippingPrice: number;
}

const ShippingItem = ({ shippingPrice }: ShippingItemProps) => {
  return (
    <div className="mt-5 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <img
          src="/shipping.png"
          alt="Shipping"
          className="h-7 w-7"
          loading="lazy"
        />

        <span className="font-medium">
          Fast Shipping
        </span>
      </div>

      <div className="text-right">

        <p className="text-xs text-gray-400 line-through">
          ${shippingPrice.toFixed(2)}
        </p>

        <p className="font-semibold text-[#4E2FD2]">
          FREE
        </p>

      </div>

    </div>
  );
};

export default ShippingItem;