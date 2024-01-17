import DefaultLayout from "./components/layout/DefaultLayout";

const App = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-screen-xl pl-8 pr-[10%]">
        <div className="flex justify-between">
          <div className="flex w-full gap-x-3">
            <div className="w-full max-w-[253px] rounded-sm border border-[#EEF8FD] bg-white p-[18px]">
              <p className="text-[#787C90]">Daily Transaction Volume</p>
              <p className="font-SegoeUI text-lg font-bold text-[#262626]">2,342</p>
            </div>
            <div className="w-full max-w-[253px] rounded-sm border border-[#EEF8FD] bg-white p-[18px]">
              <p className="text-[#787C90]">Daily Transaction Value</p>
              <p className="font-SegoeUI text-lg font-bold text-[#262626]">₦4,000,000</p>
            </div>
          </div>

          <div className="flex w-full justify-end gap-x-3">
            <div className="w-full max-w-[253px] rounded-sm border border-[#EEF8FD] bg-white p-[18px]">
              <p className="text-[#787C90]">Total Transaction Volume</p>
              <p className="font-SegoeUI text-lg font-bold text-[#262626]">452,000</p>
            </div>
            <div className="w-full max-w-[253px] rounded-sm border border-[#EEF8FD] bg-white p-[18px]">
              <p className="text-[#787C90]">Total Transaction Value</p>
              <p className="font-SegoeUI text-lg font-bold text-[#262626]">₦4,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default App;
