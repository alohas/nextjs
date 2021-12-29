/** @jsxImportSource theme-ui */
import { Button, Input, Label, Textarea, ThemeUIStyleObject } from "theme-ui";
import { useFormik } from "formik";
import { NoteFormValues } from "../utils/types";
import * as Yup from "yup";

interface Props {
  submitForm: (values: NoteFormValues) => Promise<void>;
  initialFormValues?: NoteFormValues;
}

const NoteSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  comment: Yup.string().required("Required").max(18, "Too Long!"),
});

const NoteForm: React.FC<Props> = ({
  submitForm,
  initialFormValues = {
    title: "",
    comment: "",
  },
}) => {
  const { handleSubmit, handleChange, values, isValid, errors, dirty } =
    useFormik({
      initialValues: initialFormValues,
      validateOnChange: true,
      validateOnBlur: true,
      validationSchema: NoteSchema,
      onSubmit: (values, { resetForm }) => {
        submitForm(values).then(() => resetForm());
      },
    });

  const disableSubmit = !dirty ? true : !isValid;

  const makeInputStyles = (isError: boolean): ThemeUIStyleObject => ({
    borderColor: isError ? "primary" : "text",
  });

  return (
    <form onSubmit={handleSubmit}>
      <Label
        sx={{ color: !!errors.title ? "primary" : "text" }}
        htmlFor="title"
      >
        Title
      </Label>
      <Input
        sx={makeInputStyles(!!errors.title)}
        name="title"
        id="title"
        mb={3}
        onChange={handleChange}
        value={values.title}
      />

      <Label
        sx={{ color: !!errors.comment ? "primary" : "text" }}
        htmlFor="comment"
      >
        Comment
      </Label>
      <Textarea
        sx={makeInputStyles(!!errors.comment)}
        name="comment"
        id="comment"
        rows={6}
        mb={3}
        onChange={handleChange}
        value={values.comment}
      />

      <Button
        disabled={disableSubmit}
        sx={{
          cursor: !disableSubmit ? "pointer" : "default",
          transition: "0.2s background-color",
          backgroundColor: !disableSubmit ? "purple" : "muted",
        }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default NoteForm;
