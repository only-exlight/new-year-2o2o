import * as React from 'react';
import { Button } from 'react-bootstrap';

export const DonatePage: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column justify-content-center qr-wrapper">
        <div className="text-center text-primary mb-4">
          <h1>Счастливого нового года!</h1>
          <div>Если вам понравилась идея или вы хотите поддержать автора перечислите любую сумму</div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="qr-code">
            <img src="/build/donate.png" alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <a href="https://www.tinkoff.ru/collectmoney/crowd/kernichnyi.andrey1/JlcSh82503/?short_link=4G4TYxE3YHw&httpMethod=GET">
            <Button variant="primary">Поддержать автора</Button>
          </a>
        </div>
        <div className="text-center text-primary mt-4">
          <span>Нажимая на кнопку "Поддержать автора" Вы будете перенаправлены на страницу сбора средств</span>
        </div>
        <div className="text-center text-primary mt-4">
          <span>
            Пишите ваши предложения и пожелания на{' '}
            <a href="mailto:only-exlight@gmail.com">only-exlight@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};
