import { useAppSelector } from "../../hooks/useAppSelector";

import { getCartItems } from "../../features/bundle/selectors";

import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewSection from "./ReviewSection";
import ShippingItem from "./ShippingItem";
import ReviewFooter from "./ReviewFooter";

const ReviewPanel = () => {

  const items = useAppSelector(getCartItems);

  const cameras = items.filter(
    (item) => item.category === "camera"
  );

  const sensors = items.filter(
    (item) => item.category === "sensor"
  );

  const plan = items.filter(
    (item) => item.category === "plan"
  );
  const accessory = items.filter(
    (item) => item.category === "accessory"
  );


  return (
    <aside className="sticky top-6 h-fit rounded-[10px] bg-[#EEF4FF] p-4 mx-auto lg:w-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:w-[380px] gap-8">

        {/* Left */}
        <div>
          <ReviewHeader />

          {cameras.length > 0 && (
            <ReviewSection title="CAMERAS">
              {cameras.map((item) => (
                <ReviewItem
                  key={`${item.productId}-${item.variantId}`}
                  item={item}
                />
              ))}
            </ReviewSection>
          )}

          {sensors.length > 0 && (
            <ReviewSection title="SENSORS">
              {sensors.map((item) => (
                <ReviewItem
                  key={`${item.productId}-${item.variantId}`}
                  item={item}
                />
              ))}
            </ReviewSection>
          )}

          {plan.length > 0 && (
            <ReviewSection title="PLAN">
              {plan.map((item) => (
                <ReviewItem
                  key={`${item.productId}-${item.variantId}`}
                  item={item}
                />
              ))}
            </ReviewSection>
          )}

          {accessory.length > 0 && (
            <ReviewSection title="ACCESSORY">
              {accessory.map((item) => (
                <ReviewItem
                  key={`${item.productId}-${item.variantId}`}
                  item={item}
                />
              ))}
            </ReviewSection>
          )}

          <ShippingItem shippingPrice={5.99} />
        </div>

        {/* Right */}
        <ReviewFooter />

      </div>
    </aside>
  );
};

export default ReviewPanel;