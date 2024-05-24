import { Button } from "@/components/ui/button";
import CardsSection from "@/components/ui/CardsSection";
import MainSection from "@/components/ui/MainSection";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <header className="flex flex-row justify-between items-start">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="syncapi.ai" width={150} height={50} />
          </Link>
        </div>
        <ul className="inline-flex justify-start items-center gap-2 mt-6">
          <li>
            <Link href="/about">
              <h4 className="p-3 font-medium">About</h4>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <h4 className="p-3 font-medium">Features</h4>
            </Link>
          </li>
        </ul>
      </header>
      <div className="flex flex-col items-center justify-between p-16">
        <h1 className="font-semibold  font-display text-slate-700 text-6xl font-sans md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
          Productivity that flows
          <br />
          with your life.
        </h1>
        <p className=" text-slate-800 font-semibold text-lg">
          Unleash your potential by harmonizing
          <br />
          your daily tasks and habits with your
          <br />
          unique energy rhythms.
        </p>
        <Button
          id="btn"
          variant="secondary"
          className=" text-white mt-8 px-12 rounded-xl hover:bg-background[#00838F]"
        >
          Try for free
        </Button>
      </div>
      <section className=" mx-72">
        <div className=" inline-flex justify-center items-center ">
          <Image
            src="/market-section.avif"
            width={900}
            height={500}
            alt="marketing"
          />
        </div>
      </section>
      <CardsSection />
      <MainSection />
      <footer className="flex flex-row justify-between items-center mx-2">
        <div className="mt-12">
          <Link href="/">
            <Image src="/logo.png" alt="syncapi.ai" width={150} height={50} />
          </Link>
        </div>
        <span className="font-normal">@2024 SyncAPI.ai</span>
        <ul className="inline-flex justify-between items-center gap-2 ">
          <li>
            <Link href="/about">
              <h4 className="p-3 font-medium">About</h4>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <h4 className="p-3 font-medium">Features</h4>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
