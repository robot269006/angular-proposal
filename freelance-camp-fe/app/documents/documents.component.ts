import { Component } from '@angular/core';
import { Document } from './document';

@Component ({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'mock document',
      file_url: 'http://google.com',
      updated_at: '11/11/2016',
      image_url: 'http://google.com',
    },
    {
      title: "My Second Doc",
      description: 'mock document',
      file_url: 'http://google.com',
      updated_at: '11/11/2016',
      image_url: 'http://google.com',
    },
    {
      title: "My last Doc",
      description: 'mock document',
      file_url: 'http://google.com',
      updated_at: '11/11/2016',
      image_url: 'http://google.com',
    }
  ]
}
