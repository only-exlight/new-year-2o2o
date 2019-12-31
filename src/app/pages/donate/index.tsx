import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';

export const DonatePage: React.FC = () => {
  const match: any = useRouteMatch();

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center qr-wrapper my-4">
        <div className="text-center text-primary mb-4">
          <h1>Счастливого нового года!</h1>
          <div>
            Ваше поздравление доспно по адресу:{' '}
            <a
              href={`${location.protocol}//${location.host}/${match.params.id}`}
              target="_blank"
            >{`${location.protocol}//${location.host}/${match.params.id}`}</a>
          </div>
          <div>Если вам понравилась идея или вы хотите поддержать автора перечислите любую сумму</div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="qr-code">
            <img src="/assets/donate.png" alt="" />
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
            Пишите ваши предложения и пожелания на <a href="mailto:only-exlight@gmail.com">only-exlight@gmail.com</a>
          </span>
        </div>
        <div className="text-center text-primary mt-4">
          <span>
            <a href="/create">Создать еще?</a>
          </span>
        </div>
      </div>
    </div>
  );
};
