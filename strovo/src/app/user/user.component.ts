import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RunTypes } from '../run-type';
import { UsersService } from '../users.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user$ = this.usersService.getUser(this.route.snapshot.params.id).pipe(tap(console.log));
  userStats$ = this.usersService.getUserStats(this.route.snapshot.params.id);

  runTypes = RunTypes;
  icons = {
    Walk: 'directions_walk',
    Run: 'directions_run',
    Bike: 'directions_bike'
  };

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  addRun(runForm) {
    console.log(runForm);
  }
}
