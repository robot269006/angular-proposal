import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { Observable } from 'rxjs/Rx';


@Component ({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [DocumentService],
})

export class DocumentsComponent implements OnInit {
  // attributes that are available in this component, are defined as xxxx:
  pageTitle: string = "Documents Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService;
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }

}
