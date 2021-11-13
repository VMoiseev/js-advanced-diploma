import { generateTeam } from './generators';
import Team from './Team';
import themes from './themes';
import cursors from './cursors';
import { tooltipMessage } from './utils';
import GameState from './GameState';
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.playerTeam = generateTeam(new Team().playerTeam, 1, 2, this.gamePlay.boardSize);
    this.pcTeam = generateTeam(new Team().pcTeam, 1, 2, this.gamePlay.boardSize);
    this.state = GameState.from(this);
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.redrawPositions([...this.playerTeam, ...this.pcTeam]);
    // TODO: add event listeners to gamePlay events
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
    const teamsPositions = this.playerTeam;
    const person = teamsPositions.find((item) => item.position === index);
    if (person) {
      this.playerTeam.forEach((item) => this.gamePlay.deselectCell(item.position));
      this.gamePlay.selectCell(index);
    } else {
      GamePlay.showError('Это не ваш персонаж!');
    }
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const teamsPositions = [...this.playerTeam, ...this.pcTeam];
    const person = teamsPositions.find((item) => item.position === index);
    if (person) {
      this.gamePlay.setCursor(cursors.pointer);
      this.gamePlay.showCellTooltip((tooltipMessage(person.character)), index);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.setCursor(cursors.auto);
  }
}
