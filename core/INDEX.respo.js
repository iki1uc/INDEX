export const INDEX_RESPO = {

    // 380 Karos erzeugen
    build(){
        const karo = [];

        for(let i=0; i<380; i++){
            karo.push({
                id: i,

                // Qi / IQQ aus VECTOR
                qi: VECTOR.qi(i % 9, Math.floor(i / 9)),
                iqq: VECTOR.iqq(i % 9, Math.floor(i / 9)),

                // Gamma aus GAM
                gamma: GAM.gamma(),

                // Platzhalter für Score
                score: 0
            });
        }

        return karo;
    }
};

window.INDEX_RESPO = INDEX_RESPO;
