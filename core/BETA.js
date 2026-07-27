arc: ascend / base
role: 0–4
mood: bright / shadow
import { IDENTITY } from "./core/RUN360.js";

document.getElementById("identityMatrix").innerText =
    full.index.slice(0,40).map(cell => {
        const id = IDENTITY(cell);
        return `${cell.id} | arc:${id.arc} | role:${id.role} | mood:${id.mood}`;
    }).join("\n");
