function chessRole(qi, iqq, gamma){
    const score = qi + iqq + gamma;

    // Schachfigur bestimmen
    if(score > 1.8) return "♔"; // König
    if(score > 1.5) return "♕"; // Dame
    if(score > 1.2) return "♖"; // Turm
    if(score > 0.9) return "♗"; // Läufer
    if(score > 0.6) return "♘"; // Springer
    return "♙";                 // Bauer
}
function chessColor(gamma){
    if(gamma > 0.7) return "green";
    if(gamma > 0.3) return "yellow";
    return "red";
}
function promotePawn(role, gamma){
    if(role !== "♙") return role;

    if(gamma > 0.75) return "♘"; // Bauer → Springer
    if(gamma > 0.85) return "♗"; // Bauer → Läufer
    if(gamma > 0.95) return "♖"; // Bauer → Turm
    if(gamma > 1.05) return "♕"; // Bauer → Dame

    return "♙";
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

                let role = chessRole(qi, iqq, gam);
                role = promotePawn(role, gam);

                const color = chessColor(gam);

                row.push(role + ":" + color);
            } else {
                row.push("-");
            }
        }

        m.push(row);
    }

    return m;
}
<h2>Matrix CHESS81 (Master‑Brain)</h2>
<pre id="matrixChess81"></pre>
document.getElementById("matrixChess81").innerText =
    JSON.stringify(buildMatrixChess81(RESPO_INDEX.ALL), null, 2);
♕:green  ♘:yellow  ♙:red  ♗:green  ♖:yellow  ♙:red  ♔:green  ♘:yellow  ♙:red
♙:red    ♗:yellow  ♘:yellow  ♙:red  ♕:green  ♖:yellow  ♙:red  ♘:yellow  ♙:red
...
♘:yellow ♙:red    ♖:yellow  ♕:green  ♙:red  ♗:yellow  ♙:red  ♘:yellow  ♔:green
