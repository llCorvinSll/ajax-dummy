

export default class RequestTracker {

    public at(i: number) {
        return this.cache[i];
    }

    public mostRecent() {
        return this.cache[this.cache.length - 1];
    }
    
    private cache: any[] = [];
}