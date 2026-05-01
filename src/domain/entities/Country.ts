export class Country {
    public name: "USA" | "Mexico" | "Canada" | "Japon" |"Corée du Sud" | "Brésil";
    public code: "us" | "me" | "ca"|"jpn"|"kor"|"bra";

    constructor(name: "USA" | "Mexico" | "Canada" | "Japon"|"Corée du Sud" | "Brésil", code: "us" | "me" | "ca" |"jpn"|"kor"|"bra") {
        if (name === "USA" && code !== "us") throw new Error("Code invalide pour USA");
        if (name === "Mexico" && code !== "me") throw new Error("Code invalide pour Mexico");
        if (name === "Canada" && code !== "ca") throw new Error("Code invalide pour Canada");
        if (name === "Japon" && code !== "jpn") throw new Error("Code invalide pour Japon");
        if (name === "Corée du Sud" && code !== "kor") throw new Error("Code invalide pour Corée du Sud");
        if (name === "Brésil" && code !== "bra") throw new Error("Code invalide pour Brésil");
        this.name = name;
        this.code = code;
    }
}