/** @jsxImportSource theme-ui */
import { Box, Button, Input, Label } from "theme-ui";
import { useFormik } from "formik";

const NoteForm = ({ submitForm }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input
        name="title"
        id="title"
        mb={3}
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      {/* <Textarea name="comment" id="comment" rows={6} mb={3} /> */}

      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default NoteForm;
