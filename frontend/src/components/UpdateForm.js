import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";

export default function UpdateForm({ patchID, onPost }) {
  const [trackerType, setTrackerType] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();

  const handleSubmit = async () => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const track = { trackerType, source, amount, description };

    const response = await fetch(
      "https://expenses-tracker-api-60py.onrender.com/api/tracker/" + patchID,
      {
        method: "PATCH",
        body: JSON.stringify(track),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setError(null);
      setTrackerType("");
      setSource("");
      setAmount("");
      setDescription("");
      setEmptyFields([]);
      console.log("Update Successful", json);
    }
  };

  return (
    <React.Fragment>
      <div className="rounded-lg px-6 py-6 font-poppins bg-gray-800 text-white w-3/4 m-auto | md:w-2/4 | lg:w-1/4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-base font-semibold">UPDATE ITEM</h2>
            <i
              onClick={() => {
                onPost(false);
              }}
              className="fa-solid fa-xmark cursor-pointer"
            ></i>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col mt-3">
            <label>Type of Action</label>
            <select
              onChange={(e) => {
                setTrackerType(e.target.value);
              }}
              value={trackerType}
              className={
                emptyFields.includes("trackerType")
                  ? "bg-gray-700 p-1 rounded-md border border-red-500"
                  : "bg-gray-700 p-1 rounded-md"
              }
            >
              <option value="" selected="selected" disabled>
                Select a Type
              </option>
              <option value="Gain">Gain</option>
              <option value="Expense">Expense</option>
            </select>
            <label className="mt-3">Source</label>
            <input
              type="text"
              onChange={(e) => {
                setSource(e.target.value);
              }}
              value={source}
              className={
                emptyFields.includes("source")
                  ? "bg-gray-700 p-1 rounded-md border border-red-500"
                  : "bg-gray-700 p-1 rounded-md"
              }
            />
            <label className="mt-3">Amount</label>
            <input
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
              className={
                emptyFields.includes("amount")
                  ? "bg-gray-700 p-1 rounded-md border border-red-500"
                  : "bg-gray-700 p-1 rounded-md"
              }
            />
            <label className="mt-3">Description</label>
            <input
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              className={
                emptyFields.includes("description")
                  ? "bg-gray-700 p-1 rounded-md border border-red-500"
                  : "bg-gray-700 p-1 rounded-md"
              }
            />
            <button className="mt-7 bg-indigo-700 px-1 py-2 rounded-md">
              POST
            </button>
            {error && (
              <div className="w-full mx-auto text-center mt-4 bg-red-300 text-red-700 border border-red-600">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
