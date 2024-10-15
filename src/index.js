let playerNickname = "Sir Ramu"
let result = playerRank(110, 5)

function playerRank(victories, defeats){
    return victories - defeats 
}

    if (result < 10){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Ferro`)
    }else if (result >= 11 && result <= 20){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Bronze`)
    }else if (result >= 21 && result <= 50){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Prata`)
    }else if (result >= 51 && result <= 80){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Ouro`)
    }else if (result >= 81 && result <= 90){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Diamante`)
    }else if (result >= 91 && result <= 100){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Lendários`)
    }else if (result >= 101){
        console.log(`O Herói ${playerNickname} tem um saldo de ${result} e está no nível de Imortal`)
    }