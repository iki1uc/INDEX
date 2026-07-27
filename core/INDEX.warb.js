import { warbChess } from "../../WARB/M/warb.chess.js";
import { warbColor } from "../../WARB/M/warb.depth.js";

export function INDEX_WARB_INTEGRATION(respo, warb){
    return respo.map((item, i) => {
        const T = warb[i]?.T || "T1";
        const fig = warbChess(T);
        const col = warbColor(T);

        return {
            ...item,
            warb: { T, fig, col }
        };
    });
}
