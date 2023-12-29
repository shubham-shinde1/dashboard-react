import React from "react";

export default function Table() {
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <caption className="p-5 text-lg font-bold text-left rtl:text-right text-gray-600 bg-white dark:text-white dark:bg-gray-800 ">
          PEOPLE LEADERBOARD
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Lizzie Rose
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              David Buttler
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Nick Evans
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">36</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
