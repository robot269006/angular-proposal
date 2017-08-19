import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  //api url
  private proposalsUrl = 'http://localhost:3002/proposals';
  //constructor is going to create connection with HTTP, since this api connection will be dependent on HTTP call
  constructor(
    //private varible created, and the type is defined as "Http" -> Http library is called
    private http: Http
  ) {}
  //return an observable. Observable takes a type argument -> angled brackets. We want this observalbe to retun an array of documents
  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .map((response: Response) => <Proposal[]>response.json()) //map a response to a response that we can actually work with
                    .catch(this.handleError);
  }
  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id + ".json")
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
