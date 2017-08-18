"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Base module -> This is like module of modules
var core_1 = require("@angular/core");
// Applied module -> imported modules and are used directly
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
// Added module -> installed ng-bootstrap then imported the bootstrap module
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Custom module -> Component module is imported and are modified to fit each's use
var homepage_component_1 = require("./homepage/homepage.component");
var app_component_1 = require("./app.component");
var documents_component_1 = require("./documents/documents.component");
var proposal_list_component_1 = require("./proposal/proposal-list.component");
var proposal_new_component_1 = require("./proposal/proposal-new.component");
var proposal_show_component_1 = require("./proposal/proposal-show.component");
// Injection module -> Treated like custom module, but for dependency injection purposes
var document_service_1 = require("./documents/document.service");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            homepage_component_1.HomepageComponent,
            documents_component_1.DocumentsComponent,
            proposal_list_component_1.ProposalListComponent,
            proposal_new_component_1.ProposalNewComponent,
            proposal_show_component_1.ProposalShowComponent
        ],
        providers: [
            document_service_1.DocumentService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map