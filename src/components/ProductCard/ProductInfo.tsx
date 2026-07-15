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

      <p className="text-sm leading-6 text-[#666]">
        {description}
      </p>

      <button
        type="button"
        className="text-sm font-semibold text-[#4E2FD2] hover:underline"
      >
        Learn More
      </button>
    </div>
  );
};

export default ProductInfo;