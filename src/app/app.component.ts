import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // [ ] means Property binding - Component to Dom (one way up)
  // ( ) means Event binding - Dom to Component
  title = 'Hello World!';
  name = 'Jonno';
  jonnosColor = 'red';
  jonnosWeight = 'bold';
  customers = [
    {id: 1, name: 'Jonno'},
    {id: 2, name: 'Ward'},
    {id: 3, name: 'Kevin'},
    {id: 4, name: 'Annie'},
    {id: 5, name: 'Sally'}
  ];

  changeTextColor() {
    this.jonnosColor = this.jonnosColor === 'blue' ? 'red' : 'blue';// If colour is blue, go red, else go blue
  }
}
