import React from "react";
import { useItemContext } from "../hooks/useItemContext";
import { useAuthContext } from "../hooks/useAuthContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function History({ item, onUpdate, onPost }) {
  const { dispatch } = useItemContext();
  const { user } = useAuthContext();

  const textStyle = {
    backgroundColor: "",
  };

  if (item.trackerType === "Gain") {
    textStyle.backgroundColor = "#10B981";
  } else if (item.trackerType === "Expense") {
    textStyle.backgroundColor = "#EF4444";
  }

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/tracker/" + item._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: json });
    }
  };

  const handleUpdate = () => {
    onUpdate(item._id);
    onPost(true);
  };

  return (
    <React.Fragment>
      <div className="px-5 py-3 text-xs | lg:text-base">
        {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
      </div>
      <div className="px-5 py-3">
        <span
          style={textStyle}
          className="rounded-xl font-bold text-[0.6rem] p-1 | lg:text-xs"
        >
          {item.trackerType}
        </span>
      </div>
      <div className="px-5 py-3 hidden | lg:block">{item.source}</div>
      <div className="px-5 py-3 text-[0.6rem] | md:text-base">
        ₱ {item.amount}
      </div>
      <div className="px-5 py-3 hidden | lg:block">{item.description}</div>
      <div className="px-6 py-3">
        <i
          onClick={handleUpdate}
          className="fa-solid fa-pen-to-square mr-2 cursor-pointer text-indigo-400"
        ></i>
        <i
          onClick={handleDelete}
          className="fa-solid fa-trash cursor-pointer text-indigo-400"
        ></i>
      </div>
    </React.Fragment>
  );
}
