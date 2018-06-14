export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('http://localhost:8080/api/lesson/' + lessonId + '/widgets')
      .then(response => response.json());
  }
}
