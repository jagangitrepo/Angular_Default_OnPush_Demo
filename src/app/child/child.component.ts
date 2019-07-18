import { Component, Input, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy , ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'child',
  template: `<subchild [name]="subchild1"></subchild>  <subchild [name]="subchild2"></subchild> <p>{{ check() }}</p> `,
  styles: [`h1 { font-family: Lato; }`], 
})
export class ChildComponent implements OnChanges, DoCheck, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input()
  name:string;
  subchild1: string;
  subchild2: string;

  constructor(private cd:ChangeDetectorRef){ 
    // this.subchild1 = this.name + " subchild1";
    // this.subchild2 = this.name + " subchild2";
  }
check()
{
  console.log("***************************************Child " + this.name  + " Component view checked");
}

  ngOnChanges(changes: SimpleChanges) {
    console.log("-------->ChildComponent: ", this.name, " ngOnChanges :", changes);
  }

  ngDoCheck() {
    console.log("-------->ChildComponent: ", this.name, " ngDoCheck :");
  }

  ngOnInit() {
    console.log("-------->ChildComponent: ", this.name, " ngOnInit :");
    this.subchild1 = this.name + " subchild1";
    this.subchild2 = this.name + " subchild2";
  }

  ngAfterContentInit() {
    console.log("-------->ChildComponent: ", this.name, " ngAfterContentInit :");
  }

  ngAfterContentChecked() {
    console.log("-------->ChildComponent: ", this.name, " ngAfterContentChecked :");
  }

  ngAfterViewInit() {
    console.log("-------->ChildComponent: ", this.name, " ngAfterViewInit :");
  }

  ngAfterViewChecked() {
    console.log("-------->ChildComponent: ", this.name, " ngAfterViewChecked :");

  }

  ngOnDestroy() {
    console.log("-------->ChildComponent: ", this.name, " ngOnDestroy :");
  }
}
