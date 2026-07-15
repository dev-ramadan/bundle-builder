import { useAppSelector } from "../../hooks/useAppSelector";

import { getCartItems } from "../../features/bundle/selectors";

import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewSection from "./ReviewSection";

const ReviewPanel = () => {

  const items = useAppSelector(getCartItems);
  
  const cameras = items.filter(
    (item) => item.category === "camera"
  );

  const sensors = items.filter(
    (item) => item.category === "sensor"
  );

  const accessories = items.filter(
    (item) => item.category === "accessory"
  );

  return (
    <aside className="rounded-3xl bg-[#EEF4FF] p-6">

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

      {accessories.length > 0 && (
        <ReviewSection title="ACCESSORIES">

          {accessories.map((item) => (
            <ReviewItem
              key={`${item.productId}-${item.variantId}`}
              item={item}
            />
          ))}

        </ReviewSection>
      )}

    </aside>
  );
};

export default ReviewPanel;