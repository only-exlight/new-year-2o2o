import * as React from "react";
import { CreateForm } from "@app/components/create-form";
import { Preview } from "@app/components/preview";
import { CreateFormModel } from "@app/models/create-form.model";

export const CreatePostcard: React.FC = () => {
  const [form, setForm] = React.useState(new CreateFormModel());
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 ">
          <CreateForm />
        </div>
        <div className="align-items-cetner">
          <Preview />
        </div>
      </div>
    </div>
  );
};
