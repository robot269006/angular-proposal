import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';
import { ActivatedRoute, Params } from '@angular/router';

@Component ({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css']
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
  }
}
