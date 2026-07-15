interface StepHeaderProps {
    step: number;
    totalSteps: number;
}

const StepHeader = ({ step, totalSteps }: StepHeaderProps) => {
    return (
        <p className="text-sm uppercase leading-[100%] tracking-[1.6px] text-[#484848]">
            STEP {step} OF {totalSteps}</p>

    );
};

export default StepHeader;