import {IResponse} from "./response"

export default class FakeRequest implements XMLHttpRequest {
    msCaching:string;
    onreadystatechange:(ev:ProgressEvent)=>any;
    readyState:number;
    response:any;
    responseBody:any;
    responseText:string;
    responseType:string;
    responseXML:any;
    status:number;
    statusText:string;
    timeout:number;
    upload:XMLHttpRequestUpload;
    withCredentials:boolean;
    DONE:number;
    HEADERS_RECEIVED:number;
    LOADING:number;
    OPENED:number;
    UNSENT:number;
    onabort:(ev:Event)=>any;
    onerror:(ev:Event)=>any;
    onload:(ev:Event)=>any;
    onloadend:(ev:ProgressEvent)=>any;
    onloadstart:(ev:Event)=>any;
    onprogress:(ev:ProgressEvent)=>any;
    ontimeout:(ev:ProgressEvent)=>any;

    abort():void {
    }

    getAllResponseHeaders():string {
        return undefined;
    }

    getResponseHeader(header:string):string {
        return undefined;
    }

    msCachingEnabled():boolean {
        return undefined;
    }

    open(method:string, url:string, async?:boolean, user?:string, password?:string):void {
    }

    overrideMimeType(mime:string):void {
    }

    send(data?:Document):void {
    }

    send(data?:string):void {
    }

    send(data?:any):void {
    }

    setRequestHeader(header:string, value:string):void {
    }

    addEventListener(type, listener:(ev:Event)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:ErrorEvent)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:Event)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:ProgressEvent)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:Event)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:ProgressEvent)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:ProgressEvent)=>any, useCapture?:boolean):void {
    }

    addEventListener(type, listener:(ev:ProgressEvent)=>any, useCapture?:boolean):void {
    }

    addEventListener(type:string, listener:EventListenerOrEventListenerObject, useCapture?:boolean):void {
    }

    dispatchEvent(evt:Event):boolean {
        return undefined;
    }

    removeEventListener(type:string, listener:EventListenerOrEventListenerObject, useCapture?:boolean):void {
    }

    public respondWith(response: IResponse){
        
    }

}