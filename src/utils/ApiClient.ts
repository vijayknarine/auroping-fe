import axios, {AxiosInstance} from 'axios'
import {Endpoint, EndpointRaw} from "../types/Endpoints.type";

export class ApiClient{

    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:8080'
        })
    }

    public getEndpoint(id: number){
        return this.axios.get<Endpoint>(`/endpoints/${id}`)
    }

    public getMonitors(){
        return this.axios.get<Endpoint[]>(`/endpoints`)
    }

    public createEndpoint(endpoint: EndpointRaw){
        return this.axios.post(`/endpoints`, endpoint);
    }
}


export const apiclient = new ApiClient()