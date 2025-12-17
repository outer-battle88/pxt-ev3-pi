//% color=160 weight=100 icon="\uf130"
namespace STT {
    let lastCommand: string = ""

    /**
     * Set a command from Raspberry Pi
     * @param cmd the command text
     */
    //% block="set command $cmd"
    export function setCommand(cmd: string) {
        lastCommand = cmd
    }

    /**
     * Get the last received command
     */
    //% block="get last command"
    export function getCommand(): string {
        return lastCommand
    }

    /**
     * Show the last command on the EV3 screen
     */
    //% block="show last command"
    export function showLastCommand() {
        if (lastCommand != "") {
            brick.showString(lastCommand, 0) // line 0 of the screen
            lastCommand = ""
        }
    }
}
