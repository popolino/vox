import React from "react";
import { SET_STATUS } from "./types";

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
