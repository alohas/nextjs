import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Note } from "../../../src/utils/types";

const notes = require("../../../src/data/data");

const getNote = (id: string | string[]) =>
  notes.find((note: Note) => note.id === id);

const getNoteIndex = (id: string | string[]) =>
  notes.findIndex((note: Note) => note.id === id);

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
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
      res.status(404);
      res.end();
      return;
    }

    const i = getNoteIndex(id);
    const updated = { ...note, ...JSON.parse(body) };

    notes[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const {
      query: { id },
    } = req;
    const note = getNote(id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = getNoteIndex(id);

    notes.splice(i, 1);

    res.json({ data: id });
  });

export default handler;
