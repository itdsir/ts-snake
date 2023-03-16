export default class ScorePanel {
  score = 0
  level = 1
  scoreEl: HTMLElement
  levelEl: HTMLElement
  maxLevel: number
  scoreUp: number

  constructor(maxLevel: number = 10, scoreUp: number = 10) {
    this.scoreEl = document.getElementById('score')!
    this.levelEl = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.scoreUp = scoreUp
  }

  addScore() {
    this.scoreEl.innerHTML = ++this.score + ''
    if (this.score % this.scoreUp === 0) {
      this.levelUp()
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEl.innerHTML = ++this.level + ''
    }
  }
}

// const scorePanel = new ScorePanel(100, 2)
// for (let i = 0; i < 200; i++) {
//   scorePanel.addScore()
// }
