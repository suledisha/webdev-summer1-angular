"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var hello_world_component_1 = require("./hello-world.component");
var app_component_1 = require("./app.component");
var hello_world_two_component_1 = require("./hello-world-two/hello-world-two.component");
var forms_1 = require("@angular/forms");
var course_navigator_service_client_1 = require("./services/course-navigator.service.client");
var course_navigator_component_1 = require("./course-navigator/course-navigator.component");
var course_grid_component_1 = require("./course-grid/course-grid.component");
var app_routing_1 = require("./app.routing");
var course_service_client_1 = require("./services/course.service.client");
var white_board_component_1 = require("./white-board/white-board.component");
var course_viewer_component_1 = require("./course-viewer/course-viewer.component");
var module_list_component_1 = require("./module-list/module-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                hello_world_component_1.HelloWorldComponent,
                hello_world_two_component_1.HelloWorldTwoComponent,
                course_navigator_component_1.CourseNavigatorComponent,
                course_grid_component_1.CourseGridComponent,
                white_board_component_1.WhiteBoardComponent,
                course_viewer_component_1.CourseViewerComponent,
                module_list_component_1.ModuleListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            providers: [course_navigator_service_client_1.CourseNavigatorServiceClient,
                course_service_client_1.CourseServiceClient],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map