class VECTOR_OPTIMIZER {

    optimize(karo){
        let best = null;
        let bestScore = -999;

        karo.forEach(cell=>{
            const score = cell.score.total;
            if(score > bestScore){
                bestScore = score;
                best = cell;
            }
        });

        ALL.lastMove = best.id;
        ALL.lastScore = bestScore;
        ALL.lastRaum = best.raum.type;
        ALL.lastMarkt = best.markt.boerse;

        ALL_MONITOR.update();

        return best;
    }
}

window.VECTOR_OPTIMIZER = new VECTOR_OPTIMIZER();
