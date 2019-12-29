import * as React from "react";
import { CreateForm } from "@app/components/create-form";
import { Preview } from "@app/components/preview";

export const CreatePostcard: React.FC = () => {
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
