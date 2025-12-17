//% color=160 weight=100 icon="\uf130"
namespace STT {
    let lastCommand = ""

    /**
     * Set a command from Raspberry Pi
     * @param cmd the command text
     */
    //% block="set command $cmd"
    export function setCommand(cmd: string) {
        lastCommand = cmd
    }

    /**
     * Get last received command
     */
    //% block="get last command"
    export function getCommand(): string {
        return lastCommand
    }

    /**
     * Show last command on EV3 screen
     */
    //% block="show last command"
    export function showCommand() {
        if (lastCommand != "") {
            basic.showString(lastCommand)
            lastCommand = ""
        }
    }
}
