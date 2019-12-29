import * as React from "react";
import Sticker from "@app/components/sticker";
import { randomInteger } from "@app/functions";
import { COLORS } from "src/app/consts";

interface IScreen_2_1 {
  sticker1: string;
  sticker2: string;
  sticker3: string;
}

export const Layer2Screen1: React.FC<IScreen_2_1> = ({
  sticker1,
  sticker2,
  sticker3
}) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="offset-7 col-5">
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              {sticker1}
            </Sticker>
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              {sticker2}
            </Sticker>
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              {sticker3}
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
