import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slice/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(deleteUsers());
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <button className="btn add-btn" onClick={() => deleteAll()}>
        Delete All Users
      </button>
    </div>
  );
};
