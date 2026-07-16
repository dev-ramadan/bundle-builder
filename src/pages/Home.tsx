import Accordion from "../components/Accordion";
import ReviewPanel from "../components/ReviewPanel";
import { steps } from "../features/steps";

const Home = () => {
  return (
    <main className="mx-auto min-h-screen w-[90%] bg-white px-4 pt-8">

      {/* Mobile Title */}
      <h1 className="mb-6 text-center text-[31.88px] font-bold leading-[110%] tracking-[-0.06px] text-[#1F1F1F]">
        Let&apos;s get started!
      </h1>

      {/* Content */}
      <div className="mx-auto flex  w-full max-w-[1440px] flex-col gap-4 lg:flex-row">

        {/* Left */}
        <section className="w-full xl:flex-1">
          {steps.map((step) => (
            <Accordion
              key={step.id}
              step={step.id}
              text={step.title}
              icon={<img src={step.icon} alt="" loading="lazy" />}
              category={step.category}
            />
          ))}
        </section>

        {/* Right */}
        <aside className="w-full lg:w-fit ">
          <ReviewPanel />
        </aside>

      </div>

    </main>
  );
};

export default Home;