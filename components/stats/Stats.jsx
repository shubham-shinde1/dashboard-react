export default function Stats() {
  return (
    <div className="w-auto border rounded bg-gray-500">
      <div className="flex">
        <p>Completion Rate</p>
        <p>All Reports</p>
      </div>

      <div className="flex">
        <div>92%</div>
        <div>2.13%</div>
      </div>

      <div className="flex">
        <div className="">
          <div className="capitalize font-bold">STARTED</div>
          <div>791</div>
        </div>
        <div>
          <div className=" font-bold text-gray-400">COMPLETED</div>
          <div>648</div>
        </div>
      </div>
    </div>
  );
}
