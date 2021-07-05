const countriesRouter = require("express").Router()
const StreamArray = require("stream-json/streamers/StreamArray")
const fs = require("fs")

const countriesDB = new Map()
const countriesOnly = new Set()
const jsonStream = StreamArray.withParser()

fs.createReadStream("countries.json").pipe(jsonStream.input)
jsonStream.on("data", ({ value }) => {
    countriesOnly.add(value.name)
    countriesDB.set(value.name, {
        states: value.states,
    })
})

jsonStream.on("end", () => {
    console.log("All done")
})

countriesRouter.get("/", async (_, res) => {
    const reply = {
        ['Canada']: countriesDB.get('Canada'),
        ['United States']: countriesDB.get('United States')
    }

    for (const country of Object.keys(reply)) {
        for (const state of reply[country].states) {
            delete state.cities
        }
    }
    return res.json(reply)
})

countriesRouter.get("/:country", async (req, res) => {
    const country = countriesDB.get(req.params.country)
    if (!country)
        return res.status(400).json({ error: `Unknown Country ${req.params.country}` })
    return res.json(country)
})

module.exports = {
    countriesRouter,
    countriesDB,
}
