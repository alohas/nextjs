import React from "react";
import Link from "next/link";
import { Card } from "theme-ui";
import { Note } from "../utils/types";


interface Props extends Note{
}

const NoteCard: React.FC<Props>= ({ id, title }) => {
  return (
    <Link href="/notes/[id]" as={`/notes/${id}`} passHref>
      <Card>
        {title}
      </Card>
    </Link>
  );
};

export default NoteCard;
