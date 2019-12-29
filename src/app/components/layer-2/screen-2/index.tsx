import * as React from "react";
import { randomInteger } from "@app/functions";
import Sticker from "@app/components/sticker";
import { COLORS } from "@app/consts";

interface IScreen_2_2 {
  sticker1: string;
  sticker2: string;
  sticker3: string;
  sticker4: string;
}

export const Layer2Screen2: React.FC<IScreen_2_2> = ({sticker1, sticker2, sticker3, sticker4}) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-5 d-flex flex-wrap">
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
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              {sticker4}
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
