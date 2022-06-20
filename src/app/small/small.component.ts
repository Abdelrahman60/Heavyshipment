import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservService } from './../reserv.service';



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
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss'],
})
export class SmallComponent implements OnInit {
  constructor(private _ReservService:ReservService) {}

  userorder: FormGroup = new FormGroup({
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required]),
    minute: new FormControl('', [Validators.required]),
    Ampm: new FormControl('', [Validators.required]),
    trucktype: new FormControl('', [Validators.required]),

  });

  getuserorder(orderdata:any){
    console.log(orderdata);


  }

  Truck: string[] = [
    'Heavy',
    'Medium',
    'Small',
  ];
  states: string[] = [
    'Port Said port',
    'Alexandria port',
    'Damietta port',
    'Sues port',
  ];

  Hour: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];
  Minute: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ];
  ampm: string[] = [
    "AM",
    "PM"
  ];


  ngOnInit(): void {}
  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Cairo',
      pokemon: [
        { value: 'Nasr City-0', viewValue: 'Nasr City' },
        { value: 'Masr El-Gedida-1', viewValue: 'Masr El-Gedida' },
        { value: 'Helwan-2', viewValue: 'Helwan' },
      ],
    },
    {
      name: 'Giza',
      pokemon: [
        { value: 'Octobar-3', viewValue: '6-Octobar' },
        { value: 'Giza-4', viewValue: 'Giza' },
        { value: 'Dokki-5', viewValue: 'Dokki' },
      ],
    },
    {
      name: 'Qalyubia',
      pokemon: [
        { value: 'qalyub-6', viewValue: 'Qalyup' },
        {
          value: 'El Qanater El Khayreya-7',
          viewValue: 'El Qanater El Khayreya',
        },
      ],
    },
  ];
}
