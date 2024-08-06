enum RadioMessage {
    message1 = 49434
}
function detenerAlerta () {
    alerta = 0
    music.stopAllSounds()
    radio.sendValue("alerta", alerta)
    basic.showNumber(bandera)
}
input.onButtonPressed(Button.A, function () {
    seleccionarBandera()
})
function avisarAlerta () {
    while (alerta == 1) {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
input.onButtonPressed(Button.AB, function () {
    detenerAlerta()
})
input.onButtonPressed(Button.B, function () {
    notificarBandera()
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showNumber(bandera)
})
function seleccionarBandera () {
    if (bandera < 5) {
        bandera += 1
    } else {
        bandera = 1
    }
    basic.showNumber(bandera)
}
radio.onReceivedValue(function (name, value) {
    if (name == "alerta") {
        alerta = value
        avisarAlerta()
    } else {
        if (name == "consulta") {
            notificarBandera()
        }
    }
})
function notificarBandera () {
    radio.sendValue("bandera", bandera)
}
let alerta = 0
let bandera = 0
radio.setGroup(1)
radio.setTransmitPower(7)
let banderas = [
1,
2,
3,
4,
5
]
bandera = 0
alerta = 0
basic.showIcon(IconNames.Heart)
