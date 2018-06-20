"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var white_board_component_1 = require("./white-board/white-board.component");
var course_viewer_component_1 = require("./course-viewer/course-viewer.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: white_board_component_1.WhiteBoardComponent },
    { path: 'course/:courseId', component: course_viewer_component_1.CourseViewerComponent },
    { path: '**', component: white_board_component_1.WhiteBoardComponent } // last
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map