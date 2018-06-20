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
var HelloWorldTwoComponent = /** @class */ (function () {
    function HelloWorldTwoComponent() {
        this.message = 'Hello World Component two speaking';
        this.courses = [
            { title: 'CS5200', id: 123 },
            { title: 'CS5610', id: 234 },
            { title: 'CS3200', id: 345 },
            { title: 'CS4550', id: 456 }
        ];
    }
    HelloWorldTwoComponent.prototype.deleteCourse = function (courseId) {
        this.courses =
            this.courses
                .filter(function (course) {
                return course.id !== courseId;
            });
    };
    HelloWorldTwoComponent.prototype.addCourse = function (courseTitle) {
        var largestId = Math.max.apply(Math, this.courses.map(function (course) {
            return course.id;
        }));
        this.courses.push({ title: courseTitle, id: largestId + 1 });
        this.courseTitle = '';
    };
    HelloWorldTwoComponent.prototype.ngOnInit = function () {
    };
    HelloWorldTwoComponent = __decorate([
        core_1.Component({
            selector: 'app-hello-world-two',
            templateUrl: './hello-world-two.component.html',
            styleUrls: ['./hello-world-two.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldTwoComponent);
    return HelloWorldTwoComponent;
}());
exports.HelloWorldTwoComponent = HelloWorldTwoComponent;
//# sourceMappingURL=hello-world-two.component.js.map