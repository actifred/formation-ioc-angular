import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit, AfterViewInit {
  @ViewChild('leDivDuHaut')
  monDiv!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('Mon div', this.monDiv.nativeElement.innerText);
  }

}
