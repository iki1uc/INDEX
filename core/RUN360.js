import { RUN12 } from "./core/RUN360.js";

const cluster = RUN12(full.index);

document.getElementById("clusterTree").innerText =
    Object.entries(cluster).map(([k,v]) =>
        `Cluster ${k} → ${v.length} Elemente`
    ).join("\n");
