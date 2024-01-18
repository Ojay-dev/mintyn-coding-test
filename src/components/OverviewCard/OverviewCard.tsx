import { Area, AreaChart, ResponsiveContainer } from "recharts";
import useScreenWidth from "../../hooks/useScreenWidth";
import { data } from "../../data/AreaChartData";

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

          {/* <Tooltip /> */}
          <Area type="monotone" dataKey="total" stroke="#0294FF" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewCard;
