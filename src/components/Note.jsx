/** @jsxImportSource theme-ui */
import Link from "next/link";
import { Card } from "theme-ui";

const Note = ({ id, title }) => {
  return (
    <Link href="/notes/[id]" as={`/notes/${id}`} passHref>
      <Card
        sx={{
          cursor: "pointer",
          backgroundColor: "background",
          boxShadow:
            "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
          transition: "background-color ease-in 0.1s",
          "&:hover": {
            backgroundColor: "highlight",
          },
        }}
      >
        {title}
      </Card>
    </Link>
  );
};

export default Note;
