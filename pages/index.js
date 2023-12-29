import Image from "next/image";
import { Inter } from "next/font/google";
import Stats from "../components/stats/Stats";
import Table from "./Table";
import ChartComponent from "@/components/ChartComponent";
import Sidebar from "@/components/Sidebar";
import PopularCources from "@/components/PopularCources";
import { BsArrowLeftRight } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="@apply flex h-auto w-full bg-gray-100">
      <div className="w-1/6  bg-white">
        <div className=" @apply flex p-4 bg-white gap-2">
          <img
            className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheQRUUseJTi5Qhi3rPjKcS5eOjLVrDltXjg&usqp=CAU"
            alt="image description"
            width="30"
            height="40"
          />
          <div className="@apply flex flex-col">
            <div className="text-xs text-gray-400">ENTERPRISE PLAN</div>
            <div className="text-sm text-gray-600">Figma Academy</div>
          </div>
        </div>
        <Sidebar />
      </div>
      <div className="w-5/6 shadow-md border border-gray-300">
        <div className="h-[80px] bg-white @apply flex items-center justify-between px-4">
          <div className="text-3xl font-bold text-gray-800">Dashboard</div>
          <div className="flex ">
            <div className="border mr-4 p-2 rounded text-gray-800">
              <label htmlFor="calander" >
                Last Month
              </label>
              <select name="calander" id="cars" className="bg-white">
                {/* <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option> */}
              </select>
            </div>
            <button className="flex items-center justify-center border mr-4 p-2 rounded">
              <BsArrowLeftRight className="border border-green-400 text-green-400 w-4 h-4" />
              <span className="ml-2 text-gray-800">Filters</span>
              <span className="border rounded-full bg-green-200 ml-1 w-6">
                3
              </span>
            </button>

            <button className="border mr-4 p-2 bg-gray-900 rounded text-gray-300">
              Edit Widget
            </button>
          </div>
        </div>
        {/* cards here  */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 bg-white rounded-md">
              <Stats />
            </div>
            <div className="lg:col-span-1 bg-white rounded-md">
              <Stats />
            </div>
            <div className="lg:col-span-1 bg-white rounded-md">
              <Stats />
            </div>
          </div>
        </div>
        <div className="px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
            <div className="lg:col-span-2 bg-white rounded-sm">
              <ChartComponent />
            </div>
            <div className="lg:col-span-1 bg-white rounded-sm">
              <Table />
            </div>
          </div>
        </div>
        <div className="p-6 h-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
            <div className="lg:col-span-3 rounded-sm">
              <PopularCources />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
