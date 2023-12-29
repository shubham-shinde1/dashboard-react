function PopularCources() {
  return (
    <>
      <div className="border rounded ">
        <div className="p-5 text-xs font-semibold  text-gray-500 bg-white flex justify-between">
          <div>Popular Cources</div>
          <button className="text-blue-500">All Cources</button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Cource Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Created
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Last Update
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Enrolled
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Started
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Completed
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Average Progress
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  dark:border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap text-center"
              >
                Figma Basics
              </th>
              <td className="px-6 py-4 text-gray-500 text-center">
                21-03-2020
              </td>
              <td className="px-6 py-4 text-gray-500 text-center">
                20-04-2022
              </td>
              <td className="px-6 py-4 text-gray-500 text-center">263</td>
              <td className="px-6 py-4 text-gray-500 text-center">110</td>
              <td className="px-6 py-4 text-gray-500 text-center">99</td>
              <td className="px-6 py-4 text-gray-500 text-center">65%</td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap text-center"
              >
                Figma Basics
              </th>
              <td className="px-6 py-4 text-gray-500 text-center">
                21-03-2020
              </td>
              <td className="px-6 py-4 text-gray-500 text-center">
                20-04-2022
              </td>
              <td className="px-6 py-4 text-gray-500 text-center">263</td>
              <td className="px-6 py-4 text-gray-500 text-center">110</td>
              <td className="px-6 py-4 text-gray-500 text-center">99</td>
              <td className="px-6 py-4 text-gray-500 text-center">65%</td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap text-center"
              >
                Figma Basics
              </th>
              <td className="px-6 py-4 text-gray-500 text-center">
                21-03-2020
              </td>
              <td className="px-6 py-4 text-gray-500 text-center">
                20-04-2022
              </td>
              <td className="px-6 py-4 text-gray-500 text-center">263</td>
              <td className="px-6 py-4 text-gray-500 text-center">110</td>
              <td className="px-6 py-4 text-gray-500 text-center">99</td>
              <td className="px-6 py-4 text-gray-500 text-center">65%</td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PopularCources;
