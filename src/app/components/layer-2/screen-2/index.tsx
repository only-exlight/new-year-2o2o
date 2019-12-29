import * as React from "react";
import { randomInteger } from "@app/functions";
import Sticker from "@app/components/sticker";
import { COLORS } from "@app/consts";

export const Layer2Screen2: React.FC = () => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-5 d-flex flex-wrap">
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              Пускай исполнятся сегодня Твои заветные мечты. Удачи, счастья и
              здоровья, Любви, надежды, красоты!
            </Sticker>
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              С днем рождения, дорогая. Будь счастливой каждый день. Пусть
              удача, мир, достаток За тобой идут как тень.
            </Sticker>
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              Хорошей и расцветай. Ты — звезда, одна такая, Никогда не забывай.
            </Sticker>
            <Sticker
              color={COLORS[randomInteger(0, 25)]}
              rotate={randomInteger(-15, 15)}
            >
              Hello world
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
