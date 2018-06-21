import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) { }

  user = {};
  _id;
  sections = [];
  courses: Course[] = [];

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        if (user !== null) {
          this._id = user._id;
          console.log(user._id);
        } else {
          this._id = -1;
        }

      });

    if (this._id !== -1) {
      this.sectionService
        .findSectionsForStudent()
        .then(sections => this.sections = sections );

      this.courseService.findAllCourses()
        .then(courses => this.courses = courses);
    }

  }

}
