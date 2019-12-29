import * as React from "react";
import { Form, Button } from "react-bootstrap";

export const CreateForm: React.FC = () => {
  return (
    <Form>
      <Form.Group>
        <h2>Экран 1:</h2>
        <Form.Label>Имя получателя</Form.Label>
        <Form.Control type="text" placeholder="Имя" />
        <Form.Label>Текст для первого стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для первого стикера"
        />
        <Form.Label>Текст для второго стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для второго стикера"
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
        />
        <h2>Экран 2:</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
        />
        <Form.Label>Текст для второго экрана:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
        />
        <h2>Экран 3</h2>
        <Form.Label>Ваше имя</Form.Label>
        <Form.Control type="text" placeholder="Ваше имя" />
        <Button variant="outline-primary">Создать поздравление</Button>
      </Form.Group>
    </Form>
  );
};
