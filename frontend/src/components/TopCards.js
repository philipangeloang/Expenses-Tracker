import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useItemContext } from "../hooks/useItemContext";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function TopCards() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { items } = useItemContext();

  let totalGains = 0;
  let totalExpenses = 0;
  let totalGainsNumber = 0;
  let totalExpensesNumber = 0;

  items &&
    items.map((item) => {
      if (item.trackerType === "Gain") {
        return (totalGains = totalGains + item.amount);
      } else if (item.trackerType === "Expense") {
        return (totalExpenses = totalExpenses + item.amount);
      }
    });

  items &&
    items.map((item) => {
      if (item.trackerType === "Gain") {
        return (totalGainsNumber = totalGainsNumber + 1);
      } else if (item.trackerType === "Expense") {
        return (totalExpensesNumber = totalExpensesNumber + 1);
      }
    });

  const backgroundColorStyle = {
    backgroundColor: "",
  };

  if (totalGains > totalExpenses) {
    backgroundColorStyle.backgroundColor = "#10B981";
  } else if (totalGains < totalExpenses) {
    backgroundColorStyle.backgroundColor = "#EF4444";
  }

  const capitalizedUsername =
    user.username.charAt(0).toUpperCase() + user.username.slice(1);

  const newDate = new Date();
  const day = newDate.getDate();
  const month = newDate.toLocaleString("default", { month: "long" });
  const year = newDate.getFullYear();

  const handleClick = () => {
    logout();
  };
  return (
    <React.Fragment>
      <div className="font-poppins">
        <div className="rounded-full h-16 w-16 bg-slate-800 flex justify-center items-center ">
          <i class="fa-solid fa-snowflake text-white fa-3x"></i>
        </div>
        <h2 className="font-semibold text-xl pt-3">{capitalizedUsername}</h2>
        <h4 className="text-sm pt-4 text-gray-400">{user.email}</h4>
        <p className="text-sm text-gray-400">
          {month} {day}, {year}
        </p>

        <button
          className="border p-2 rounded-md text-gray-400 mt-3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-right-from-bracket mr-2"></i>
          Logout
        </button>
      </div>

      <div style={backgroundColorStyle} className="rounded-lg p-3 font-poppins">
        <h2 className="text-base font-semibold">TOTAL PROFIT</h2>
        <div className="flex mt-4">
          <i className="fa-solid fa-wallet fa-2x border rounded-full p-3"></i>
          <div className="flex flex-col ml-4">
            <p className="text-3xl font-semibold">
              ₱ {totalGains - totalExpenses}
            </p>
            <p className="border rounded-md w-28 text-xs text-center">
              $ {parseFloat((totalGains - totalExpenses) * 0.018).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-8 mt-12">
          <div className="flex flex-col items-center mr-28">
            <p className="text-2xl">{totalGainsNumber}</p>
            <p className="text-xs">Gains</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl">{totalExpensesNumber}</p>
            <p className="text-xs">Expenses</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg  font-poppins bg-gray-800 text-emerald-500">
        <h2 className="text-base font-semibold p-3">REALIZED GAINS</h2>
        <div className="flex mt-4 p-3">
          <i className="fa-solid fa-arrow-trend-up fa-2x border border-emerald-600 rounded-full p-2"></i>
          <div className="flex flex-col ml-4">
            <p className="text-3xl font-semibold text-white">₱ {totalGains}</p>
            <p className="border rounded-md w-28 text-xs text-center text-white">
              $ {parseFloat(totalGains * 0.018).toFixed(2)}
            </p>
          </div>
        </div>
        {/* Temporary filler */}
        <div className="flex justify-center mt-8">
          <Sparklines
            data={[100, 150, 150, 50, 120, 160]}
            width={100}
            height={20}
          >
            <SparklinesLine color="#10B981" />
          </Sparklines>
        </div>
      </div>

      <div className="rounded-lg font-poppins bg-gray-800 text-red-500">
        <h2 className="text-base font-semibold p-3">REALIZED EXPENSES</h2>
        <div className="flex mt-4 p-3">
          <i className="fa-solid fa-arrow-trend-down fa-2x border border-red-600 rounded-full p-2"></i>
          <div className="flex flex-col ml-4">
            <p className="text-3xl font-semibold text-white">
              ₱ {totalExpenses}
            </p>
            <p className="border rounded-md w-28 text-xs text-center text-white">
              $ {parseFloat(totalExpenses * 0.018).toFixed(2)}
            </p>
          </div>
        </div>
        {/* Temporary filler */}
        <div className="flex justify-center mt-8">
          <Sparklines
            data={[100, 60, 150, 200, 120, 110]}
            width={100}
            height={20}
          >
            <SparklinesLine color="#EF4444" />
          </Sparklines>
        </div>
      </div>
    </React.Fragment>
  );
}
