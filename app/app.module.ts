import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FilterPipe} from './filter.pipe';

@NgModule({
  imports:[ BrowserModule, 
            FormsModule 
          ],
  declarations:[ AppComponent, 
                FilterPipe
               ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
