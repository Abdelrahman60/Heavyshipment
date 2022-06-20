import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
@Component({
  selector: 'app-winches',
  templateUrl: './winches.component.html',
  styleUrls: ['./winches.component.scss']
})
export class WinchesComponent implements OnInit {

  constructor() { }

  states: string[] = [
    'Port Said port',
    'Alexandria port',
    'Damietta port',
    'Sues port'
  ];
  times: string[] = [
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM',
    '11:00 PM',
    '12:00 PM',
    '1:00 AM',
    '2:00 AM',
    '3:00 AM',
    '4:00 AM',
    '5:00 AM',
    '6:00 AM',
    '7:00 AM',
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 AM',
  ];


  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Cairo',
      pokemon: [
        {value: 'Nasr City-0', viewValue: 'Nasr City'},
        {value: 'Masr El-Gedida-1', viewValue: 'Masr El-Gedida'},
        {value: 'Helwan-2', viewValue: 'Helwan'},
      ],
    },
    {
      name: 'Giza',
      pokemon: [
        {value: 'Octobar-3', viewValue: '6-Octobar'},
        {value: 'Giza-4', viewValue: 'Giza'},
        {value: 'Dokki-5', viewValue: 'Dokki'},
      ],
    },
    {
      name: 'Qalyubia',
      pokemon: [
        {value: 'qalyub-6', viewValue: 'Qalyup'},
        {value: 'El Qanater El Khayreya-7', viewValue: 'El Qanater El Khayreya'},
      ],
    },
  ];

  ngOnInit(): void {
  }

}
