import * as React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { CreateFormModel } from '@app/models/create-form.model';

interface ICreateForm {
  form: CreateFormModel;
  errors: any;
  onCreate: () => void;
  onMofifyField: (field: string, val: string) => void;
}

export const CreateForm: React.FC<ICreateForm> = ({ onCreate, onMofifyField, form, errors }) => {
  console.warn(errors);
  return (
    <Form>
      <h2 className="text-primary">Экран 1:</h2>
      <Form.Group>
        <Form.Label htmlFor="recipient" className="text-primary">
          Имя получателя:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="recipient"
            value={form.recipient}
            type="text"
            placeholder="Имя"
            isInvalid={errors.recipient}
            onChange={(e: any) => onMofifyField('recipient', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.recipient}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_1_sticker_1" className="text-primary">
          Текст для первого стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_1_sticker_1"
            as="textarea"
            type="text"
            isInvalid={errors.screen_1_sticker_1}
            placeholder="Текст для первого стикера"
            value={form.screen_1_sticker_1}
            onChange={(e: any) => onMofifyField('screen_1_sticker_1', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_1_sticker_1}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_1_sticker_2" className="text-primary">
          Текст для второго стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_1_sticker_2"
            as="textarea"
            type="text"
            isInvalid={errors.screen_1_sticker_2}
            placeholder="Текст для второго стикера"
            value={form.screen_1_sticker_2}
            onChange={(e: any) => onMofifyField('screen_1_sticker_2', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_1_sticker_2}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_1_sticker_3" className="text-primary">
          Текст для третьего стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_1_sticker_3"
            as="textarea"
            type="text"
            isInvalid={errors.screen_1_sticker_3}
            placeholder="Текст для третьего стикера"
            value={form.screen_1_sticker_3}
            onChange={(e: any) => onMofifyField('screen_1_sticker_3', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_1_sticker_3}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <h2 className="mt-4 text-primary">Экран 2:</h2>
      <Form.Group>
        <Form.Label htmlFor="screen_2_sticker_1" className="text-primary">
          Текст для первого стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_2_sticker_1"
            as="textarea"
            type="text"
            isInvalid={errors.screen_2_sticker_1}
            placeholder="Текст для первого стикера"
            value={form.screen_2_sticker_1}
            onChange={(e: any) => onMofifyField('screen_2_sticker_1', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_2_sticker_1}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_2_sticker_2" className="text-primary">
          Текст для второго стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_2_sticker_2"
            as="textarea"
            type="text"
            isInvalid={errors.screen_2_sticker_2}
            placeholder="Текст для второго стикера"
            value={form.screen_2_sticker_2}
            onChange={(e: any) => onMofifyField('screen_2_sticker_2', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_2_sticker_2}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_2_sticker_3" className="text-primary">
          Текст для третьего стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_2_sticker_3"
            as="textarea"
            type="text"
            isInvalid={errors.screen_2_sticker_3}
            placeholder="Текст для третьего стикера"
            value={form.screen_2_sticker_3}
            onChange={(e: any) => onMofifyField('screen_2_sticker_3', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_2_sticker_3}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_2_sticker_4" className="text-primary">
          Текст для четвертого стикера:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_2_sticker_4"
            as="textarea"
            type="text"
            isInvalid={errors.screen_2_sticker_4}
            placeholder="Текст для четвертого стикера"
            value={form.screen_2_sticker_4}
            onChange={(e: any) => onMofifyField('screen_2_sticker_4', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_2_sticker_4}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="screen_2_text" className="text-primary">
          Текст для второго экрана:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="screen_2_text"
            as="textarea"
            type="text"
            isInvalid={errors.screen_2_text}
            placeholder="Текст для второго экрана"
            value={form.screen_2_text}
            onChange={(e: any) => onMofifyField('screen_2_text', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.screen_2_text}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <h2 className="mt-4 text-primary">Экран 3</h2>
      <Form.Group>
        <Form.Label htmlFor="your_name" className="text-primary">
          Ваше имя:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="your_name"
            type="text"
            isInvalid={errors.your_name}
            placeholder="Ваше имя"
            value={form.your_name}
            onChange={(e: any) => onMofifyField('your_name', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.your_name}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="url" className="text-primary">
          URL:
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="url"
            type="text"
            isInvalid={errors.url}
            placeholder="URL"
            value={form.url}
            onChange={(e: any) => onMofifyField('url', e.target.value)}
          />
          <Form.Control.Feedback type="invalid">{errors.url}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <div className="mt-4">
        <Button variant="outline-primary" onClick={onCreate}>
          Создать поздравление
        </Button>
      </div>
    </Form>
  );
};
