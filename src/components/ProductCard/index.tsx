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

const ProductCard = ({
  product,
}: ProductCardProps) => {

  const selectedVariant = useAppSelector(
    (state) =>
      getSelectedVariant(state, product.id)
  );

  const currentVariant =
  selectedVariant ??
  product.variants[0]?.id ??
  "default";
  return (
    <article className="rounded-2xl border border-[#DADADA] bg-white p-4">

      {product.badge && (
        <ProductBadge text={product.badge} />
      )}

      <div className="mt-4">
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

      {product.variants.length > 0 && (
        <div className="mt-5">
          <VariantSelector
            productId={product.id}
            variants={product.variants}
          />
        </div>
      )}

      <div className="mt-6 flex items-end justify-between">
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