"use client";

import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "@/app/components/modal";
import { ModeToggle } from "@/app/components/toggle";
import { Button } from "../button";

export default function SideNav() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden w-full grow rounded-md bg-gray-50 md:block"></div>
        <Button onClick={() => setShowModal(true)}>Register</Button>
        <CustomModal showModal={showModal} setShowModal={setShowModal} />
        <form>
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </Button>
        </form>
        <ModeToggle />
      </div>
    </div>
  );
}
