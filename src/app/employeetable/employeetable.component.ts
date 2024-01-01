import { Component } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  standalone: true,
  imports: [],
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.css'
})
export class EmployeetableComponent {
  employeedetails:any;
  salary:boolean=true;
  hidebtn:boolean=true;
    constructor(){
      this.employeedetails=[
        {
          empID:"1",
          name:"Suman",
          designation:"Manager",
          location:"7/8/23",
          address:"Ahmedabad,greencity",
          salary:"100000"
        },
        {
          empID:"2",
          name:"Karthick",
          designation:"TL",
          location:"5/4/18",
          address:"Bangalore,Bommanalli",
          salary:"25000"
        },
        {
          empID:"3",
          name:"Ashvin",
          designation:"Developer",
          location:"6/12/16",
          address:"chennai,solingalallur",
          salary:"30000"
        },
        {
          empID:"4",
          name:"Raman",
          designation:"TL",
          location:"23/10/20",
          address:"Ahmedabad,greencity",
          salary:"77400"
        },
        {
          empID:"5",
          name:"Shankar",
          designation:"SL",
          location:"14/67/216",
          address:"Ahmedabad,greencity",
          salary:"44555"
        },
        {
          empID:"6",
          name:"Sundher",
          designation:"SL",
          location:"53/6/201",
          address:"Ahmedabad,greencity",
          salary:"44534"
        },
        {
          empID:"7",
          name:"Kumar",
          designation:"SL",
          location:"35/61/16",
          address:"Ahmedabad,greencity",
          salary:"64345"
        },
        {
          empID:"8",
          name:"Sudhakar",
          designation:"TL",
          location:"13/64/217",
          address:"Ahmedabad,greencity",
          salary:"154534"
        },
        {
          empID:"9",
          name:"Ahmed",
          designation:"SL",
          location:"35/16/26",
          address:"Ahmedabad,greencity",
          salary:"653054"
        },
        {
          empID:"10",
          name:"Rangan",
          designation:"Tester",
          location:"67/4/16",
          address:"Ahmedabad,greencity",
          salary:"264635"
        }
      ]
    }

    hideSalary(){
      this.salary=false;
      this.hidebtn=false;
    }

    showbtn(){
      this.salary=true;
      this.hidebtn=true;
    }
}
