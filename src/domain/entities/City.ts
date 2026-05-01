import { error } from "node:console";
import { Country } from "./Country";

export class City {
    public country:Country;
    public name: string;
    constructor(country:Country,name:string){
        if(name === Country.name){
            throw new Error("Ne peux pas être le même non que le pays");
    }
     this.country=country;
     this.name = name;
 }
}