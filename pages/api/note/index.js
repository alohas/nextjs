import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Math.random().toString(36).substring(2),
    };

    notes.push(note);
    res.json({ data: note });
  })
  .get((req, res) => {
    res.json({ data: notes });
  });

export default handler;
