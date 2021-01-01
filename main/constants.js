const { Scale, Note: { enharmonic } } = require("@tonaljs/tonal");

const FUNDAMENTAL = "C";
const CHROMATIC_DATUM = Scale.get(`${FUNDAMENTAL} chromatic`);
const CHROMATIC_SCALE = CHROMATIC_DATUM["notes"].map(n => enharmonic(n))
const ALL_INTERVALS = CHROMATIC_DATUM["intervals"];

module.exports = {
    FUNDAMENTAL,
    CHROMATIC_DATUM,
    CHROMATIC_SCALE,
    ALL_INTERVALS
}