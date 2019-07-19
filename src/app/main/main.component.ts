import { Component, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'main',
  template: `<child [name]="child1"></child>  <child [name]="child2"></child> <p>{{ check() }}</p>`,
  styles: [`h1 { font-family: Lato; }`],
   
})
export class MainComponent implements OnChanges, DoCheck, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  child1: string;
  child2: string;

  constructor() {
    this.child1 = "child1";
    this.child2 = "child2";
  }
  check() {
    console.log("**********************************Main Component view checked");
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("MainComponent ngOnChanges :", changes);
  // }

  // ngDoCheck() {
  //   console.log("MainComponent ngDoCheck :");
  // }

  // ngOnInit() {
  //   console.log("MainComponent ngOnInit :");
  // }

  // ngAfterContentInit() {
  //   console.log("MainComponent ngAfterContentInit :");
  // }

  // ngAfterContentChecked() {
  //   console.log("MainComponent ngAfterContentChecked :");
  // }

  // ngAfterViewInit() {
  //   console.log("MainComponent ngAfterViewInit :");
  // }

  // ngAfterViewChecked() {
  //   console.log("MainComponent ngAfterViewChecked :");
  // }

  // ngOnDestroy() {
  //   console.log("MainComponent ngOnDestroy :");
  // }

}
