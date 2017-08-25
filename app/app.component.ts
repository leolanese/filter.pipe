import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  
  characters = [
      'Leo',
      'Ambar',
      'Von Kracken',
      'Pupul',
      'Van Doren',
      'Berohn'
    ]
  
}
