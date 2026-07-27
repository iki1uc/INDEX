export const RESPO_INDEX = {
    ALL: {},
    ORG: {},
    LOL: {},
    PIPE: [],
    META: {},
    LOAD: {},

    async init() {
        const mega = await import("./MEGA_INDEX.js");

        this.ALL  = mega.MEGA.ALL;
        this.ORG  = mega.MEGA.ORG;
        this.LOL  = mega.MEGA.LOL;
        this.PIPE = mega.MEGA.PIPE;
        this.META = mega.MEGA.META;
        this.LOAD = mega.MEGA.LOAD;
    }
};
