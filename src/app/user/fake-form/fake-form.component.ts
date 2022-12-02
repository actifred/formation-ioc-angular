import { Component, OnInit } from '@angular/core';
import { DirtifiableComponent } from 'src/app/dirty.guard';

@Component({
  selector: 'app-fake-form',
  templateUrl: './fake-form.component.html',
  styleUrls: ['./fake-form.component.css']
})
export class FakeFormComponent implements OnInit, DirtifiableComponent {

  public dirty = false;

  public isDirty() {
    return this.dirty;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.dirty = !this.dirty;
  }

}
