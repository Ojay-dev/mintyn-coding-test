import ArrowDownIcon from "../Icons/arrow_down_icon";
import SearchIcon from "../Icons/search_icon";

const OrdersTable: React.FC = () => {
  const status = ["Pending", "Reconcilled", "Un-reconcilled"];

  const getRandomStatus = () => {
    const randomIndex = Math.floor(Math.random() * status.length);
    return status[randomIndex];
  };

  return (
    <>
      <h3 className="mb-5 font-SegoeUI text-4xl text-[#262626]">Payments</h3>

      <div className="flex flex-col-reverse gap-y-6 sm:flex-row sm:justify-end xl:justify-between">
        <div className="hidden items-center gap-x-4 xl:flex">
          <p className="font-SegoeUI text-sm text-[#262626]">Showing</p>
          <select className="mx-2 rounded-sm border border-[#E5E5E5] bg-white px-2">
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <p className="font-SegoeUI text-sm text-[#262626]">out of 500 payments</p>
        </div>

        <div className="relative xl:ml-[10%]">
          <SearchIcon className="absolute top-[7px]" />
          <input
            type="search"
            placeholder="Search payments"
            className="border-b-[0.5px] border-b-[#787878] bg-transparent pl-5 outline-none placeholder:font-SegoeUI placeholder:text-sm"
          />
        </div>

        <div className="flex items-center gap-x-4 sm:ml-[10%]">
          <p className="font-SegoeUI text-sm text-[#262626]">Show</p>

          <select className="mx-2 rounded-sm border border-[#E5E5E5] bg-white px-2">
            <option>All</option>
            <option>Reconcilled</option>
            <option>Un-reconcilled</option>
            <option>Settled</option>
            <option>Unsettled</option>
          </select>
        </div>
      </div>

      <div className="w-full overflow-x-scroll">
        <div className="mt-6 w-[1280px]">
          <div className="grid grid-cols-[4fr_1fr_1.5fr_1fr_2fr_0.5fr] bg-[#EAEEF0] px-7 py-3 font-SegoeUI text-sm text-[#7F8FA4]">
            <span>Item Type</span>
            <span>Price</span>
            <span>Transaction No</span>
            <span>Time</span>
            <span>Status</span>
          </div>

          {Array.from({ length: 9 }).map((_, i) => {
            const randomStatus = getRandomStatus();

            return (
              <div
                key={i}
                className="grid grid-cols-[4fr_1fr_1.5fr_1fr_2fr_0.5fr] items-center border-b  border-b-[#CCCFD4] bg-[#fff] px-7 py-5 font-SegoeUI text-sm text-[#7F8FA4] last:border-b-0"
              >
                <div className="flex items-center gap-x-[26px]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#7F8FA4] text-[#fff]">VW</span>
                  <span className="text-[#414042]">Apple Mac Book 15” 250 SSD 12GB</span>
                </div>
                <span>$73430</span>
                <span>1234567890</span>
                <span>12:30</span>
                <div
                  className={`flex max-w-36 items-center gap-x-2 rounded-[30px] border border-[#CCCFD4] px-3 py-2 ${randomStatus === "Pending" ? "text-[#EBC315]" : randomStatus === "Reconcilled" ? "text-[#27AE60]" : ""}`}
                >
                  <span
                    className={`block h-[9px] w-[9px] rounded-[50%] ${randomStatus === "Pending" ? "bg-[#EBC315]" : randomStatus === "Reconcilled" ? "bg-[#27AE60]" : "bg-[#7F8FA4]"}`}
                  />
                  {randomStatus}
                </div>

                <ArrowDownIcon />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
