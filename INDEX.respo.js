export const RESPO_INDEX = {

    // 1. Vollständige Liste aller Systeme
    ALL: {
        100: "RAW",
        200: "IMPORT",
        300: "WARB",
        400: "TECH",
        500: "TRANS",
        600: "KANAL",
        700: "FIT",
        800: "FIX",
        900: "FIN"
    },

    // 2. Organisierte Gruppen
    ORG: {
        core: ["RAW", "IMPORT", "WARB"],
        processing: ["TECH", "TRANS"],
        routing: ["KANAL"],
        adjust: ["FIT"],
        repair: ["FIX"],
        final: ["FIN"]
    },

    // 3. Debug / LOL
    LOL: {
        debug: ["RAW", "IMPORT", "WARB", "TECH"],
        trace: ["TRANS", "KANAL"],
        check: ["FIT", "FIX", "FIN"]
    },

    // 4. Pipeline
    PIPE: [
        "RAW",
        "IMPORT",
        "WARB",
        "TECH",
        "TRANS",
        "KANAL",
        "FIT",
        "FIX",
        "FIN"
    ],

    // 5. Loader
    async load(id) {
        const folder = this.ALL[id];
        return import(`../${folder}/index.js`);
    }
};
