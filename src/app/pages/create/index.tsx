import * as React from 'react';
import { CreateForm } from '@app/components/create-form';
import { Preview } from '@app/components/preview';
import { CreateFormModel } from '@app/models/create-form.model';
import { createPostcard } from '@app/api';
import { useHistory } from 'react-router';

export const CreatePostcard: React.FC = () => {
  const [form, setForm] = React.useState(new CreateFormModel());
  const history = useHistory();

  const modifyForm = React.useCallback(
    (field: string, val: string) => {
      form[field] = val;
      setForm(form.nextState());
    },
    [form, setForm]
  );

  const create = React.useCallback(async () => {
    try {
      console.warn(form);
      await createPostcard(form.toJSON());
      history.push(`/donate/${form.url}`);
    } catch (error) {
      console.warn(error);
    }
  }, [history, form]);

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-4 form-container">
          <CreateForm form={form} onCreate={create} onMofifyField={modifyForm} />
        </div>
        <div className="align-items-cetner">
          <Preview form={form} />
        </div>
      </div>
    </div>
  );
};
