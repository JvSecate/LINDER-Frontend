import {CompanyModel} from "./Company";
import {SkillModel} from "./Skill";
import {JobCategoryModel} from "./JobCategory";

export interface JobModel {
    id: number;
    title: string;
    description: string; // 4096
    salary: number;
    company: CompanyModel;
    new?: boolean;
    remote?: boolean;
    fullTime?: boolean;
    partTime?: boolean;
    featured?: boolean;
    skills: SkillModel[];
    active: boolean;
    categories: JobCategoryModel[];
    createdAt: string;
    updatedAt: string;
}



