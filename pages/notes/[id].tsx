import React from "react";
import { useRouter } from "next/router";
import { Note } from "../../src/utils/types";
import { GetServerSideProps } from "next";

interface Props {
  note: Note;
}

const Page: React.FC<Props> = ({ note }) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>Note {id} Page 📝</h1>
      <h2>{note.title}</h2>
    </div>
  );
};

export default Page;

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
