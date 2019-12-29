import * as React from 'react';

interface IScreen_1_3 {
  name: string;
}

export const Layer1Screen3: React.FC<IScreen_1_3> = ({ name }) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" style={{ marginTop: '32rem' }}>
              <h1>{name}, до Нового года осталось:</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
