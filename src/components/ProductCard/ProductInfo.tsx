interface ProductInfoProps {
  name: string;
  description: string;
}

const ProductInfo = ({ name, description }: ProductInfoProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-[#0B0D10]">
        {name}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-5 text-[#5F6470]">
        {description} <span className="text-sm text-[#0000EE] underline">Lern More</span>
      </p>
    </div>
  );
};

export default ProductInfo;