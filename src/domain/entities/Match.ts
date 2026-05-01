import { Country } from "./Country";
import { MatchStage, MatchStatus } from "./MatchEnums";
import { Stadium } from "./Stadium";
import { Team } from "./Team";

export class Match{
    public id:number;
    public homeTeam:Team;
    public awayTeam:Team;
    public homeScore:number =0;
    public awayScore:number =0; 
    public homeScoreExtraTime:number | null;
    public awayScoreExtraTime:number | null;
    public homeScoreShootOut:number | null;
    public awayScoreShootOut:number |null;
    public stadium:Stadium;
    public status:MatchStatus;
    public stage:MatchStage;
    public date: Date; 

    constructor(id:number,homeTeam:Team,awayTeam:Team,homeScore:number = 0,awayScore:number = 0,homeScoreExtraTime:number | null,awayScoreExtraTime:number| null,
        homeScoreShootOut:number |null,awayScoreShootOut:number |null,stadium:Stadium,status:MatchStatus,stage:MatchStage,date:Date
    ){
        if(id <= 0){
            throw new Error("L'id doit être supérieur à 0")
        }
        if(homeTeam.name === awayTeam.name){
            throw new Error("L'équipe ne peux pas s'affronter elle même")
        }
        if(homeScore < 0){
            throw new Error("Le score ne peux pas être négatif")
        }
        if(awayScore < 0){
            throw new Error("Le score ne peux pas être négatif")
        }
        this.id=id;
        this.homeTeam=homeTeam;
        this.awayTeam=awayTeam;
        this.homeScore=homeScore;
        this.awayScore=awayScore;
        this.homeScoreExtraTime=homeScoreExtraTime;
        this.awayScoreExtraTime=awayScoreExtraTime;
        this.homeScoreShootOut=homeScoreShootOut;
        this.awayScoreShootOut=awayScoreShootOut;
        this.stadium=stadium;
        this.status=status;
        this.stage=stage;
        this.date=date;

    }
    public isDraw():boolean{
        return this.homeScore === this.awayScore;
    }
    public winner():Team | null{
        if(this.isDraw()) return null;
        return this.homeScore > this.awayScore ? this.homeTeam: this.awayTeam;
    }
}