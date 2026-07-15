import Builder from "../components/Builder";
import ReviewPanel from "../components/ReviewPanel";


const Home = () => {
  return (
    <main className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <Builder />
          <ReviewPanel />
        </div>
      </div>
    </main>
  );
};

export default Home;