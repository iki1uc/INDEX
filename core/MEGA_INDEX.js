class MEGA_INDEX {

    constructor(){
        this.karo = [];
        this.history = [];
    }

    loadKaro(){
        this.karo = INDEX_RESPO.build();
        return this.karo;
    }

    computeMove(){
        const best = VECTOR_OPTIMIZER.optimize(this.karo);

        this.history.push({
            id: best.id,
            score: best.score.total,
            raum: best.raum.type,
            markt: best.markt.boerse,
            gamma: GAM.gamma(),
            time: Date.now()
        });

        ALL_MONITOR.update(best);
        return best;
    }

    animateMove(best){
        const out = document.getElementById("move_anim");
        if(!out) return;

        out.innerHTML = `
            <div class="cube spin">
                <div class="face front">${best.id}</div>
                <div class="face back">${best.id}</div>
                <div class="face left">${best.id}</div>
                <div class="face right">${best.id}</div>
                <div class="face top">${best.id}</div>
                <div class="face bottom">${best.id}</div>
            </div>
        `;
    }

    renderHistory(){
        const out = document.getElementById("move_history");
        if(!out) return;

        out.innerHTML = this.history
            .slice(-20)
            .map(h => `${h.id} | Score ${h.score} | γ∞=${h.gamma}`)
            .join("\n");
    }

    start(){
        this.loadKaro();
        const best = this.computeMove();
        this.animateMove(best);
        this.renderHistory();
        ALL12.receive(best);
        return best;
    }
}

window.MEGA_INDEX = new MEGA_INDEX();
