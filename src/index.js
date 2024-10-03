const player1 ={
    NOME: "Mário",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 ={
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0, 
}

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
 }

async function getRandomBlock() {
    let random = Math.random()
    let result 

    switch (true){
        case random < 0.33:
            result = "RETA";
            break
        case random < 0.66:
            result = "CURVA";
        default:
        result = "CONFRONTO"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult+attribute} `)

}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round ++){
        console.log(`Rodada${round}\n`);

        //Definindo blocos
        let block = await getRandomBlock()
        console.log(`Bloco ${block}\n`)
        //Rolar dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    //Teste habilidade
    
    let totalTesteSkill1 = 0
    let totalTesteSkill2 = 0

    if(block === "RETA"){
        totalTesteSkill1 = diceResult1 + character1.VELOCIDADE
        totalTesteSkill2 = diceResult2 + character2.VELOCIDADE
        
        await logRollResult(character1.NOME,"velocidade",diceResult1,character1.VELOCIDADE)
        await logRollResult(character2.NOME,"velocidade",diceResult2,character2.VELOCIDADE)

    }
    if(block === "CURVA"){
        totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE
        totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE

        await logRollResult(character1.NOME,"manobrabilidade",diceResult1,character1.MANOBRABILIDADE)
        await logRollResult(character2.NOME,"manobrabilidade",diceResult2,character2.MANOBRABILIDADE)
    }
    if(block === "CONFRONTO"){
        let powerResult1 = diceResult1 + character1.PODER
        let powerResult2 = diceResult2 + character2.PODER

        await logRollResult(character1.NOME,"poder",diceResult1,character1.PODER)
        await logRollResult(character2.NOME,"poder",diceResult2,character2.PODER)
    }
    if(totalTesteSkill1 > totalTesteSkill2){
        console.log(`${character1.NOME} marcou um ponto!`)
        character1.PONTOS++;
    }else if(totalTesteSkill1 < totalTesteSkill2){
        console.log(`${character2.NOME} marcou um ponto!`)
        character2.PONTOS++;
    }
    console.log("--------------------------------")

    }


    }
    

(async function main() {
    console.log(`Corrida entre ${player1.NOME} e ${player2.NOME} começando... `)

    await playRaceEngine(player1, player2)

} )()//essa estrutura de colocar a function dentro de um parênteses () + um parênteses no final ((function))() é para que ela se auto invoque
