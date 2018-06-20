"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var course_navigator_service_client_1 = require("../services/course-navigator.service.client");
var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service) {
        this.service = service;
        this.courses = [];
        this.modules = [];
        this.selectedCourseId = 0;
        this.selectedModuleId = 0;
    }
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
        });
    };
    CourseNavigatorComponent.prototype.selectCourse = function (courseId) {
        var _this = this;
        this.selectedCourseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) {
            return _this.modules = modules;
        });
    };
    CourseNavigatorComponent.prototype.selectModule = function (moduleId) {
        this.selectedModuleId = moduleId;
    };
    CourseNavigatorComponent = __decorate([
        core_1.Component({
            selector: 'app-course-navigator',
            templateUrl: './course-navigator.component.html',
            styleUrls: ['./course-navigator.component.css']
        }),
        __metadata("design:paramtypes", [course_navigator_service_client_1.CourseNavigatorServiceClient])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());
exports.CourseNavigatorComponent = CourseNavigatorComponent;
//# sourceMappingURL=course-navigator.component.js.map