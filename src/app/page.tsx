import PortfolioIntro from "@/components/PortfolioIntro";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09070d] text-white">
      <PortfolioIntro />

      {/* Your portfolio */}

      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-bold">My Portfolio</h1>
      </section>
    </main>
  );
}
