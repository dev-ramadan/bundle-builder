const ReviewFooter = () => {
  return (
    <footer className="mt-8">

      <div className="mb-6 flex items-center justify-between">

        <img
          src="src/assets/Satisfaction.png"
          alt=""
          className="h-20"
        />

        <div className="text-right">
            <p className="bg-[#4E2FD2] text-[#FFFFFF]  rounded-sm py-1 px-2 text-sm">as low as $19.19/mo</p>
          <p className="text-gray-400 line-through">
            $238.81
          </p>

          <h2 className="text-4xl font-bold text-[#4E2FD2]">
            $187.89
          </h2>

        </div>

      </div>

      <p className="mb-5 text-center text-[12px] font-medium text-[#0AA288]">
        Congrats! You're saving $50.92 on your security bundle!
      </p>

      <button className="h-14 w-full rounded-lg bg-[#4E2FD2] text-lg font-semibold text-white">
        Checkout
      </button>

      <button className="mt-5 w-full text-center text-[12px] text-[#484848] underline">
        Save my system for later
      </button>

    </footer>
  );
};

export default ReviewFooter;