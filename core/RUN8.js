/* ============================================================
   RUN 8 – Systemstart für WARB, KANAL, TRANS, INDEX, CHESS81
   ============================================================ */

import { WARB_MASTER } from "../../WARB/M/warb.master.js";
import { buildWARBMatrix9 } from "../../WARB/M/warb.matrix.js";
import { INDEX_WARB_INTEGRATION } from "./INDEX.warb.js";

import { KANAL_MASTER } from "../../KANAL/M/kanal.master.js";
import { TRANS_MASTER } from "../../TRANS/M/trans.master.js";

import { CHESS81_BUILD } from "../../CHESS81/M/chess.build.js";
import { MATRIX81_BUILD } from "../../MATRIX81/M/matrix.build.js";

import { INDEX_PORTAL } from "./i.room";

/* ---------------------------------------------------------
   RUN 8 – Hauptfunktion
--------------------------------------------------------- */

export async function RUN8(){

    /* 1. WARB Tiefe laden */
    const warb = await WARB_MASTER();

    /* 2. KANAL Breite laden */
    const kanal = await KANAL_MASTER();

    /* 3. TRANS Höhe laden */
    const trans = await TRANS_MASTER();

    /* 4. CHESS81 erzeugen */
    const chess = CHESS81_BUILD(warb, kanal, trans);

    /* 5. MATRIX81 erzeugen */
    const matrix = MATRIX81_BUILD(chess);

    /* 6. INDEX laden */
    const respo = window.RESPO_INDEX?.ALL || [];

    /* 7. WARB in INDEX integrieren */
    const indexMerged = INDEX_WARB_INTEGRATION(respo, warb);

    /* 8. PORTAL / Hyperraum aktivieren */
    const portalJump = INDEX_PORTAL.jump(indexMerged);

    /* -----------------------------------------------------
       Ausgabe
    ----------------------------------------------------- */

    return {
        warb,
        kanal,
        trans,
        chess,
        matrix,
        index: indexMerged,
        portal: portalJump
    };
}

/* ---------------------------------------------------------
   Global verfügbar machen
--------------------------------------------------------- */

window.RUN8 = RUN8;
