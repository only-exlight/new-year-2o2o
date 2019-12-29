import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CreateFormModel } from '@app/models/create-form.model';

interface ICreateForm {
  form: CreateFormModel;
  onCreate: () => void;
  onMofifyField: (field: string, val: string) => void;
}

export const CreateForm: React.FC<ICreateForm> = ({ onCreate, onMofifyField, form }) => {
  return (
    <Form>
      <Form.Group>
        <h2 className="text-primary">Экран 1:</h2>
        <Form.Label className="text-primary">Имя получателя:</Form.Label>
        <Form.Control
          value={form.recipient}
          type="text"
          placeholder="Имя"
          onChange={(e: any) => onMofifyField('recipient', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для первого стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для первого стикера"
          value={form.screen_1_sticker_1}
          onChange={(e: any) => onMofifyField('screen_1_sticker_1', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для второго стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для второго стикера"
          value={form.screen_1_sticker_2}
          onChange={(e: any) => onMofifyField('screen_1_sticker_2', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для третьего стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
          value={form.screen_1_sticker_3}
          onChange={(e: any) => onMofifyField('screen_1_sticker_3', e.target.value)}
        />
        <h2 className="mt-4 text-primary">Экран 2:</h2>
        <Form.Label className="text-primary">Текст для первого стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для первого стикера"
          value={form.screen_2_sticker_1}
          onChange={(e: any) => onMofifyField('screen_2_sticker_1', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для второго стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для второго стикера"
          value={form.screen_2_sticker_2}
          onChange={(e: any) => onMofifyField('screen_2_sticker_2', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для третьего стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для третьего стикера"
          value={form.screen_2_sticker_3}
          onChange={(e: any) => onMofifyField('screen_2_sticker_3', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для четвертого стикера:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для четвертого стикера"
          value={form.screen_2_sticker_4}
          onChange={(e: any) => onMofifyField('screen_2_sticker_4', e.target.value)}
        />
        <Form.Label className="text-primary">Текст для второго экрана:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Текст для второго экрана"
          value={form.screen_2_text}
          onChange={(e: any) => onMofifyField('screen_2_text', e.target.value)}
        />
        <h2 className="mt-4 text-primary">Экран 3</h2>
        <Form.Label className="text-primary">Ваше имя:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ваше имя"
          value={form.your_name}
          onChange={(e: any) => onMofifyField('your_name', e.target.value)}
        />
        <Form.Label className="text-primary">URL:</Form.Label>
        <Form.Control
          type="text"
          placeholder="URL"
          value={form.url}
          onChange={(e: any) => onMofifyField('url', e.target.value)}
        />
        <div className="mt-4">
          <Button variant="outline-primary" onClick={onCreate}>
            Создать поздравление
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};
