import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-admin-section-list',
  templateUrl: './admin-section-list.component.html',
  styleUrls: ['./admin-section-list.component.css']
})
export class AdminSectionListComponent implements OnInit {
  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  sectionId = '';
  courseId = '';
  sections = [];
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  deleteSection(sectionId) {
   this.service.deleteSection(sectionId)
     .then(() => {
       this.loadSections(this.courseId);
     });
  }
  saveSection() {
    this.service.saveSection(this.sectionId, this.sectionName, this.seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  setSection(sectionName, seats, sectionId) {
    this.sectionName = sectionName;
    this.seats = seats;
    this.sectionId = sectionId;
  }

  ngOnInit() {
  }

}
