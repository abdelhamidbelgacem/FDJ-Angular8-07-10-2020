import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Team } from '@/_models';
import { TeamService } from '@/_services';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    teams = [];
    team1;
    constructor(
        private teamService: TeamService
    ) {
    }
    ngOnInit() {
        this.loadAllTeams();
        this.getTeamByName();
    }

    private loadAllTeams() {
        this.teamService.getAll()
            .pipe(first())
            .subscribe(teams => this.teams = teams);
    }
    private getTeamByName() {
        this.teamService.getByName(name)
            .pipe(first())
            .subscribe(team1 => this.team1 = team1);
            console.log("res: ", this.team1?.strTeam??"");
            console.log("res: ", this.team1?.banner??"");
            console.log("res: ", this.team1?.strLeague2??"");
            console.log("res: ", this.team1?.strLeague??"");
            console.log("res: ", this.team1?.strDescriptionEN??"");
    }
}