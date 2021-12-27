import { Note } from "../utils/types";

const notes: Note[] = new Array(15).fill(1).map((_, i) => ({
  id: Math.random().toString(36).substring(2),
  title: `Note ${i}`,
}));

module.exports = notes;
