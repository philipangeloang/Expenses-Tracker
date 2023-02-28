import React, { useState, useEffect } from "react";
import Trackables from "../components/Trackables";
import TopCards from "../components/TopCards";
import History from "../components/History";
import TrackerForm from "../components/TrackerForm";
import UpdateForm from "../components/UpdateForm";
import ExpandedHistory from "../components/ExpandedHistory";
import { useItemContext } from "../hooks/useItemContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Authenticated() {
  const { user, dispatch: dispatchUser } = useAuthContext();
  const { items, dispatch } = useItemContext();
  const [postAction, setPostAction] = useState(false);
  const [updateAction, setUpdateAction] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [getUpdateID, setGetUpdateID] = useState("");
  const [inDate, setInDate] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/tracker", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEM", payload: json });
      }

      if (!response.ok) {
        localStorage.clear();
        dispatchUser({ type: "LOGOUT", payload: null });
      }
    };

    if (user) {
      fetchItems();
    }
  }, [dispatch, user, dispatchUser]);

  return (
    <React.Fragment>
      {postAction && (
        <div className="fixed bg-gray-700/70 h-screen w-screen flex">
          <TrackerForm
            onPost={(postAction) => {
              setPostAction(postAction);
            }}
          />
        </div>
      )}

      {updateAction && (
        <div className="fixed bg-gray-700/70 h-screen w-screen flex z-10">
          <UpdateForm
            patchID={getUpdateID}
            onPost={(updateAction) => {
              setUpdateAction(updateAction);
            }}
          />
        </div>
      )}

      {showMore && (
        <div className="fixed overflow-y-scroll p-10 bg-gray-700/70 h-screen w-screen flex">
          <ExpandedHistory
            onGetID={(id) => {
              setGetUpdateID(id);
            }}
            onGetPost={(updateAction) => {
              setShowMore(updateAction);
              setUpdateAction(updateAction);
            }}
          />
        </div>
      )}

      <div className="p-7 text-white flex flex-col">
        <div className="grid gap-7 grid-cols-1 | md:grid-cols-2 | lg:grid-cols-3 | xl:grid-cols-4">
          <TopCards />
        </div>

        <hr className="my-7 bg-gray-700 border-none h-[0.1rem]" />

        <div className="grid gap-7 grid-cols-1 | md:grid-cols-2 | lg:grid-cols-3 | xl:grid-cols-4">
          <Trackables />
          <div className="rounded-lg font-poppins bg-gray-800 flex flex-col | col-span-1 | lg:col-span-2 | xl:col-span-3 ">
            <div className="flex justify-between">
              <h2 className="text-xs font-semibold pt-5 px-5 | md:text-base">
                HISTORY
              </h2>
              <div className="flex">
                <select
                  onChange={(e) => {
                    setInDate(e.target.value);
                  }}
                  className="h-7 mt-5 mr-2 bg-gray-800 text-xs | md:text-base md:mr-4"
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

                <p
                  onClick={() => {
                    return setPostAction(!postAction);
                  }}
                  className="text-xs flex justify-center items-center font-semibold mt-3 mx-3 p-2 bg-indigo-500 rounded-xl cursor-pointer | md:text-base"
                >
                  POST NEW
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 mt-4 text-xs | lg:text-base lg:grid-cols-6">
              <div className="bg-gray-600 px-5 py-2">Date Created</div>
              <div className="bg-gray-600 px-5 py-2">Type</div>
              <div className=" bg-gray-600 px-5 py-2 hidden | lg:block">
                Source
              </div>
              <div className="bg-gray-600 px-5 py-2">Amount</div>
              <div className=" bg-gray-600 px-5 py-2 hidden | lg:block">
                Description
              </div>
              <div className="bg-gray-600 px-5 py-2">Action</div>
              {items &&
                items
                  .filter((item, index) => index < 4)
                  .map((item) => {
                    if (inDate === "") {
                      return (
                        <History
                          onUpdate={(id) => {
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
                          }}
                          key={item._id}
                          item={item}
                        />
                      );
                    } else if (inDate === "all") {
                      return (
                        <History
                          onUpdate={(id) => {
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
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
                            setGetUpdateID(id);
                          }}
                          onPost={(updateAction) => {
                            setUpdateAction(updateAction);
                          }}
                          key={item._id}
                          item={item}
                        />
                      );
                    }
                  })}
            </div>
            <hr className="mt-7 mb-4 bg-gray-700 border-none h-[0.1rem]" />
            <div
              onClick={() => {
                setShowMore(true);
              }}
              className="text-center cursor-pointer"
            >
              Show more
            </div>
          </div>
        </div>

        <div className="text-center text-slate-600 my-5 | md:my-8 lg:my-12 | xl:my-20">
          © 2023 Wuju P.Ang
        </div>
      </div>
    </React.Fragment>
  );
}
