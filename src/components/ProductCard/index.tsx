import { getSelectedVariant } from "../../features/bundle/selectors";
import type { Product } from "../../features/bundle/types";
import { useAppSelector } from "../../hooks/useAppSelector";

import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import QuantityStepper from "./QuantityStepper";
import VariantSelector from "./VariantSelector";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product, }: ProductCardProps) => {

  const selectedVariant = useAppSelector(
    (state) =>
      getSelectedVariant(state, product.id)
  );
  const currentVariant =
    selectedVariant ??
    product.variants[0]?.id ??
    "default";
  return (
    <article className="flex h-full w-full flex-col rounded-xl bg-white p-4">      {product.badge && (
      <ProductBadge text={product.badge} />
    )}

      <div className="mt-3">
        <ProductImage

          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="mt-4">
        <ProductInfo
          name={product.name}
          description={product.description}
        />
      </div>

      <div className="mt-5 min-h-[40px]">
        {product.variants.length > 0 && (
          <VariantSelector
            productId={product.id}
            variants={product.variants}
          />
        )}
      </div>

      <div className="mt-auto pt-6 flex items-end justify-between">
        <QuantityStepper
          productId={product.id}
          variantId={currentVariant}
        />

        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
      </div>



    </article>
  );
};

export default ProductCard;