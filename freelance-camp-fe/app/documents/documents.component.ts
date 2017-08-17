import { Component } from '@angular/core';
import { Document } from './document';

@Component ({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
  // attributes that are available in this component, are defined as xxxx:
  pageTitle: string = "Documents Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'mock document',
      file_url: 'http://google.com',
      updated_at: '11/11/2016',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Second Doc",
      description: 'mock document',
      file_url: 'http://google.com',
      updated_at: '11/11/2016',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My last Doc",
      description: 'mock document',
      file_url: 'http://google.com',
      updated_at: '11/11/2016',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}
