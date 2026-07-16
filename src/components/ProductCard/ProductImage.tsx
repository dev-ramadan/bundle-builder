interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="flex h-24 items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="max-h-full object-contain"
        loading="lazy"

      />
    </div>
  );
};

export default ProductImage;