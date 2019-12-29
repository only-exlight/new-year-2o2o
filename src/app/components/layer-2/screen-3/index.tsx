import * as React from 'react';
import { Timer } from '@app/components/timer';
import { Button } from 'react-bootstrap';

interface IScreen_2_3 {
  text: string;
}

export const Layer2Screen3: React.FC<IScreen_2_3> = ({ text }) => {
  return (
    <div className="screen">
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center h1">
            <div className="timer">
              <Timer />
              <h1>{text}</h1>
              <a href="/create">
                <Button variant="outline-primary">Создать поздравление друзьям</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
