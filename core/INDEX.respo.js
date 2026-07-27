export const INDEX_RESPO = {

    build(){
        const karo = [];

        for(let i=0; i<380; i++){
            const r = i % 9;
            const c = Math.floor(i / 9);

            karo.push({
                id: i,
                qi: VECTOR.qi(r, c),
                iqq: VECTOR.iqq(r, c),
                gamma: GAM.gamma(),
                cube: VECTOR_CUBEMIND.evaluate(i),
                score: 0
            });
        }

        return karo;
    }
};

window.INDEX_RESPO = INDEX_RESPO;
