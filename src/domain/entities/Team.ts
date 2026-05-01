import { FifaCode } from "../Value-objects/FifaCode";
import {Country} from "./Country";

export class Team {
    public name:string;
    public country:Country;
    public code:FifaCode;
    constructor(name:string,country:Country,code:FifaCode){
        this.name=name
        this.country=country
        this.code= code;
    }


   
    
}