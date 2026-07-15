import Accordion from "../components/Accordion";
import ReviewPanel from "../components/ReviewPanel";

const Home = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col gap-5 bg-white pt-8">

      <h1 className="sm:block md:hidden text-center text-[31.88px] font-bold leading-[110%] tracking-[-0.06px] text-[#1F1F1F]">
        Let&apos;s get started!
      </h1>

      <Accordion text={"Choose your cameras"} icon={<img src="cam.png" />} step={1} selectNum={2} />
      <Accordion text={"Choose your plan"} icon={<img src="plan.png" />} step={2} selectNum={1} />
      <Accordion text={"Choose your sensors"} icon={<img src="sensors.png" />} step={3} selectNum={2} />
      <Accordion text={"Add extra protection"} icon={<img src="protection.png" />} step={4} selectNum={1} />

      <ReviewPanel/>
    </main>

  );
};

export default Home;