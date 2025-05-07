import PageDashboard from "./ui/dashboard/over-view/page";
import "@/app/ui/global.css";
import { Suspense } from "react";
import { Video } from "./ui/video";
import React from "react";

export const experimental_ppr = true;
export default async function Page() {
  return (
    <main className="flex p-6 ">
      <PageDashboard />
      <div className="flex min-h-screen flex-col p-4">
        <Suspense fallback={<p>Loading video...</p>}>
          <Video />
        </Suspense>
      </div>
    </main>
  );
}
