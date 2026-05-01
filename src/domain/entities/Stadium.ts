import {City} from "./City";
import {error} from "node:console";

export class Stadium{
    public name:string;
    public city:City;
    public capacity: number;
    constructor(name:string,city:City,capacity:number){
        if(capacity <= 0){
            throw new Error("La capacité doit etre au dessus de 0 ")
        }
        this.name=name;
        this.city=city;
        this.capacity=capacity;

    }
}