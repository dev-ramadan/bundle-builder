interface ProductBadgeProps {
  text: string;
}

const ProductBadge = ({ text }: ProductBadgeProps) => {
  return (
    <div className="inline-flex rounded-full bg-[#4E2FD2] px-3 py-1 text-xs font-semibold text-white w-fit">
      {text}
    </div>
  );
};

export default ProductBadge;