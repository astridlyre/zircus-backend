const invRouter = require("express").Router();
const { hasValidToken, isValidType } = require("../utils/middleware");
const Underwear = require("../models/underwear");

async function initDB(inv) {
  const getDesc = (pf) => {
    if (pf === "pf") {
      return `Pouch front briefs, with a bit more space to hold what you're packing in style. Each pair has a 1.25" wide white-on-black Zircus waistband, black elastic trim, and 95% cotton 5% spandex fabric that is Oeko-Tex Certified`;
    }
    if (pf === "ff") {
      return `Flat-front briefs, with the close and comfortable fit you've been looking for. Each pair has a 1.25" wide white-on-black Zircus waistband, black elastic trim, and 95% cotton 5% spandex fabric that is Oeko-Tex Certified`;
    } else {
      return `Our compression front briefs offer a layer of power-net, in-between 2 layers of stretch cotton fabric: the comfort of cotton and the hold of power-net all in one. With an extra wide (nearly 5" wide at the smallest point) style, your thunder will be safely contained! The end result is a flat look, perfect for smoothing things over. Each pair has a 1.25" wide white-on-black Zircus waistband, black elastic trim, and 95% cotton 5% spandex fabric that is Oeko-Tex Certified`;
    }
  };

  for await (const item of inv) {
    await item.delete();
  }
  const validTypes = [];
  for (const type of ["ff", "pf", "cf"]) {
    for (const color of ["yellow", "purple", "teal", "black", "stripe"]) {
      for (
        const size of [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
        ]
      ) {
        validTypes.push(`${type}-${color}-${size}`);
      }
    }
  }

  for await (const type of validTypes) {
    const [prefix, color, size] = type.split("-");
    const newItem = new Underwear({
      type,
      name: {
        en: prefix === "ff"
          ? "Flat front briefs"
          : prefix === "pf"
          ? "Pouch front briefs"
          : "Compression front briefs",
        fr: prefix === "ff" ? "Culottes avant-plates" : prefix === "pf"
          ? "Culottes avant-poche"
          : "Culottes avant de compression",
      },
      prefix,
      tagLine: prefix === "pf"
        ? "a little extra space in the front"
        : prefix === "cf"
        ? "a smooth, compressed fit in the front"
        : "close & comfortable",
      color,
      size,
      active: true,
      price: prefix === "cf" ? 38 : 30,
      quantity: 8,
      images: {
        sm_a: `/assets/img/products/masked/${prefix}-${color}-a-400.png`,
        sm_b: `/assets/img/products/masked/${prefix}-${color}-b-400.png`,
        lg_a: `/assets/img/products/masked/${prefix}-${color}-a-1920.jpg`,
        lg_b: `/assets/img/products/masked/${prefix}-${color}-b-1920.jpg`,
      },
      description: getDesc(prefix),
    });
    try {
      await newItem.save();
    } catch (e) {
      console.error(e.message);
    }
  }
}

invRouter.get("/", async (req, res) => {
  const inv = await Underwear.find({});
  if (inv.length <= 0) {
    return res.status(404).json({ error: "No items found" });
  }

  const reply = {};
  for (const item of inv) {
    if (!reply.hasOwnProperty(item.prefix)) reply[item.prefix] = [];
    reply[item.prefix].push(item);
  }

  // initDB(inv)
  return res.json(reply);
});

invRouter.get("/:type", async (req, res) => {
  if (!isValidType(req.params.type)) {
    return res
      .status(400)
      .json({ error: `Invalid type ${req.params.type}` });
  }

  const foundItem = await Underwear.findOne({ type: req.params.type });

  return foundItem
    ? res.json(foundItem)
    : res.status(404).json({ error: "Not found" });
});

invRouter.post("/", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  if (!isValidType(req.body.type)) {
    return res.status(400).json({ error: `Invalid type ${req.body.type}` });
  }

  const [prefix, color, size] = req.body.type.split("-");
  const newItem = new Underwear({
    type: req.body.type,
    quantity: Number(req.body.quantity),
    price: Number(req.body.price),
    name: prefix === "ff"
      ? "Flat front briefs"
      : prefix === "pf"
      ? "Pouch front briefs"
      : "Compression front briefs",
    prefix,
    color,
    size,
    images: [
      `/assets/img/products/masked/${prefix}-${color}-a-400.png`,
      `/assets/img/products/masked/${prefix}-${color}-b-400.png`,
      `/assets/img/products/masked/${prefix}-${color}-a-1920.png`,
      `/assets/img/products/masked/${prefix}-${color}-b-1920.png`,
    ],
  });

  try {
    const savedEntry = await newItem.save();
    res.status(201).json(savedEntry);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

invRouter.put("/", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  if (!isValidType(req.body.type)) {
    return res.status(400).json({ error: `Invalid type ${req.body.type}` });
  }

  // Requires a json object { type: req.body.type, updatedAttributes: { ... } }
  await Underwear.findOneAndUpdate(
    { type: req.body.type },
    {
      quantity: req.body.quantity,
      price: req.body.price,
      active: req.body.active,
    },
    { new: true },
    (err, doc) => {
      if (err) res.status(500).json({ error: e.message });
      res.json(doc);
    },
  );
});

invRouter.delete("/:type", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  if (!isValidType(req.body.type)) {
    return res
      .status(400)
      .json({ error: `Invalid type ${req.params.type}` });
  }

  await Underwear.findOneAndDelete({ type: req.params.type }, (err) => {
    if (err) res.status(500).json({ error: e.message });
    res.json({ response: "Item deleted" });
  });
});

module.exports = invRouter;
