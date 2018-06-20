export class WidgetServiceClient {
  LESSON_URL = 'http://localhost:8080/api/lesson';
  LESSON_URL_HEROKU = 'https://disha-sule-webdev-summer1-2018.herokuapp.com/api/lesson';

  findWidgetsForLesson(lessonId) {
    return fetch(this.LESSON_URL_HEROKU + '/' + lessonId + '/widgets')
      .then(response => response.json());
  }
}
