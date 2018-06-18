import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  courses: Course[] = [];
  courseId = '';
  sections = [];
  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
}
