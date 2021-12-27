import React from "react";
import { Button, Input, Label } from "theme-ui";
import { useFormik } from "formik";
import { NoteFormValues } from "../utils/types";

interface Props {
  submitForm: (values: NoteFormValues) => Promise<void>;
}

const NoteForm: React.FC<Props> = ({ submitForm }) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input
        name="title"
        id="title"
        mb={3}
        onChange={handleChange}
        value={values.title}
      />

      {/* <Textarea name="comment" id="comment" rows={6} mb={3} /> */}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NoteForm;
