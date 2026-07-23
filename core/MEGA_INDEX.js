class MEGA_INDEX {

    constructor(){
        this.karo = [];
        this.history = [];
    }

    // 380 Karos laden
    loadKaro(){
        this.karo = INDEX_RESPO.build();
        return this.karo;
    }

    // Move bestimmen
    computeMove(){
        const best = VECTOR_OPTIMIZER.optimize(this.karo);

        // Move speichern
        this.history.push({
            id: best.id,
            score: best.score.total,
            raum: best.raum.type,
            markt: best.markt.boerse,
            time: Date.now()
        });

        ALL.lastMove = best.id;
        ALL.lastScore = best.score.total;
        ALL.lastRaum = best.raum.type;
        ALL.lastMarkt = best.markt.boerse;

        ALL_MONITOR.update();

        return best;
    }

    // Move‑Animation
    animateMove(best){
        const out = document.getElementById("move_anim");
        if(!out) return;

        out.innerHTML = "";
        const div = document.createElement("div");

        div.style.width = "200px";
        div.style.height = "200px";
        div.style.border = "3px solid #0f0";
        div.style.animation = "pulse 1s infinite";
        div.style.textAlign = "center";
        div.style.paddingTop = "80px";
        div.style.fontSize = "20px";

        div.innerText = best.id;

        out.appendChild(div);
    }

    // Move‑History anzeigen
    renderHistory(){
        const out = document.getElementById("move_history");
        if(!out) return;

        out.innerHTML = this.history
            .slice(-20)
            .map(h => `${h.id} | Score ${h.score} | ${h.raum} | ${h.markt}`)
            .join("\n");
    }

    // MEGA INDEX starten
    start(){
        this.loadKaro();
        const best = this.computeMove();
        this.animateMove(best);
        this.renderHistory();
        return best;
    }
}

window.MEGA_INDEX = new MEGA_INDEX();
