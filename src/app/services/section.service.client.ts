export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  STUDENT_URL = 'http://localhost:4000/api/student/section';
  SECTION_URL2 = 'http://localhost:4000/api/section';

  // https://sule-disha-nodejs-server.herokuapp.com/

  SECTION_URL_HEROKU = 'https://sule-disha-nodejs-server.herokuapp.com/api/course/COURSEID/section';
  STUDENT_URL_HEROKU = 'https://sule-disha-nodejs-server.herokuapp.com/api/student/section';
  SECTION_URL2_HEROKU = 'https://sule-disha-nodejs-server.herokuapp.com/api/section';



  findSectionsForStudent() {
    // const url = 'http://localhost:4000/api/student/section';
    return fetch(this.STUDENT_URL_HEROKU, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    // const url = 'http://localhost:4000/api/student/section';
    const url = this.SECTION_URL2_HEROKU + '/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  unenrollStudentInSection(sectionId){
    const url = this.SECTION_URL2_HEROKU + '/' + sectionId + '/unenrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL_HEROKU.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats, maxSeats) {
    const section = {courseId, name, seats, maxSeats};
    return fetch(this.SECTION_URL_HEROKU.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteSection(sectionId) {
    const url = this.SECTION_URL2_HEROKU + '/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
  saveSection(sectionId, name, seats, maxSeats) {
    const url = this.SECTION_URL2_HEROKU + '/' + sectionId;
    const section = {sectionId, name, seats, maxSeats};
    return fetch(url, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
