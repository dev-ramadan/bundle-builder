interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={alt}
        className="h-auto w-[143.35px] max-w-[180px] object-contain"
      />
    </div>
  );
};

export default ProductImage;