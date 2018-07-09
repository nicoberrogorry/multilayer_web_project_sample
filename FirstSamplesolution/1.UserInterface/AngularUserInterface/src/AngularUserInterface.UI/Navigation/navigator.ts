import { Component } from '@angular/core';
import { MenuSection } from './menuSection';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.html',
  styleUrls: ['./navigator.scss']
})

export class Navigator {
  private sections : MenuSection[];

  constructor(){
    this.sections = [
      {title: 'First Sample Solution', pages: null },
      {title: 'Administration', pages: [
        {title: 'Persons', items: [
          {title: 'Persons Grid', destination: ''},
          {title: 'Create Person', destination: 'TODO'}
        ]},
        {title: 'Professions', items: [
          {title: 'Professions Grid', destination: '/administration/Professions'},
          {title: 'Create Profession', destination: 'TODO'}
        ]}
      ]}
    ];
  }
}