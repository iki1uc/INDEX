<h2>Matrix Qi (9×9)</h2>
<pre id="matrixQi"></pre>

<h2>Matrix IQQ (9×9)</h2>
<pre id="matrixIqq"></pre>

<h2>Matrix Gamma (9×9)</h2>
<pre id="matrixGamma"></pre>
function buildMatrixQi(list){
    const m = [];
    for(let r=0; r<9; r++){
        const row = [];
        for(let c=0; c<9; c++){
            const index = r*9 + c;
            if(index < list.length){
                row.push(list[index].axe.qi);
            } else {
                row.push("----");
            }
        }
        m.push(row);
    }
    return m;
}

function buildMatrixIqq(list){
    const m = [];
    for(let r=0; r<9; r++){
        const row = [];
        for(let c=0; c<9; c++){
            const index = r*9 + c;
            if(index < list.length){
                row.push(list[index].axe.iqq);
            } else {
                row.push("----");
            }
        }
        m.push(row);
    }
    return m;
}

function buildMatrixGamma(list){
    const m = [];
    for(let r=0; r<9; r++){
        const row = [];
        for(let c=0; c<9; c++){
            const index = r*9 + c;
            if(index < list.length){
                row.push(list[index].axe.gamma.toFixed(3));
            } else {
                row.push("----");
            }
        }
        m.push(row);
    }
    return m;
}
document.getElementById("matrixQi").innerText =
    JSON.stringify(buildMatrixQi(RESPO_INDEX.ALL), null, 2);

document.getElementById("matrixIqq").innerText =
    JSON.stringify(buildMatrixIqq(RESPO_INDEX.ALL), null, 2);

document.getElementById("matrixGamma").innerText =
    JSON.stringify(buildMatrixGamma(RESPO_INDEX.ALL), null, 2);
RESPO_INDEX.ALL[x].axe.qi
RESPO_INDEX.ALL[x].axe.iqq
RESPO_INDEX.ALL[x].axe.gamma
1
