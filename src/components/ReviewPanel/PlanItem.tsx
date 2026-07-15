const PlanItem = () => {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <img
          src="/assets/icons/plan.svg"
          alt=""
          className="h-6 w-6"
        />

        <span className="font-semibold">
          Cam <span className="text-[#4E2FD2]">Unlimited</span>
        </span>

      </div>

      <div className="text-right">

        <p className="text-xs text-gray-400 line-through">
          $12.99/mo
        </p>

        <p className="font-semibold text-[#4E2FD2]">
          $9.99/mo
        </p>

      </div>

    </div>
  );
};

export default PlanItem;