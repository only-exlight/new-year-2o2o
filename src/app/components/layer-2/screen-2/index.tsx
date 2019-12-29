import * as React from 'react';
import { randomInteger } from '@app/functions';
import Sticker from '@app/components/sticker';
import { COLORS } from '@app/consts';

interface IScreen_2_2 {
  sticker1: string;
  sticker2: string;
  sticker3: string;
  sticker4: string;
}

export const Layer2Screen2: React.FC<IScreen_2_2> = ({ sticker1, sticker2, sticker3, sticker4 }) => {
  const sticker1Color = React.useMemo(() => COLORS[randomInteger(0, 25)], []);
  const sticker2Color = React.useMemo(() => COLORS[randomInteger(0, 25)], []);
  const sticker3Color = React.useMemo(() => COLORS[randomInteger(0, 25)], []);
  const sticker4Color = React.useMemo(() => COLORS[randomInteger(0, 25)], []);
  const rotate1 = React.useMemo(() => randomInteger(-15, 15), []);
  const rotate2 = React.useMemo(() => randomInteger(-15, 15), []);
  const rotate3 = React.useMemo(() => randomInteger(-15, 15), []);
  const rotate4 = React.useMemo(() => randomInteger(-15, 15), []);
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-5 d-flex flex-wrap">
            <Sticker color={sticker1Color} rotate={rotate1}>
              {sticker1}
            </Sticker>
            <Sticker color={sticker2Color} rotate={rotate2}>
              {sticker2}
            </Sticker>
            <Sticker color={sticker3Color} rotate={rotate3}>
              {sticker3}
            </Sticker>
            <Sticker color={sticker4Color} rotate={rotate4}>
              {sticker4}
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
