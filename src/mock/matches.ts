import {Match} from "@domain/entities/Match"
import { teams } from "./teams"
import { Stadium } from "@domain/entities/Stadium"
import { stadium } from "./stadium"

export const matches:Match[] = [
    new Match(
        1,
        teams[0],
        teams[1],
        2,
        1,
        null,null,
        null,null,
        stadium[0],
        "finished",
        "group",
        new Date("2026-06-11")
    ),

    new Match(
        2,
        teams[3],
        teams[2],
        5,
        2,
        null,null,
        null,null,
        stadium[1],
        "finished",
        "group",
        new Date("2026-04-24")

    ),

    new Match(
        3,
        teams[4],
        teams[5],
        0,
        0,
        null,null,
        null,null,
        stadium[2],
        "cancelled",
        "group",
        new Date("2026-01-18")



    )


];