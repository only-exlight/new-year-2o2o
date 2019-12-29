import * as React from "react";
import Sticker from "@app/components/sticker";
import { randomInteger } from "@app/functions";
import { COLORS } from 'src/app/consts';

export const Layer2Screen1: React.FC = () => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="offset-7 col-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};
