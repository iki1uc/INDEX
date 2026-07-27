import { RUN9 } from "./core/RUN360.js";

const portal = RUN9(full.index);

document.getElementById("portalMap").innerText =
    portal.slice(0,40).map(p =>
        `${p.id} | Portal ${p.portal} | Warp ${p.warp} | Jump ${p.jump}`
    ).join("\n");
