//% color=160 weight=100 icon="\uf130"
namespace STT {
    let lastCommand: string = ""

    //% block="set command $cmd"
    export function setCommand(cmd: string) {
        lastCommand = cmd
    }

    //% block="get last command"
    export function getCommand(): string {
        return lastCommand
    }

    //% block="show last command"
    export function showLastCommand() {
        if (lastCommand != "") {
            brick.showString(lastCommand, 0) // display on line 0
            lastCommand = ""
        }
    }
}
