module.exports = () => {
    require("./firstmsg")()
    require("./sendTranscript")()
    require("./verifyBars")()

    //accepted
    require("./accepted/closing")()
    require("./accepted/reopening")()
}