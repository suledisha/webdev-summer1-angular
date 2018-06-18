import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  _id;
  username;
  password;
  firstName;
  lastName;
  email;
  sections = [];


  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }


  update() {
    // console.log(user);
    this.service
      .update(this._id, this.username, this.firstName, this.lastName, this.email);

  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
      this._id = user._id;
      this.username = user.username;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
        console.log(user._id);
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
