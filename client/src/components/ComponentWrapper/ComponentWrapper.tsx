import React, { ReactNode } from "react";
import "./ComponentWrapper.css";

const ComponentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="component-wrapper">{children}</div>;
};

export default ComponentWrapper;
