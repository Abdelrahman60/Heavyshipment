import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visaa',
  templateUrl: './visaa.component.html',
  styleUrls: ['./visaa.component.scss']
})
export class VisaaComponent implements OnInit {

  constructor() { }
  value1:any

  ngOnInit(): void {
  //  let cardholderinput=document.querySelector('.card-holder-input') as HTMLElement
  //  let cardholdername=document.querySelector('.card-holder-name') as HTMLElement

  //  cardholderinput.oninput=()=>{
  //   cardholdername.innerText=cardholderinput.value
  //  }


  // document.querySelector('.card-holder-input').oninput = () =>{
  //     document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
  // }

  // document.querySelector('.month-input').oninput = () =>{
  //     document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
  // }

  // document.querySelector('.year-input').oninput = () =>{
  //     document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
  // }

  // document.querySelector('.cvv-input').onmouseenter = () =>{
  //     document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  //     document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
  // }

  // document.querySelector('.cvv-input').onmouseleave = () =>{
  //     document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  //     document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
  // }

  // document.querySelector('.cvv-input').oninput = () =>{
  //     document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
  // }
  }

}
