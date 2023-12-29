import React from "react";
import DashboardCard from "./DashboardCard";
import { DashboardCard2 } from "./DashboardCard";

import { PiSquaresFourThin } from "react-icons/pi";
import { PiStack } from "react-icons/pi";
import { PiPaintBucketLight } from "react-icons/pi";

import { GoPeople } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { LuMailOpen } from "react-icons/lu";
import { CiPlug1 } from "react-icons/ci";

import { BsLightning } from "react-icons/bs";
import { PiRepeatBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";

export default function Sidebar() {
  const sidebarData1 = [
    { content: "Dashboard", icon: <PiSquaresFourThin /> },
    { content: "Content", icon: <PiStack /> },
    { content: "People", icon: <GoPeople /> },
    { content: "Design", icon: <PiPaintBucketLight /> },
    { content: "Analytics", icon: <VscGraph /> },
    { content: "Communications", icon: <LuMailOpen /> },
    { content: "Apps", icon: <CiPlug1 /> },
    { content: "Automations", icon: <BsLightning /> },
  ];

  const sidebarData2 = [
    { content: "Preview School", icon: <FaRegEye /> },
    { content: "Switch School", icon: <PiRepeatBold /> },
    { content: "School Setting", icon: <IoSettingsOutline /> },
    { content: "Billing Portal", icon: <CiCreditCard1 /> },
  ];

  return (
    <>
      <div>
        {sidebarData1.map((item, index) => (
          <DashboardCard key={index} title={item.content} icon={item.icon} />
        ))}
      </div>
      <div className="text-gray-400 font-semibold pl-5 mt-4">YOUR ACADEMY</div>
      <div>
        {sidebarData2.map((item, index) => (
          <DashboardCard2 key={index} title={item.content} icon={item.icon} />
        ))}
      </div>
    </>
  );
}
