import * as React from "react";
import { Snowflakes } from "@app/components/snowflakes";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  Layer1Screen1,
  Layer1Screen2,
  Layer1Screen3
} from "src/app/components/layer-1";
import {
  Layer2Screen2,
  Layer2Screen1,
  Layer2Screen3
} from "src/app/components/layer-2";

export const CreatePage: React.FC = () => {
  return (
    <>
      <Snowflakes />
      <Parallax pages={2.3} scrolling={true} horizontal={false}>
        <ParallaxLayer offset={0} speed={0.8}>
          <Layer1Screen1 name="Вика" />
          <Layer1Screen2 congratulation="Что то" />
          <Layer1Screen3 />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <Layer2Screen1 sticker1="" sticker2="" sticker3="" />
          <Layer2Screen2 sticker1="" sticker2="" sticker3="" sticker4="" />
          <Layer2Screen3 text="Андрей" />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
