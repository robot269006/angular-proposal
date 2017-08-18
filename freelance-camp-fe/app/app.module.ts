// Base module -> This is like module of modules
import { NgModule } from '@angular/core';

// Applied module -> imported modules and are used directly
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Added module -> installed ng-bootstrap then imported the bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom module -> Component module is imported and are modified to fit each's use
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

// Injection module -> Treated like custom module, but for dependency injection purposes
import { DocumentService } from './documents/document.service';


@NgModule ({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
