import { Team } from "@domain/entities/Team";
import { FifaCode } from "@domain/Value-objects/FifaCode";
import {countries} from "./countries"

const usa=countries[0];
const mexico=countries[1];
const canada=countries[2];
const japon=countries[3];
const coree_du_sud=countries[4];
const bresil=countries[5];

export const teams: Team[] = [
    new Team("USA",usa,new FifaCode("USA")),
    new Team("Mexico",mexico,new FifaCode("MEX")),
    new Team("Canada",canada,new FifaCode("CAN")),
    new Team("Japon",japon,new FifaCode("JPN")),
    new Team("Corée du Sud",coree_du_sud,new FifaCode("KOR")),
    new Team("Brésil",bresil,new FifaCode("BRA"))
];