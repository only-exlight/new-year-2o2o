import * as React from "react";

interface IScreen_1_1 {
  name: string;
}

export const Layer1Screen1: React.FC<IScreen_1_1> = ({ name }) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-7">
            <h1>С наступающим Новым годом, {name}!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
