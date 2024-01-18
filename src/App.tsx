import React from "react";
import DefaultLayout from "./components/layout/DefaultLayout";
import SearchIcon from "./components/icons/search_icon";
import ArrowDownIcon from "./components/icons/arrow_down_icon";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import useScreenWidth from "./hooks/useScreenWidth";

const data = [
  {
    value: 4000,
    total: 4000,
  },
  {
    value: 3000,
    total: 3500,
  },
  {
    value: 2000,
    total: 4500,
  },
  {
    value: 2000,
    total: 5000,
  },
  {
    value: 2000,
    total: 4500,
  },
  {
    value: 2000,
    total: 5500,
  },
];

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-screen-xl px-6 xl:pl-8 xl:pr-[10%]">
        <div className="flex flex-col gap-x-8 gap-y-3 sm:flex-row">
          <div className="flex w-full flex-col gap-3 lg:flex-row">
            <OverviewCard title="Daily Transaction Volume" value="2,342" />
            <OverviewCard title="Daily Transaction Value" value="₦4,000,000" />
          </div>

          <div className="flex w-full flex-col gap-3 lg:flex-row">
            <OverviewCard title="Total Transaction Volume" value="452,000" />
            <OverviewCard title="Total Transaction Value" value="₦4,000,000" />
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-1 md:flex-row">
          <div className="rounded-sm border border-[#EEF8FD] bg-white md:w-3/5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#42B6F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#42B6F6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                {/* <CartesianGrid y={}/> */}
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="transparent" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-y-1 md:w-2/5">
            <div className="flex w-full flex-col gap-y-3 rounded-sm border border-[#EEF8FD] bg-white p-6">
              <h3 className="font-SegoeUI text-sm font-bold text-[#262626]">Orders</h3>

              <div className={`h-1 w-full rounded-xl bg-[linear-gradient(to_right,#27AE60_${80}%,#FDC203_${20}%)] transition-colors`} />

              <p className="font-SegoeUI text-sm text-[#262626]">
                Pending Orders: <span className="font-bold text-[#EBC315]">20</span>
              </p>
              <p className="font-SegoeUI text-sm text-[#262626]">
                Reconcilled Orders: <span className="font-bold text-[#27AE60]">80</span>
              </p>
              <p className="font-SegoeUI text-sm text-[#262626]">
                Total Orders: <span className="font-bold text-[#1860EC]">100</span>
              </p>
            </div>

            <div className="flex w-full flex-col gap-y-3 rounded-sm border border-[#EEF8FD] bg-white p-6">
              <h3 className="font-SegoeUI text-sm font-bold text-[#262626]">Payments</h3>

              <div className={`h-1 w-full rounded-xl bg-[linear-gradient(to_right,#27AE60_${80}%,#FDC203_${20}%)] transition-colors`} />

              <p className="font-SegoeUI text-sm text-[#262626]">
                Un-reconcilled Payments: <span className="font-bold text-[#EBC315]">20</span>
              </p>
              <p className="font-SegoeUI text-sm text-[#262626]">
                Reconcilled Payments: <span className="font-bold text-[#27AE60]">80</span>
              </p>
              <p className="font-SegoeUI text-sm text-[#262626]">
                Total Payments: <span className="font-bold text-[#1860EC]">100</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-11">
          <OrdersTable />
        </div>
      </div>
    </DefaultLayout>
  );
};

type OverviewCardProps = {
  title: string;
  value: string;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
  const widthSize = useScreenWidth();

  return (
    <div className="flex w-full flex-col-reverse items-center gap-x-4 rounded-sm border border-[#EEF8FD] bg-white p-[18px] sm:flex-row lg:max-w-[320px]">
      <div className="w-full">
        <p className="text-xs text-[#787C90]">{title}</p>
        <p className="font-SegoeUI text-lg  text-[#262626]">{value}</p>
      </div>

      <ResponsiveContainer width={widthSize < 640 ? "100%" : "50%"} height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#42B6F6" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#42B6F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#0294FF" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

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

export default App;
