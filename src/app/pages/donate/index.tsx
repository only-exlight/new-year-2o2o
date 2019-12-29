import * as React from 'react';
import { Button } from 'react-bootstrap';

export const DonatePage: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h1>Спасибо что воспользовались нашим сервисом!</h1>
        <div>Если вам понравилась идея или вы хотите поддержать автора перечислите любую сумму</div>
        <div>
          <img src="" alt="" />
        </div>
        <a href="https://www.tinkoff.ru/collectmoney/crowd/kernichnyi.andrey1/JlcSh82503/?short_link=4G4TYxE3YHw&httpMethod=GET">
          <Button variant="outline-primary">Поддержать автора</Button>
        </a>
      </div>
    </div>
  );
};
