export class CourseServiceClient {
  COURSE_URL = 'http://localhost:8080/api/course';
  COURSE_URL_HEROKU = 'https://disha-sule-webdev-summer1-2018.herokuapp.com/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL_HEROKU)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL_HEROKU + '/' + courseId)
      .then(response => response.json());
  }
}
