import {LocationModel} from "./Location";

export interface CompanyModel {
    id: number;
    name: string;
    logo: string;
    website: string;
    email: string;
    description: string;
    location: LocationModel;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}
