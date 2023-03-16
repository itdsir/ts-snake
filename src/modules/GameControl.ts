import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

export default class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  keycode = 0 //左--37，上--38，右--39，下--40
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10, 10)

    this.init()
  }

  init() {
    document.addEventListener('keydown', this.handleKeydown.bind(this))
    this.run()
  }

  handleKeydown(event: KeyboardEvent) {
    this.keycode = event.keyCode
  }

  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.keycode) {
      case 37:
        X -= 10
        break
      case 38:
        Y -= 10
        break
      case 39:
        X += 10
        break
      case 40:
        Y += 10
        break
    }

    this.eat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      this.isLive = false
      alert(e.message + '游戏结束！')
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  eat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}
