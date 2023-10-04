function display_level(nick, levelXP) {
    let levels = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Imortal", "Radiante"]
    
    switch(true) {
        case (levelXP <= 1000):
            console.log(`Agente: ${nick} Level: ${levels[0]}`)
            break
        case (levelXP <= 2000):
            console.log(`Agente: ${nick} Level: ${levels[1]}`)
            break
        case (levelXP <= 4000):
            console.log(`Agente: ${nick} Level: ${levels[2]}`)
            break
        case (levelXP <= 5000):
            console.log(`Agente: ${nick} Level: ${levels[3]}`)
            break
        case (levelXP <= 6000):
            console.log(`Agente: ${nick} Level: ${levels[4]}`)
            break
        case (levelXP <= 7000):
            console.log(`Agente: ${nick} Level: ${levels[5]}`)
            break
        case (levelXP <= 8000):
            console.log(`Agente: ${nick} Level: ${levels[6]}`)
            break
        case (levelXP <= 9000):
            console.log(`Agente: ${nick} Level: ${levels[7]}`)
            break
        case (levelXP <= 10000):
            console.log(`Agente: ${nick} Level: ${levels[8]}`)
            break
    }
}

let nick = "yMarcius"
let levelXP = 9001

display_level(nick, levelXP)
