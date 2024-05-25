import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function About() {
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

      <div className="grid grid-cols-2 gap-8 mx-24">
        <div className="flex flex-col justify-start gap-4 items-start">
          <h4 className="text-6xl font-semibold">About the Flowrise team</h4>
          <p className="text-[#34605b] font-normal text-lg w-2/3">
            We’ve been seeking our own inner focus for over 8 years. We’re a
            passionate team trying to make the world a better place.
          </p>
          <Button
            id="btn"
            variant="secondary"
            className=" text-white mt-8 px-8 rounded-2xl hover:bg-background[#00838F]"
          >
            Join us!
          </Button>
        </div>
        <Image src="/yoga.avif" width={500} height={50} alt="yoga" />
      </div>

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

export default About;
