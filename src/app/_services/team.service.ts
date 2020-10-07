import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '@/_models';

@Injectable({ providedIn: 'root' })
export class TeamService {
    constructor(private http: HttpClient) { }

    getAll() {
        const url="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French%20Ligue%201";
        return this.http.get<Team[]>(`${url}`);
    }

     
    getByName(name: string) {
        const url="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php"+`?${name}`;
            this.http.get<Team>(`${url}`);
            .map((res: Response) => res.json())
            .subscribe(team1 => {
                this.team1 = team1;
                console.log("res: ", this.team1.strTeam);
                console.log("res: ", this.team1.banner);
                console.log("res: ", this.team1.strLeague2);
                console.log("res: ", this.team1.strLeague);
                console.log("res: ", this.team1.strDescriptionEN);
                return this.team1;
            });
    }
}