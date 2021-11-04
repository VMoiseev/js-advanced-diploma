import { generateTeam } from './generators';
import Team from './Team';
import themes from './themes';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.playerTeam = generateTeam(new Team().playerTeam, 1, 2, this.gamePlay.boardSize);
    this.pcTeam = generateTeam(new Team().pcTeam, 1, 2, this.gamePlay.boardSize);
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.redrawPositions([...this.playerTeam, ...this.pcTeam]);
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  // onCellClick(index) {
  //   // TODO: react to click
  // }

  // onCellEnter(index) {
  //   // TODO: react to mouse enter
  // }

  // onCellLeave(index) {
  //   // TODO: react to mouse leave
  // }
}
