// VARIÁVEIS GLOBAIS
let spaceship = {
    name: "",
    type: "",
    maxVelocity: 0,
    lastVelocityRegistry: 0,
    velocity: 0
}

// INFO COLLECT
spaceship.name = prompt("Digite o nome da sua nave:")
spaceship.type = prompt("Digite o tipo da sua nave:")
spaceship.maxVelocity = prompt("Digite a velocidade máxima da sua nave:")

// FUNÇÕES
function ignite() {
    let turnOnConfirm = confirm("Olá, bem-vindo a ignição da nave. Clique em 'OK' para ligar.")
    if (turnOnConfirm === true) {
        alert("Iniciando computador de bordo...")
        spaceshipPanel()
    }
}

function spaceshipPanel() {
    alert("Bem-vindo ao computador de bordo!\n" +
        "Informações da nave\n============================\n" + 
        "Nave: " + spaceship.name + 
        "\nTipo da nave: " + spaceship.type + 
        "\nVelocidade atual: " + spaceship.velocity + "KM/s" +
        "\nÚltima velocidade registrada: " + spaceship.lastVelocityRegistry + "KM/s" +
        "\nVelocidade máxima: " + spaceship.maxVelocity + "KM/s")
    
    zeroAccelerate()
}

function zeroAccelerate() {
    if (spaceship.velocity == 0) {
        let optionAccelerate = prompt("Atualmente estamos parados, gostaria de acelerar?\n1- Sim\n2- Não")
        spaceship.lastVelocityRegistry = 0
        switch(optionAccelerate) {
            case '1':
                let accelerateVelocity = parseInt(prompt("Digite a velocidade desejada para acelerar (Velocidade máxima: " + spaceship.maxVelocity + "KM/s):"))
                newVelocity(accelerateVelocity)
                spaceshipPanel()
                break
            case '2':
                alert("Ok, continuaremos parados!")
                newVelocity(0)
                break
            default:
                alert("Valor inválido, tente novamente")
                zeroAccelerate()
        }
    }
    else if (spaceship.velocity > 0) {
        stopReduceAccelerate()
    }
}

function stopReduceAccelerate() {
    if (spaceship.velocity == spaceship.maxVelocity) {
        let optionStopReduce = prompt("Atualmente estamos na velocidade máxima de " + spaceship.velocity + "KM/s, gostaria de reduzir ou parar?\n1- Reduzir\n2- Parar")
        switch(optionStopReduce) {
            case '1':
                let reduceVelocity = parseInt(prompt("Digite quantos KM/s gostaria de reduzir:"))
                newVelocity(-reduceVelocity)
                spaceshipPanel()
                break
            case '2':
                alert("OK! Parando a nave...")
                newVelocity(0)
                break
            default:
                alert("Valor inválido, tente novamente")
                stopReduceAccelerate()
        }
    }
    else if (spaceship.velocity < spaceship.maxVelocity) {
        let optionStopReduceAccelerate = prompt("Atualmente estamos á " + spaceship.velocity + "KM/s, gostaria de acelerar, reduzir ou parar?\n1- Acelerar\n2- Reduzir\n3- Parar")
        switch(optionStopReduceAccelerate) {
            case '1':
                let accelerateVelocity = parseInt(prompt("Digite a velocidade desejada para acelerar (Velocidade máxima: " + spaceship.maxVelocity + "KM/s):"))
                newVelocity(accelerateVelocity)
                spaceshipPanel()
                break
            case '2':
                let reduceVelocity = parseInt(prompt("Digite quantos KM/s gostaria de reduzir:"))
                newVelocity(-reduceVelocity)
                spaceshipPanel()
                break
            case '3':
                alert("OK! Parando a nave...")
                newVelocity(0)
                break
            default:
                alert("Valor inválido, tente novamente")
                stopReduceAccelerate()
        }
    }
}

function stoped() {
    let confirmReturn = confirm("Quando desejar acelerar basta clicar em 'OK' e retornar ao computador de bordo!\nAo clicar em 'CANCELAR' a nave será desligada.")
    if (confirmReturn == true) {
        alert("Retornando ao computador de bordo...")
        spaceshipPanel()
    }
    else if (confirmReturn == false) {
        alert("Desligando nave para economia de combustível e energia...")
            }
}

function newVelocity(velocity) {
    if (velocity > 0 && velocity <= spaceship.maxVelocity) {
        if (spaceship.velocity + velocity > spaceship.maxVelocity) {
            alert("𝗘𝗥𝗥𝟬𝗥 𝗫𝟰𝟬𝟰\n𝗘𝗥𝗥𝟬𝗥 𝗫𝟰𝟬𝟰\nNós não podemos acelerar á essa velocidade pois, ultrapassa a velocidade máxima da nave de " + spaceship.maxVelocity + "KM/s" +
                "\nReiniciando...")
            zeroAccelerate()
        }
        else if (spaceship.velocity + velocity <= spaceship.maxVelocity) {
            spaceship.velocity += velocity
            spaceship.lastVelocityRegistry += velocity
            alert("Nova velocidade: " + spaceship.velocity + "KM/s")
        }
    }
    else if (velocity === 0) {
        spaceship.velocity = velocity
        stoped()
    }
    else if (velocity < 0) {
        spaceship.velocity += velocity
        spaceship.lastVelocityRegistry += velocity
        alert("Nova velocidade: " + spaceship.velocity + "KM/s")
    }
    else if (velocity > spaceship.maxVelocity) {
        alert("𝗘𝗥𝗥𝟬𝗥 𝗫𝟰𝟬𝟰\n𝗘𝗥𝗥𝟬𝗥 𝗫𝟰𝟬𝟰\nNós não podemos acelerar á essa velocidade pois, ultrapassa a velocidade máxima da nave de " + spaceship.maxVelocity + "KM/s" +
                "\nReiniciando...")
        zeroAccelerate()
    }
}
