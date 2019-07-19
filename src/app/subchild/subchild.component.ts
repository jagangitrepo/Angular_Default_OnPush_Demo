import { Component, Input, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy , ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'subchild',
  template: `<h3>Name: {{name}}</h3> <p>{{ check() }}</p> <button (click)="trigger()">TriggerEvent</button>`,
  styles: [`h1 { font-family: Lato; }`],
   
})
export class SubChildComponent implements OnChanges, DoCheck, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input()
  name:string;

  constructor(private cd:ChangeDetectorRef)
  { 

  }
check()
{
  console.log("******************************************************Sub Child " + this.name  + " Component view checked");
}

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngOnChanges :", changes);
  // }

  // ngDoCheck() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngDoCheck :");
  // }

  // ngOnInit() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngOnInit :");
  // }

  // ngAfterContentInit() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngAfterContentInit :");
  // }

  // ngAfterContentChecked() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngAfterContentChecked :");
  // }

  // ngAfterViewInit() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngAfterViewInit :");
  // }

  // ngAfterViewChecked() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngAfterViewChecked :");
  // }

  // ngOnDestroy() {
  //   console.log("------------------>SubChildComponent: ", this.name, " ngOnDestroy :");
  // }

  trigger()
  {
    //this.cd.markForCheck();
  }
}
