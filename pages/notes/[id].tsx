/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { Note, NoteFormValues } from "../../src/utils/types";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Button, Flex } from "theme-ui";
import { useState } from "react";
import NoteForm from "../../src/components/NoteForm";

interface Props {
  note: Note;
}

const Page: React.FC<Props> = ({ note }) => {
  const {
    query: { id },
    push,
    replace,
    asPath,
  } = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const refreshData = () => {
    replace(asPath);
  };

  const deleteNote = async () => {
    const res = await fetch(`http://localhost:3000/api/note/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      push("notes");
    } else {
      console.log("sad 🎷 sounds");
    }
  };

  const submitFormData = async (values: NoteFormValues) => {
    const res = await fetch(`http://localhost:3000/api/note/${id}`, {
      method: "PATCH",
      body: JSON.stringify(values),
    });
    if (res.ok) {
      console.log(res);
      refreshData();
      setIsEdit(false);
    } else {
      console.log("sad 🎷 sounds");
    }
  };

  return (
    <div>
      <h1>Note {id} Page 📝</h1>
      <Flex>
        <Button onClick={deleteNote} mr={4}>
          Delete
        </Button>
        <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
      </Flex>

      {!isEdit ? (
        <>
          <h2>{note.title}</h2>
          <p>{note.comment}</p>
        </>
      ) : (
        <NoteForm
          submitForm={submitFormData}
          initialFormValues={{ title: note.title, comment: note.comment }}
        />
      )}
    </div>
  );
};

export default Page;

// export const getStaticPaths = async () => {
//   const response = await fetch(`http://localhost:3000/api/note`);
//   const { data } = await response.json();

//   return {
//     paths: JSON.parse(data).map((item: Note) => ({ params: { id: item.id } })),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const response = await fetch(`http://localhost:3000/api/note/${params?.id}`);

//   const { data } = await response.json();

//   return {
//     props: { note: data },
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/note/${params?.id}`);

  if (!response.ok) {
    return {
      redirect: {
        permanent: false,
        destination: "/notes",
      },
    };
  }

  const { data } = await response.json();

  return {
    props: { note: data },
  };
};
