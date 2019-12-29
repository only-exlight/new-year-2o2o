import * as React from 'react';
import { CreateForm } from '@app/components/create-form';
import { Preview } from '@app/components/preview';
import { CreateFormModel } from '@app/models/create-form.model';
import { createPostcard } from '@app/api';
import { useHistory } from 'react-router';
import { ValidationError } from 'yup';

export const CreatePostcard: React.FC = () => {
  const [form, setForm] = React.useState(new CreateFormModel());
  const [errors, setErors] = React.useState<any>({});
  const history = useHistory();

  const modifyForm = React.useCallback(
    (field: string, val: string) => {
      setErors({ ...errors, [field]: undefined });
      form[field] = val;
      setForm(form.nextState());
    },
    [form, setForm, setErors, errors]
  );

  const create = React.useCallback(async () => {
    try {
      setErors({});
      await form.validate();
      await createPostcard(form.toJSON());
      history.push(`/donate/${form.url}`);
    } catch (error) {
      const err: any = error;
      if (err instanceof ValidationError) {
        err.inner.forEach((e, index) => (errors[e.path] = err.errors[index]));
        setErors(errors);
      } else {
      }
    }
  }, [history, form, setErors]);

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-4 form-container">
          <CreateForm errors={errors} form={form} onCreate={create} onMofifyField={modifyForm} />
        </div>
        <div className="align-items-cetner">
          <Preview form={form} />
        </div>
      </div>
    </div>
  );
};
