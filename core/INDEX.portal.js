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

            return {
                ...cell,
                portal,
                newIndex
            };
        });
    }
}

window.INDEX_PORTAL = new INDEX_PORTAL();
