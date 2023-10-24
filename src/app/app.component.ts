import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadVessels } from './vessels/state/vessels.actions';
import { loadEmissions } from './emissions/state/emissions.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'navtor-task';

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadVessels());
    this.store.dispatch(loadEmissions());
  }

}
