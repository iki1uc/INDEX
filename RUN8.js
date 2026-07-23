class RUN8 {

    start(){
        const karo = INDEX_RESPO.build();
        INDEX_RENDER.render(karo);

        const best = VECTOR_OPTIMIZER.optimize(karo);

        const ring27 = VECTOR.build27(VECTOR_RESPO.map);
        const ring81 = VECTOR81.build();

        VECTOR_RENDER.render27(ring27);
        VECTOR_RENDER.render81(ring81);

        return {
            karo,
            best,
            ring27,
            ring81
        };
    }
}

window.RUN8 = new RUN8();
