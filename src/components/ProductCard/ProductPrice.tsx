interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
}

const ProductPrice = ({
  price,
  compareAtPrice,
}: ProductPriceProps) => {
  return (
    <div className="text-right flex gap-1 items-center">
      {compareAtPrice && (
        <p className="text-[16px] font-medium text-[#D8392B] -400 line-through">
          ${compareAtPrice.toFixed(2)}
        </p>
      )}

      <p className="text-[16px] font-medium text-[#575757]">
        ${price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductPrice;