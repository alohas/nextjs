import { useRouter } from "next/router";
import React, { useState } from "react";
import { Grid, Alert } from "theme-ui";

import NoteCard from "../../src/components/Note";
import NoteForm from "../../src/components/NoteForm";
import { Note, NoteFormValues } from "../../src/utils/types";

interface Props {
  notes: Note[];
}

const Page: React.FC<Props> = ({ notes }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const submitFormData = async (values: NoteFormValues) => {
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
          <NoteCard key={note.id} {...note} />
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
