import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(8, 'ABC Company', 'http://ABCCompany.com', 'Ruby on Rails', 150, 120, 15, 'abc@gmail.com');
  proposalTwo: Proposal = new Proposal(22, 'EDF Company', 'http://ABCCompany.com', 'Ruby on Rails', 150, 120, 15, 'abc@gmail.com');
  proposalThree: Proposal = new Proposal(35, 'XYZ Company', 'http://ABCCompany.com', 'Ruby on Rails', 150, 120, 15, 'abc@gmail.com')

  proposals: Proposal[] = [
  this.proposalOne,
  this.proposalTwo,
  this.proposalThree
  ]
}
