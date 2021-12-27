import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end("Something broke!");
  },
})
  .post((req, res) => {
    const note = {
      ...JSON.parse(req.body),
      id: Math.random().toString(36).substring(2),
    };

    notes.push(note);
    res.json({ data: note });
  })
  .get((req, res) => {
    res.json({ data: JSON.stringify(notes) });
  });

export default handler;
