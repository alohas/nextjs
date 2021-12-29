/** @jsxImportSource theme-ui */
import Link from "next/link";
import { Card } from "theme-ui";
import { Note } from "../utils/types";

interface Props extends Note {}

const NoteCard: React.FC<Props> = ({ id, title, comment }) => {
  return (
    <Link href="/notes/[id]" as={`/notes/${id}`} passHref>
      <Card>
        <h4 sx={{ m: 0 }}>{title}</h4>
        <p sx={{ mb: 0, wordBreak: "break-word" }}>{comment}</p>
      </Card>
    </Link>
  );
};

export default NoteCard;
