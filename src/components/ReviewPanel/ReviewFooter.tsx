import Swal from "sweetalert2";
import { getCartItems, getSummary } from "../../features/bundle/selectors";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { clearBundle } from "../../features/bundle/bundleSlice";

const ReviewFooter = () => {
  const summary = useAppSelector(getSummary);
  const dispatch = useAppDispatch()
  const items = useAppSelector(getCartItems);
  const isCartEmpty = items.length === 0;
  const handleCheckout = async () => {
    const result = await Swal.fire({
      icon: "success",
      title: "Your order is ready!",
      html: `
      <p>Your security bundle has been successfully configured.</p>
      <p style="margin-top:8px;">
        Total:
        <strong>$${summary.subtotal.toFixed(2)}</strong>
      </p>
    `,
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#4E2FD2",
      background: "#EEF4FF",
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut",
      },
    });

    if (result.isConfirmed) {
      dispatch(clearBundle());
    }
  };

  return (
    <footer className="mt-auto flex flex-col gap-6 xl:w-[370px] xl:ml-auto">

      {/* Top */}
      <div className="flex items-start gap-4">
        <img
          src="assets/Satisfaction.png"
          alt="100% Satisfaction"
          className="h-24 w-24 shrink-0"
          loading="lazy"
        />

        <div className="hidden md:block lg:hidden xl:block">
          <h3 className="text-[18px] font-semibold text-[#1F1F1F]">
            30-day hassle-free returns
          </h3>
          <p className="mt-2 text-sm leading-5 text-[#4F4F4F]">
            If you're not totally in love with the product,
            we will refund you 100%.
          </p>
        </div>

      </div>

      {/* Price */}

      <div className="text-right absolute  right-5 md:relative lg:absolute xl:relative xl:flex flex-col">

        <span className="lg:w-fit lg:text-left rounded bg-[#4E2FD2] px-2 py-1 text-xs text-white">
          as low as $19.19/mo
        </span>

        <div className="mt-3 flex items-end justify-end gap-2">

          <span className="text-lg lg:text-[15px] text-gray-400 line-through">
            ${summary.original.toFixed(2)}
          </span>

          <span className="text-4xl lg:text-[18px] font-bold text-[#4E2FD2]">
            ${summary.subtotal.toFixed(2)}
          </span>

        </div>

      </div>

      {/* Saving */}

      <p className="text-center text-xs font-medium text-[#0AA288]">
        Congrats! You're saving $
        {summary.savings.toFixed(2)}
        {" "}on your security bundle!
      </p>

      {/* Checkout */}

      <button
        onClick={handleCheckout}
        disabled={isCartEmpty}
        className={`h-12 w-full rounded-[4px] text-lg font-semibold transition-colors ${isCartEmpty
          ? "cursor-not-allowed bg-[#D8DDE7] text-[#8D96A8]"
          : "bg-[#4E2FD2] text-white hover:bg-[#3E24BA] cursor-pointer"
          }`}
      >
        Checkout
      </button>

      <button className="text-center text-xs text-[#555] underline">
        Save my system for later
      </button>

    </footer>
  );
};

export default ReviewFooter;