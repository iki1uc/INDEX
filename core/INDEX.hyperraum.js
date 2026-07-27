class INDEX_HYPERRAUM {

    constructor(){
        this.layer = [];
        this.portalLayer = [];
        this.zoomLayer = [];
        this.roomLayer = [];
    }

    buildBase(){
        this.layer = INDEX_RESPO.build();
        return this.layer;
    }

    applyPortals(){
        this.portalLayer = INDEX_PORTAL.jump(this.layer);
        return this.portalLayer;
    }

    buildZoom(){
        this.zoomLayer = MEGA_INDEX_ZOOM.buildZoom(this.portalLayer);
        return this.zoomLayer;
    }

    buildRoom(best){
        ALL12.build9x9(best);
        this.roomLayer = ALL12.room9x9;
        return this.roomLayer;
    }

    start(){
        const base = this.buildBase();
        const portal = this.applyPortals();
        const zoom = this.buildZoom();
        const best = MEGA_INDEX.start();
        const room = this.buildRoom(best);

        return { base, portal, zoom, room, best };
    }
}

window.INDEX_HYPERRAUM = new INDEX_HYPERRAUM();
