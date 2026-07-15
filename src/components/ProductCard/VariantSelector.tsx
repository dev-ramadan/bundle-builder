import type { Variant } from "../../features/bundle/types";

interface VariantSelectorProps {
  variants: Variant[];
}

const VariantSelector = ({
  variants,
}: VariantSelectorProps) => {
  return (
    <section className="flex items-center gap-1.5">
      {variants.map((variant) => (
        <div className="flex gap-2 border border-[#0AA288] px-3 py-2 w-fit">
          <span>
            <img src={variant.image} alt="photo" className="" />
          </span>
          <button
            key={variant.id}
            type="button"
          >
            {variant.name}
          </button>
        </div>
      ))}
    </section>
  );
};

export default VariantSelector;