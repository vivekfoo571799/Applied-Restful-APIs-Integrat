import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { player } from '../player';
import { PlayerService } from '../player.service';

@Component({
selector: 'app-player',
templateUrl: './player.component.html',
styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
players: player[] = [];

constructor(private playerService: PlayerService) {}

ngOnInit() {
this.getPlayers();
}

getPlayers(): void {
this.playerService.getPlayers().subscribe((player: player[]) => this.players = player);
}

addPlayer(id: number,name: string, Runs: number, Catches: number, Number_of_100s: number, Wickets: number): void {
const newPlayer: player = {
  id,name,Runs,Catches,Number_of_100s,Wickets
};
this.playerService.addPlayer(newPlayer).subscribe((player: any) => this.players.push(player));
}

deletePlayer(player: player): void {
this.players = this.players.filter(p => p !== player);
this.playerService.deletePlayer(player.id).subscribe();
}
}