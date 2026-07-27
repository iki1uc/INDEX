<h2>Matrix 81 (9×9)</h2>
<pre id="matrix81"></pre>

<h2>Matrix 410</h2>
<pre id="matrix410"></pre>
function buildMatrix81(list){
    const m = [];
    for(let r=0; r<9; r++){
        const row = [];
        for(let c=0; c<9; c++){
            const index = r*9 + c;
            if(index < list.length){
                row.push(list[index].id + ":" + list[index].tmp);
            } else {
                row.push("----");
            }
        }
        m.push(row);
    }
    return m;
}

function buildMatrix410(list){
    const m = [];
    let row = [];

    list.forEach((item, i)=>{
        row.push(item.id + ":" + item.tmp);
        if(row.length === 10){
            m.push(row);
            row = [];
        }
    });

    if(row.length > 0) m.push(row);

    return m;
}
updateStatus(RESPO_INDEX.ALL.length);
document.getElementById("matrix81").innerText =
    JSON.stringify(buildMatrix81(RESPO_INDEX.ALL), null, 2);

document.getElementById("matrix410").innerText =
    JSON.stringify(buildMatrix410(RESPO_INDEX.ALL), null, 2);
0:TMP-1234   1:TMP-9981   2:TMP-4411   ... 8:TMP-5521
9:TMP-8821   10:TMP-1122  11:TMP-9911  ... 17:TMP-7711
...
72:TMP-5511  73:TMP-9921  ... 80:TMP-3311
0:TMP-1234  1:TMP-9981  2:TMP-4411  ... 9:TMP-5511
10:TMP-8821 11:TMP-1122 ... 19:TMP-7711
...
400:TMP-9911 ... 409:TMP-2211
<h2>Matrix 81 (9×9)</h2>
<pre id="matrix81"></pre>

<h2>Matrix 410</h2>
<pre id="matrix410"></pre>
function buildMatrix81(list){
    const m = [];
    for(let r=0; r<9; r++){
        const row = [];
        for(let c=0; c<9; c++){
            const index = r*9 + c;
            if(index < list.length){
                row.push(list[index].id + ":" + list[index].tmp);
            } else {
                row.push("----");
            }
        }
        m.push(row);
    }
    return m;
}

function buildMatrix410(list){
    const m = [];
    let row = [];

    list.forEach((item, i)=>{
        row.push(item.id + ":" + item.tmp);
        if(row.length === 10){
            m.push(row);
            row = [];
        }
    });

    if(row.length > 0) m.push(row);

    return m;
}

document.getElementById("matrix81").innerText =
    JSON.stringify(buildMatrix81(RESPO_INDEX.ALL), null, 2);

document.getElementById("matrix410").innerText =
    JSON.stringify(buildMatrix410(RESPO_INDEX.ALL), null, 2);
