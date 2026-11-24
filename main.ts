// Loading Screen Gold: A Tip in 200 Characters
// One sharp, funny loading-screen tip for stressed developers and AI coding
// agents. Writes the single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Tip: the build isn't slow — your agent is stalling while it picks which of your instructions to quietly ignore.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside 1..200 characters`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
