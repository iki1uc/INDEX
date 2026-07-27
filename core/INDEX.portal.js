class INDEX_PORTAL {

    jump(karo){
        return karo.map((cell, i)=>{

            const portal =
                i % 4 === 0 ? "A" :
                i % 4 === 1 ? "B" :
                i % 4 === 2 ? "C" :
                "D";

            let newIndex = i;

            if(portal === "A") newIndex = i + 20;
            if(portal === "B") newIndex = i - 15;
            if(portal === "C") newIndex = (i * GAM.gamma()) % 380;
            if(portal === "D") newIndex = (i % 9) * 9 + (i % 9);

            newIndex = Math.abs(newIndex % 380);

            const cube = VECTOR_CUBEMIND.evaluate(cell.id);

            return {
                ...cell,
                portal,
                newIndex,
                hyperraum: {
                    warp: newIndex,
                    gamma: GAM.gamma(),
                    cubeMind: cube,
                    qi: cube.qi,
                    iqq: cube.iqq,
                    octa: cube.octa,
                    score: cube.score.total,
                    raum: cube.raum.type,
                    markt: cube.markt.boerse
                }
            };
        });
    }
}

window.INDEX_PORTAL = new INDEX_PORTAL();
