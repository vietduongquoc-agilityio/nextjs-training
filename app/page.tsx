// import PageDashboard from "./ui/dashboard/over-view/page";
import "@/app/ui/global.css";
import { Suspense } from "react";
import { Video } from "./ui/video";
import React from "react";
import Form from "./components/invoiceForm";
import Pagination from "./ui/invoices/pagination";
import PageDashboard from "@/app/ui/dashboard/over-view/page";

export const experimental_ppr = true;
export default async function Page() {
  return (
    <main className="">
      <PageDashboard />
      <div className="flex min-h-screen flex-col p-4">
        <Suspense fallback={<p>Loading video...</p>}>
          <Video />
        </Suspense>
        <Form customers={[]} />
        <Pagination totalPages={12} />
      </div>
    </main>
  );
}
