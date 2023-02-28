import { useState } from "react";
import { useItemContext } from "../hooks/useItemContext";
import History from "./History";

export default function ExpandedHistory({ onGetID, onGetPost }) {
  const { items } = useItemContext();
  const [inDate, setInDate] = useState("");

  return (
    <div className="m-auto rounded-lg font-poppins bg-gray-800 flex flex-col text-white">
      <div className="flex justify-between p-6">
        <div
          onClick={() => {
            onGetPost(false);
          }}
          className="text-center cursor-pointer mt-4 flex items-center justify-center text-xs | lg:text-base"
        >
          Show less
        </div>
        <select
          onChange={(e) => {
            setInDate(e.target.value);
          }}
          className="h-7 mt-5 mr-4 bg-gray-800 flex items-center justify-center text-xs | lg:text-base"
          defaultValue="all"
        >
          <option value="all">All Months</option>
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
          <option value="apr">April</option>
          <option value="may">May</option>
          <option value="jun">June</option>
          <option value="jul">July</option>
          <option value="aug">August</option>
          <option value="sep">September</option>
          <option value="oct">October</option>
          <option value="nov">November</option>
          <option value="dec">December</option>
        </select>
      </div>

      <div className="grid grid-cols-4 mt-4 | lg:grid-cols-6">
        <div className="bg-gray-600 px-5 py-2 text-xs | lg:text-base">
          Date Created
        </div>
        <div className="bg-gray-600 px-5 py-2 text-xs | lg:text-base">Type</div>
        <div className="bg-gray-600 px-5 py-2 hidden text-xs | lg:block lg:text-base">
          Source
        </div>
        <div className="bg-gray-600 px-5 py-2 text-xs | lg:text-base">
          Amount
        </div>
        <div className="bg-gray-600 px-5 py-2 hidden text-xs| lg:block lg:text-base">
          Description
        </div>
        <div className="bg-gray-600 px-5 py-2 text-xs | lg:text-base">
          Action
        </div>
        {items &&
          items.map((item) => {
            if (inDate === "") {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (inDate === "all") {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "01" &&
              inDate === "jan"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "02" &&
              inDate === "feb"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "03" &&
              inDate === "mar"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "04" &&
              inDate === "apr"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "05" &&
              inDate === "may"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "06" &&
              inDate === "jun"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "07" &&
              inDate === "jul"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "08" &&
              inDate === "aug"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "09" &&
              inDate === "sep"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "10" &&
              inDate === "oct"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "11" &&
              inDate === "nov"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            } else if (
              item.createdAt.substr(5, 2) === "12" &&
              inDate === "dec"
            ) {
              return (
                <History
                  onUpdate={(id) => {
                    onGetID(id);
                  }}
                  onPost={(updateAction) => {
                    onGetPost(updateAction);
                  }}
                  key={item._id}
                  item={item}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
