import nc from "next-connect";
import notes from "../../../src/data/data";

const getNote = (id) => notes.find((note) => note.id === id);
const getNoteIndex = (id) => notes.findIndex((note) => note.id === id);

const notFoundError = () => {
  res.status(404);
  res.end();
  return;
};

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      notFoundError();
    }

    res.json({ data: note });
  })
  .patch((req, res) => {
    const {
      body,
      query: { id },
    } = req;

    const note = getNote(id);

    if (!note) {
      notFoundError();
    }

    const i = getNoteIndex(id);
    const updated = { ...note, ...body };

    notes[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const {
      query: { id },
    } = req;
    const note = getNote(id);

    if (!note) {
      notFoundError();
    }
    const i = getNoteIndex(id);

    notes.splice(i, 1);

    res.json({ data: id });
  });

export default handler;
