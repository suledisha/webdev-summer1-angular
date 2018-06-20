export class ModuleServiceClient {
  MODULE_URL = 'http://localhost:8080/api/course/COURSE_ID/module';
  MODULE_URL_HEROKU = 'https://disha-sule-webdev-summer1-2018.herokuapp.com/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL_HEROKU.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
