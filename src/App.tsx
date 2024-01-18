import React from "react";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import { data } from "./data/AreaChartData";
import OrdersTable from "./components/OrderTable/OrderTable";
import OrderPaymentInfo from "./components/OrderPaymentInfo/OrderPaymentInfo";

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
                {/* <Tooltip /> */}
                <Area type="monotone" dataKey="total" stroke="transparent" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-y-1 md:w-2/5">
            <OrderPaymentInfo title="Orders" pending={20} reconciled={80} total={100} gradientPercent={80} />
            <OrderPaymentInfo title="Payments" pending={20} reconciled={80} total={100} gradientPercent={80} />
          </div>
        </div>

        <div className="mt-11">
          <OrdersTable />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default App;
