import * as React from "react";
import { Timer } from "@app/components/timer";

interface IScreen_2_3 {
  text: string;
}

export const Layer2Screen3: React.FC<IScreen_2_3> = ({ text }) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center h1">
            <Timer />
            <h1 style={{ marginTop: "3rem" }}>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
