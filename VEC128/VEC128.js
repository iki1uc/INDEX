<h2>Matrix 128</h2>
<pre id="matrix128"></pre>
function buildMatrix128(list){
    const m = [];
    let row = [];

    list.slice(0,128).forEach((item, i)=>{
        row.push(item.id + ":" + item.tmp);

        if(row.length === 8){   // 128 / 8 = 16 Reihen
            m.push(row);
            row = [];
        }
    });

    if(row.length > 0) m.push(row);

    return m;
}
document.getElementById("matrix128").innerText =
    JSON.stringify(buildMatrix128(RESPO_INDEX.ALL), null, 2);
0:TMP-1234   1:TMP-9981   2:TMP-4411   ... 7:TMP-5521
8:TMP-8821   9:TMP-1122   ... 15:TMP-7711
...
120:TMP-5511 ... 127:TMP-3311
