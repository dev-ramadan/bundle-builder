interface QuantityStepperProps {
  quantity?: number;
}

const QuantityStepper = ({
  quantity = 0,
}: QuantityStepperProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-[#DADADA] px-3 py-2">
      <button type="button">−</button>

      <span>{quantity}</span>

      <button type="button">+</button>
    </div>
  );
};

export default QuantityStepper;