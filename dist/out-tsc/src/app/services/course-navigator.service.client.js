"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch('http://localhost:8080/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch('http://localhost:8080/api/course/'
            + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    return CourseNavigatorServiceClient;
}());
exports.CourseNavigatorServiceClient = CourseNavigatorServiceClient;
//# sourceMappingURL=course-navigator.service.client.js.map