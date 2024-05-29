import React, { ReactNode } from "react";

interface SkewBgProps {
  children: ReactNode;
  bgColor: string;
}

const SkewBg: React.FC<SkewBgProps> = ({ children, bgColor }) => {
  return (
    <div
      className={`relative overflow-hidden ${bgColor} py-10 transform -skew-y-[2deg] -mt-5`}
    >
      <div className="transform skew-y-[2deg]">{children}</div>
    </div>
  );
};

export default SkewBg;
