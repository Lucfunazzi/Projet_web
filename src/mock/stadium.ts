import { Stadium } from "@domain/entities/Stadium";
import { cities } from "./cities";

const Atlanta=cities[0];
const Guadalajara=cities[1];
const Vancouver=cities[2];

export const stadium:Stadium[] =[
    new Stadium("Mercedes-Benz Stadium",Atlanta,67382),
    new Stadium("Estadio Akron",Guadalajara,44330),
    new Stadium("Vancouver BC Place",Vancouver,54000)
    
];
