import React from "react";
import OverviewIcon from "../icons/overview_icon";
import AllPaymentIcon from "../icons/all_payment_icon";
import ReconciledPaymentIcon from "../icons/reconciled_payment_icon";
import UnReconciledPaymentIcon from "../icons/unreconciled_payment_icon";
import ManualSettlement from "../icons/manual_settlement";
import AllOrdersIcon from "../icons/all_orders_icon";
import PendingOrdersIcon from "../icons/pending_orders_icon";
import ReconciledOrdersIcon from "../icons/reconciled_orders_icon";
import MarchantPaymentIcon from "../icons/merchant_payment_icon";

const SidebarNav: React.FC = () => {
  return (
    <nav className="fixed top-[60px] h-screen w-[330px] overflow-y-scroll bg-white pt-[33px]">
      <button className="my-8 ml-8 rounded-3xl bg-[#27AE60] px-[26px] py-[10px] text-white">GENERATE INVOICE</button>

      <div className="mb-8 flex flex-col">
        <span className="sidebar-link">Main</span>
        <a href="#" className="sidebar-link active">
          <OverviewIcon /> Overview
        </a>
      </div>

      <div className="mb-8 flex flex-col">
        <span className="sidebar-link">Payments</span>
        <a href="#" className="sidebar-link">
          <AllPaymentIcon /> All Payments
        </a>
        <a href="#" className="sidebar-link">
          <ReconciledPaymentIcon /> Reconcilled Payments
        </a>
        <a href="#" className="sidebar-link">
          <UnReconciledPaymentIcon /> Un - Reconcilled Payments
        </a>
        <a href="#" className="sidebar-link">
          <ManualSettlement /> Manual Settlement
        </a>
      </div>

      <div className="mb-8 flex flex-col">
        <span className="sidebar-link">Orders</span>
        <a href="#" className="sidebar-link">
          <AllOrdersIcon /> All Orders
        </a>
        <a href="#" className="sidebar-link">
          <PendingOrdersIcon /> Pending Orders
        </a>
        <a href="#" className="sidebar-link">
          <ReconciledOrdersIcon /> Reconcilled Orders
        </a>
      </div>

      <div className="mb-8">
        <a href="#" className="sidebar-link">
          <MarchantPaymentIcon /> Merchant Profile
        </a>
      </div>
    </nav>
  );
};

export default SidebarNav;