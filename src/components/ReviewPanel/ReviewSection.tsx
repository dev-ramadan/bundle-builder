import type { ReactNode } from "react";

interface ReviewSectionProps {
  title: string;
  children: ReactNode;
}

const ReviewSection = ({
  title,
  children,
}: ReviewSectionProps) => {
  return (
    <section className="mt-6">

      <h3 className="mb-4 text-[10px] uppercase tracking-[1.6px] text-[#A2A8B4]">
        {title}
      </h3>

      <div className="space-y-4">

        {children}

      </div>

      <div className="mt-4 h-px bg-[#DADADA]" />

    </section>
  );
};

export default ReviewSection;