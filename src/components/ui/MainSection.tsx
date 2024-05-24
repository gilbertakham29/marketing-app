import React from "react";
import Image from "next/image";
import { Button } from "./button";
function MainSection() {
  return (
    <div className="mx-auto">
      <div className=" mt-20 flex flex-column justify-between items-start">
        <h4 className="text-2xl text-emerald-900 mx-auto font-medium">
          Robust Features
        </h4>
      </div>
      <div className="grid grid-cols-4 p-4 gap-8 w-1/2  mx-auto">
        <div className="flex flex-col justify-start items-start gap-2">
          <Image src="/calendar.png" alt="calendar" width={50} height={100} />
          <h4 className="text-xl font-medium">Scheduling</h4>
          <span className="font-normal">
            Create task schedules synced to your natural energy peaks and
            troughs.
          </span>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <Image src="/analytics.png" alt="calendar" width={50} height={20} />
          <h4 className="text-2xl font-medium">Analytics</h4>
          <span className="font-normal">
            Track your productivity trends with comprehensive data and insights.
          </span>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <Image
            src="/miscellaneous.png"
            alt="calendar"
            width={50}
            height={20}
          />
          <h4 className="text-2xl font-medium">Integrations</h4>
          <span className="font-normal">
            Incorporate wellness practices into your daily plan with reminders
            for meditation, hydration, and more.
          </span>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <Image src="/timer.png" alt="calendar" width={50} height={20} />
          <h4 className="text-2xl font-medium">Focus timer</h4>
          <span className="font-normal">
            Use the built-in Pomodoro timer for focused work sessions with
            customizable intervals.
          </span>
        </div>
      </div>

      <div className="inline-flex mx-64 justify-between gap-8 items-center p-4 mt-8">
        <Image src="/market.avif" alt="athelet" width={500} height={100} />
        <div>
          <h4 className="text-4xl font-medium mb-3">Harmonize your schedule</h4>
          <span className="font-normal text-lg">
            Align tasks with your natural energy rhythms. Embrace tailored
            productivity.
          </span>
        </div>
      </div>
      <div className="inline-flex mx-64 justify-between gap-8 items-center p-4 mt-4">
        <div>
          <h4 className="text-4xl font-medium mb-3">Mindful task tracking</h4>
          <span className="font-normal text-lg">
            Blend productivity with mindfulness. Understand your patterns,
            enhance focus.
          </span>
        </div>
        <Image src="/group.avif" alt="athelet" width={500} height={100} />
      </div>
      <div className="inline-flex mx-64 justify-between gap-8 items-center p-4 mt-4">
        <Image src="/productive.avif" alt="athelet" width={500} height={100} />
        <div>
          <h4 className="text-4xl font-medium mb-3">
            Productivity and self care
          </h4>
          <span className="font-normal text-lg">
            Beyond task completion. Embrace self-care routines, foster a
            healthier lifestyle.
          </span>
        </div>
      </div>

      <div className="w-2/3 p-4 mt-8 rounded-md border-s-2 border-2 mx-auto bg-white">
        <div className="flex flex-col justify-between items-center">
          <h4 className="text-2xl font-medium text-[#5f979d]">
            Unleash your inner productivity
          </h4>
          <span className="text-lg font-normal">
            Sync your tasks and wellness to your unique rhythm.
          </span>
          <Button
            id="btn"
            variant="secondary"
            className=" text-white mt-8 px-8 rounded-xl hover:bg-background[#00838F]"
          >
            Try it free
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
