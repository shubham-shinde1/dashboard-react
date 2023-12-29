import React from "react";

export default function Table() {
  return (
    <div className="relative overflow-x-hidden border rounded ">
      <div className="p-5 text-xs font-semibold  text-gray-500 bg-white flex justify-between">
        <div>PEOPLE LEADERBOARD</div>
        <button className="text-blue-500">All People</button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              IN PROGRESS
            </th>
            <th scope="col" className="px-6 py-3">
              COMPLETE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
            >
              Lizzie Rose
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
            >
              David Buttler
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
            >
              Nick Evans
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
            >
              Mariline Lubin
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
