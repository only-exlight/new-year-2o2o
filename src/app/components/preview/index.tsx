import * as React from 'react';
import { Snowflakes } from '../snowflakes';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layer1Screen1, Layer1Screen2, Layer1Screen3 } from '../layer-1';
import { Layer2Screen1, Layer2Screen2, Layer2Screen3 } from '../layer-2';
import { CreateFormModel } from '@app/models/create-form.model';

interface IPreview {
  form: CreateFormModel;
}

export const Preview: React.FC<IPreview> = ({ form }) => {
  return (
    <div className="device device-macbook device-spacegray">
      <div className="text-center">
        <h1 className="my-4">Предпросмотр поздравления:</h1>
      </div>
      <div className="device-frame">
        <div className="preview-container">
          <div>
            <Snowflakes />
            <Parallax pages={2.3} scrolling={true} horizontal={false}>
              <ParallaxLayer offset={0} speed={0.8}>
                <Layer1Screen1 name={form.recipient} />
                <Layer1Screen2 congratulation={form.screen_2_text} />
                <Layer1Screen3 name={form.recipient} />
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.5}>
                <Layer2Screen1
                  sticker1={form.screen_1_sticker_1}
                  sticker2={form.screen_1_sticker_2}
                  sticker3={form.screen_1_sticker_3}
                />
                <Layer2Screen2
                  sticker1={form.screen_2_sticker_1}
                  sticker2={form.screen_2_sticker_2}
                  sticker3={form.screen_2_sticker_3}
                  sticker4={form.screen_2_sticker_4}
                />
                <Layer2Screen3 text={form.your_name} />
              </ParallaxLayer>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header"></div>
      <div className="device-sensors"></div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  );
};
