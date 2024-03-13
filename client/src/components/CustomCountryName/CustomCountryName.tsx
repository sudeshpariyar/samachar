import React from "react";

const CustomCountryName = ({ country }: { country: string }) => {
  return <div style={{ textTransform: "capitalize" }}>{country}</div>;
};

export default CustomCountryName;
