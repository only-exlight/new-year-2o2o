import * as React from 'react';
import { Snowflakes } from '@app/components/snowflakes';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layer1Screen1, Layer1Screen2, Layer1Screen3 } from 'src/app/components/layer-1';
import { Layer2Screen2, Layer2Screen1, Layer2Screen3 } from 'src/app/components/layer-2';
import { getPostcard } from '@app/api';
import { useRouteMatch } from 'react-router';
import { ICreateForm } from '@app/interfaces';
import { Spinner } from 'react-bootstrap';

export const Postcard: React.FC = () => {
  const [postcard, setPostcard] = React.useState<ICreateForm>();
  const [isLoad, setIsLoad] = React.useState(true);
  const match: any = useRouteMatch();

  React.useEffect(() => {
    getPostcard(match.params.id)
      .then((res) => setPostcard(res))
      .catch((err) => console.warn(err))
      .finally(() => setIsLoad(false));
  }, []);

  return (
    <>
      {isLoad ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          <Snowflakes />
          <Parallax pages={2.3} scrolling={true} horizontal={false}>
            <ParallaxLayer offset={0} speed={0.8}>
              <Layer1Screen1 name={postcard.recipient} />
              <Layer1Screen2 congratulation={postcard.screen_2_text} />
              <Layer1Screen3 name={postcard.recipient} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <Layer2Screen1
                sticker1={postcard.screen_1_sticker_1}
                sticker2={postcard.screen_1_sticker_2}
                sticker3={postcard.screen_1_sticker_3}
              />
              <Layer2Screen2
                sticker1={postcard.screen_2_sticker_1}
                sticker2={postcard.screen_2_sticker_2}
                sticker3={postcard.screen_2_sticker_3}
                sticker4={postcard.screen_2_sticker_4}
              />
              <Layer2Screen3 text={postcard.your_name} />
            </ParallaxLayer>
          </Parallax>
        </>
      )}
    </>
  );
};
