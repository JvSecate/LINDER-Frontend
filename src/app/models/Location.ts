import {CityModel} from "./City";

export interface LocationModel {
    id: number;
    name: string;
    city: string;
    state: string;
    country: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}
