// OrderPaymentInfo.tsx
import React from "react";

type OrderPaymentInfoProps = {
  title: string;
  pending: number;
  reconciled: number;
  total: number;
  gradientPercent: number;
};

const OrderPaymentInfo: React.FC<OrderPaymentInfoProps> = ({ title, pending, reconciled, total, gradientPercent }) => {
  return (
    <div className="flex w-full flex-col gap-y-3 rounded-sm border border-[#EEF8FD] bg-white p-6">
      <h3 className="font-SegoeUI text-sm font-bold text-[#262626]">{title}</h3>

      <div
        className={`h-1 w-full rounded-xl bg-[linear-gradient(to_right,#27AE60_${gradientPercent}%,#FDC203_${100 - gradientPercent}%)] transition-colors`}
      />

      <p className="font-SegoeUI text-sm text-[#262626]">
        Pending {title}: <span className="font-bold text-[#EBC315]">{pending}</span>
      </p>
      <p className="font-SegoeUI text-sm text-[#262626]">
        Reconciled {title}: <span className="font-bold text-[#27AE60]">{reconciled}</span>
      </p>
      <p className="font-SegoeUI text-sm text-[#262626]">
        Total {title}: <span className="font-bold text-[#1860EC]">{total}</span>
      </p>
    </div>
  );
};

export default OrderPaymentInfo;
