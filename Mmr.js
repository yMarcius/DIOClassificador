function MMR(wins, losts, nick) {
    let ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Imortal", "Radiante"]

    switch(true) {
        case (wins - losts <= 10):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[0]}`)
            break
        case (wins - losts <= 20):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[1]}`)
            break
        case (wins - losts <= 40):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[2]}`)
            break
        case (wins - losts <= 50):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[3]}`)
            break
        case (wins - losts <= 60):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[4]}`)
            break
        case (wins - losts <= 70):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[5]}`)
            break
        case (wins - losts <= 80):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[6]}`)
            break
        case (wins - losts <= 90):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[7]}`)
            break
        case (wins - losts <= 100):
            console.log(`Agente: ${nick} Wins: ${wins} Rank: ${ranks[8]}`)
            break
    }
}

let nick = "yMarcius"
let wins = 110
let losts = 12

MMR(wins, losts, nick)
