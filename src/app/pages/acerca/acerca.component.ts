import { Component, OnInit } from '@angular/core';
import { UserResult } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  constructor(private service: UsersService) {

  }

  users!: UserResult;

  ngOnInit(): void {
    this.service.getUsers().subscribe((result: UserResult) => {
      this.users = result;
      console.log(result);
    });
  }

}
