import React from "react";
import { useItemContext } from "../hooks/useItemContext";

export default function Trackables() {
  const { items } = useItemContext();

  let todayTotalGain = 0;
  let todayTotalExpense = 0;
  let highestGain = 0;
  let highestExpense = 0;

  const date = new Date();
  const day = date.getDate();

  items &&
    items.map((item) => {
      let dayCreated = parseInt(item.createdAt.substr(8, 2));

      if (item.trackerType === "Gain") {
        if (item.amount > highestGain) {
          highestGain = item.amount;
        }
      }

      if (item.trackerType === "Expense") {
        if (item.amount > highestExpense) {
          highestExpense = item.amount;
        }
      }

      if (item.trackerType === "Gain" && day === dayCreated) {
        return (todayTotalGain = todayTotalGain + item.amount);
      }

      if (item.trackerType === "Expense" && day === dayCreated) {
        return (todayTotalExpense = todayTotalExpense + item.amount);
      }
    });

  return (
    <React.Fragment>
      <div className="rounded-lg p-3 font-poppins bg-gray-800">
        <h2 className="text-base font-semibold">TRACKABLES</h2>
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <i class="fa-solid fa-sack-dollar fa-2x mr-5 border border-emerald-500 p-2 text-emerald-500 rounded-xl"></i>
            <div>
              <p className="text-emerald-500">Total Gains Today</p>
              <p className="text-2xl font-bold">{todayTotalGain}</p>
            </div>
          </div>

          <hr className="my-4 bg-gray-700 border-none h-[0.1rem]" />

          <div className="flex items-center">
            <i class="fa-solid fa-stamp fa-2x mr-5 border border-red-500 p-2 text-red-500 rounded-xl"></i>
            <div>
              <p className="text-red-500">Total Expenses Today</p>
              <p className="text-2xl font-bold">{todayTotalExpense}</p>
            </div>
          </div>

          <hr className="my-4 bg-gray-700 border-none h-[0.1rem]" />

          <div className="flex items-center">
            <i class="fa-solid fa-money-bill-trend-up fa-2x mr-5 border border-emerald-500 p-2 text-emerald-500 rounded-xl"></i>
            <div>
              <p className="text-emerald-500">Highest Gain</p>
              <p className="text-2xl font-bold">{highestGain}</p>
            </div>
          </div>

          <hr className="my-4 bg-gray-700 border-none h-[0.1rem]" />

          <div className="flex items-center">
            <i class="fa-solid fa-coins fa-2x mr-5 border border-red-500 p-2 text-red-500 rounded-xl"></i>
            <div>
              <p className="text-red-500">Highest Expense</p>
              <p className="text-2xl font-bold">{highestExpense}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
