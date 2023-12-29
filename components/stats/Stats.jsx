import { IoArrowUp } from "react-icons/io5";
import { AiTwotoneInfoCircle } from "react-icons/ai";

export default function Stats() {
  return (
    <div className="border rounded-md bg-white p-3 w-full h-full">
      <div className="flex justify-between">
        <div className="flex pr-2">
          <div className="text-gray-600 font-bold text-xs">COMPLETION RATE</div>
          <AiTwotoneInfoCircle className="ml-1 border-0" />
        </div>
        <div className="text-blue-500 font-bold text-xs">All Reports</div>
      </div>

      <div className="flex justify-between items-center pt-3">
        <div className="text-3xl font-bold text-gray-800">92%</div>
        <div className="flex items-center bg-green-200 text-green-700 rounded font-bold p-1">
          <IoArrowUp className="mr-1" />
          <span className="text-sm">2.13%</span>
        </div>
      </div>

      <div className="flex justify-between pt-3">
        <div className="">
          <div className=" font-bold text-gray-300 text-xs">STARTED</div>
          <div className="font-bold text-gray-700 ">791</div>
        </div>
        <div>
          <div className=" font-bold text-gray-300 text-xs">COMPLETED</div>
          <div className="font-bold text-gray-700">648</div>
        </div>
        <div>
          <img className="w-32" src="equalizer_copy.jpg" />
        </div>
      </div>
    </div>
  );
}
