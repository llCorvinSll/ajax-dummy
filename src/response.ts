

export interface IResponse {
    status: number;
    statusTest: string;
    contentType: string;

    responseText?: string;
    responseType: string;
    responseURL?: string;
    response?: Object;
}