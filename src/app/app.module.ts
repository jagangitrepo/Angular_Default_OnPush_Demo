import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';
import { SubChildComponent } from './subchild/subchild.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MainComponent, ChildComponent, SubChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
