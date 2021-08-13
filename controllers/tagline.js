const tagLineRouter = require("express").Router();
const Tagline = require("../models/tagline");

const initTagLines = async () => {
  const currentTaglines = await Tagline.find({});
  for await (const cur of currentTaglines) {
    cur.delete();
  }

  for (
    const tagline of [
      "For your thunder down under",
      "Guard the crown jewels",
      "For your national treasure",
      "A luxury condo for your privates",
      "If you are here, you may be gay",
      "Protect and serve your genitals",
      "Contain your thunder in style",
      "A stylish shape for your bits",
      "One person's junk is another's treasure",
    ]
  ) {
    const newTagLine = new Tagline({
      text: tagline,
    });
    await newTagLine.save();
  }
};

tagLineRouter.get("/", async (_, res) => {
  await initTagLines();
  const taglines = await Tagline.find({});
  res.json(taglines);
});

module.exports = tagLineRouter;
