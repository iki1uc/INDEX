[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■] 0.88
[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□] 0.74
[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□] 0.61
import { ECO } from "./core/RUN360.js";

document.getElementById("ecoBar").innerText =
    full.index.slice(0,40).map(cell => {
        const eco = ECO(cell);
        const bar = "■".repeat(Math.floor(eco*50)) + "□".repeat(50-Math.floor(eco*50));
        return `${cell.id} | ${bar} ${eco}`;
    }).join("\n");
