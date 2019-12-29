import * as React from 'react';
import { Form, Button } from 'react-bootstrap';

export const CreateForm: React.FC = () => {
  return (
    <Form>
      <Form.Group>
        <h2 className="text-primary">Экран 1:</h2>
        <Form.Label className="text-primary">Имя получателя:</Form.Label>
        <Form.Control type="text" placeholder="Имя" />
        <Form.Label className="text-primary">Текст для первого стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для первого стикера" />
        <Form.Label className="text-primary">Текст для второго стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для второго стикера" />
        <Form.Label className="text-primary">Текст для третьего стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для третьего стикера" />
        <h2 className="mt-4 text-primary">Экран 2:</h2>
        <Form.Label className="text-primary">Текст для первого стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для первого стикера" />
        <Form.Label className="text-primary">Текст для второго стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для второго стикера" />
        <Form.Label className="text-primary">Текст для третьего стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для третьего стикера" />
        <Form.Label className="text-primary">Текст для четвертого стикера:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для четвертого стикера" />
        <Form.Label className="text-primary">Текст для второго экрана:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Текст для второго экрана" />
        <h2 className="mt-4 text-primary">Экран 3</h2>
        <Form.Label className="text-primary">Ваше имя:</Form.Label>
        <Form.Control type="text" placeholder="Ваше имя" />
        <div className="mt-4">
          <Button variant="outline-primary">Создать поздравление</Button>
        </div>
      </Form.Group>
    </Form>
  );
};
