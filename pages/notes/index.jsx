/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { useState } from "react";
import { Grid, Alert } from "theme-ui";

import Note from "../../src/components/Note";
import NoteForm from "../../src/components/NoteForm";

const Page = ({ notes }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const submitFormData = async (values) => {
    const res = await fetch(`http://localhost:3000/api/note/`, {
      method: "POST",
      body: JSON.stringify(values),
      // body: values,
    });
    if (res.ok) {
      setErrorMessage(null);
      refreshData();
    } else {
      setErrorMessage(res.statusText);
    }
  };

  return (
    <div>
      {errorMessage && <Alert>{errorMessage}</Alert>}
      <h1>Note Index Page 📝</h1>
      <h2>Add new one</h2>
      <NoteForm submitForm={submitFormData} />
      <h2>Your notes:</h2>
      <Grid gap={2} columns={[1, 2, 3, 4]}>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </Grid>
    </div>
  );
};

export default Page;

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/note/`);
  const { data } = await res.json();

  return {
    props: { notes: JSON.parse(data) },
  };
};
