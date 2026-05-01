export class FifaCode {
    public value: string;
    constructor(value:string){
        const regex = /^[A-Z]{3}$/;

        if (!regex.test(value)){
            throw new Error("Le code Fifa doit être composé de 3 lettres majuscules. ")
        }
        this.value=value
    }
    public toString(): string {
        return this.value
    }
    public equals(other: FifaCode): boolean{
        return this.value === other.value;
    }
    }
