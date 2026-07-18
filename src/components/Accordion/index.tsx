import { type ReactNode } from "react";
import StepHeader from "../StepHeader";
import ProductCard from "../ProductCard";

import useProducts from "../../hooks/useProducts";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { setCurrentStep } from "../../features/bundle/bundleSlice";
import { getSelectedCountByCategory } from "../../features/bundle/selectors";

interface AccordionProps {
  icon: ReactNode;
  text: string;
  step: number;
  category: string;
  children?: ReactNode;
}

const Accordion = ({
  icon,
  text,
  step,
  category,
  children,
}: AccordionProps) => {
  const dispatch = useAppDispatch();

  const { products, loading } = useProducts();

  const currentStep = useAppSelector(
    (state) => state.bundle.currentStep
  );

  const selectedCount = useAppSelector((state) =>
    getSelectedCountByCategory(state, category)
  );
  const canGoNext = selectedCount > 0;
  const isOpen = currentStep === step;

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const nextStepText = () => {
    switch (step) {
      case 1:
        return "Choose your plan";
      case 2:
        return "Choose your sensors";
      case 3:
        return "Add extra protection";
      default:
        return "Review System";
    }
  };

  const reviewBtn = () => {
    if (window.innerWidth < 1024) {
      window.scrollBy({
        top: 500,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="bg-[#EDF4FF] rounded-[10px] p-4">
      <StepHeader step={step} totalSteps={4} />

      {/* Header */}
      <div
        onClick={() => dispatch(setCurrentStep(step))}
        className="my-[6px] flex h-[60px] w-full cursor-pointer items-center justify-between border-y border-[#1F1F1F] px-[15px] py-[20px]"
      >
        {/* Left */}
        <div className="flex items-center gap-2">
          {icon}

          <h3 className="text-[13px] md:text-[20px]  text-[#0B0D10]">
            {text}
          </h3>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <span className="text-[14px] font-medium leading-4 text-[#4E2FD2]">
            {selectedCount} selected
          </span>

          {isOpen ? (
            <img src="up.png" alt="icon" loading="lazy" />
          ) : (
            <img src="dowen.png" alt="icon" loading="lazy" />

          )}
        </div>
      </div>

      {/* Body */}
      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-[15px] py-5">
          {children ? (
            children
          ) : loading ? (
            <div className="flex justify-center py-10">
              Loading...
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-center gap-5">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-1 min-w-[260px] max-w-[360px]"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                {step < 4 ? (
                  <button
                    disabled={!canGoNext}
                    onClick={() => dispatch(setCurrentStep(step + 1))}
                    className={`rounded-sm px-6 py-3 text-lg font-medium transition ${canGoNext
                      ? "border-2 border-[#4E2FD2] text-[#4E2FD2] cursor-pointer "
                      : "cursor-not-allowed bg-[#D8DDE7] text-[#8D96A8]"
                      }`}
                  >
                    Next: {nextStepText()}
                  </button>
                ) : (
                  <button
                    onClick={reviewBtn}
                    className="rounded-sm border-2 border-[#4E2FD2] text-[#4E2FD2] cursor-pointer px-6 py-3 text-lg font-medium transition"
                  >
                    Review System
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Accordion;