import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public monlien="http://valeriefabie.com/portfolio" ;
  public nom ="Dyma";

  constructor() { 
  }
   voiciunealerte() {
    alert('hello');
  }
  ngOnInit(): void {
  }

}
