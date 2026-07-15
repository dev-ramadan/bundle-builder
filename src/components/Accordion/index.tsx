import { useState, type ReactNode } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import StepHeader from "../StepHeader";
import ProductCard from "../ProductCard";
import useProducts from "../../hooks/useProducts";

interface AccordionProps {
  icon: ReactNode;
  text: string;
  selectNum: number;
  step: number;
  children?: ReactNode;
}

const Accordion = ({
  icon,
  text,
  selectNum,
  step,
  children,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(step === 1);

  const { products, loading } = useProducts();

  return (
    <section>
      <StepHeader step={step} totalSteps={4} />

      {/* Header */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="my-[6px] flex h-[60px] w-full cursor-pointer items-center justify-between border-y border-[#1F1F1F] px-[15px] py-[20px]"
      >
        {/* Left */}
        <div className="flex items-center gap-[8px]">
          {icon}

          <h3 className="text-[18px] font-medium text-[#0B0D10]">
            {text}
          </h3>
        </div>

        {/* Right */}
        <div className="flex items-center gap-[4px]">
          <span className="text-[14px] font-medium leading-[16px] text-[#4E2FD2]">
            {selectNum} selected
          </span>

          {isOpen ? (
            <BiChevronUp size={18} color="#4E2FD2" />
          ) : (
            <BiChevronDown size={18} color="#4E2FD2" />
          )}
        </div>
      </div>

      {/* Body */}
      {isOpen && (
        <div className="px-[15px] py-5">
          {children ? (
            children
          ) : loading ? (
            <div className="text-center py-8">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-5">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Accordion;