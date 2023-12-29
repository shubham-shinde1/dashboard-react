import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DashboardCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-2 flex items-center text-gray-700 ">
      <div className="p-3 mr-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <MdKeyboardArrowRight className="ml-auto" />
    </div>
  );
};

export default DashboardCard;

export const DashboardCard2 = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-2 flex items-center text-gray-700 ">
      <div className="p-3 mr-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};
