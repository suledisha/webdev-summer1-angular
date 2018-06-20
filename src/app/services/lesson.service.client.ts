export class LessonServiceClient {
  COURSE_URL = 'http://localhost:8080/api/course';
  COURSE_URL_HEROKU = 'https://disha-sule-webdev-summer1-2018.herokuapp.com/api/course';
  findLessonsForModule(courseId, moduleId) {
    return fetch(this.COURSE_URL_HEROKU + '/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
