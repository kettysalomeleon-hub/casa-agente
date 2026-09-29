player.onChat("ev", function () {
    agent.setItem(GRASS, 64, 1)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(UP, 1)
})
