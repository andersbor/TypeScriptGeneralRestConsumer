import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://anbo-bookstorerest.azurewebsites.net/api/books";

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

axios.get(uri)
    .then(function (response: AxiosResponse): void {
        element.innerHTML = JSON.stringify(response.data);
    })
    .catch(function (error: AxiosError): void {
        element.innerHTML = error.message;
    });