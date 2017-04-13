import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // [ ] Property binding - Component to Dom (one way up)
  // ( ) Event binding - Dom to Component
  title = 'Hello World!';
  name = 'Jonno';
  jonnosColor = 'red';

  changeTextColor() {
    this.jonnosColor = this.jonnosColor === 'blue' ? 'red' : 'blue';// If colour is blue, go red, else go blue
  }
}
