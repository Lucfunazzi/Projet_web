import {countries} from "./countries"
import {City} from "@domain/entities/City"
const usa=countries[0];
const mexico=countries[1];
const canada=countries[2];
const japon=countries[3];
const coree_du_sud=countries[4];
const bresil=countries[5];

export const cities: City[]=[
    new City(usa,"Atlanta"),
    
    new City(mexico,"Guadalajara"),
    
    new City(canada,"Vancouver"),
    
    new City(japon,"Tokyo"),
    
    new City(coree_du_sud,"Seoul"),

    new City(bresil,"Rio de Janeiro")
];