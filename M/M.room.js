function chessRole(qi, iqq, gamma){
    const score = qi + iqq + gamma;

    if(score > 1.8) return "♔"; // König
    if(score > 1.5) return "♕"; // Dame
    if(score > 1.2) return "♖"; // Turm
    if(score > 0.9) return "♗"; // Läufer
    if(score > 0.6) return "♘"; // Springer
    return "♙";                 // Bauer
}
function buildMatrixChess81(list){
    const m = [];

    for(let r=0; r<9; r++){
        const row = [];

        for(let c=0; c<9; c++){
            const index = r*9 + c;

            if(index < list.length){
                const qi   = list[index].axe.qi;
                const iqq  = list[index].axe.iqq;
                const gam  = list[index].axe.gamma;

                const role = chessRole(qi, iqq, gam);

                row.push(role);
            } else {
                row.push("-");
            }
        }

        m.push(row);
    }

    return m;
}
<h2>Matrix CHESS81 (Schach‑Logik)</h2>
<pre id="matrixChess81"></pre>
document.getElementById("matrixChess81").innerText =
    JSON.stringify(buildMatrixChess81(RESPO_INDEX.ALL), null, 2);
♕ ♘ ♙ ♗ ♖ ♙ ♔ ♘ ♙
♙ ♗ ♘ ♙ ♕ ♖ ♙ ♘ ♙
♖ ♙ ♗ ♘ ♙ ♕ ♙ ♗ ♘
...
♘ ♙ ♖ ♕ ♙ ♗ ♙ ♘ ♔
