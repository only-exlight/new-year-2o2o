import * as React from 'react';

interface Screen_1_2 {
  congratulation: string;
}

export const Layer1Screen2: React.FC<Screen_1_2> = ({ congratulation }) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="offset-5 col-7">
            <h1>
              {congratulation}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
