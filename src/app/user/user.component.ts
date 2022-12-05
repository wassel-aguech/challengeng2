import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
 public userName :string;
 public email : string;
 public adresse : string;
 public hobbies : string[];
 
constructor(){
  this.userName = "userName";
  this.email= 'email';
  this.adresse = "adresse";
  this.hobbies = ["music","sport","movie"];

}

ngOnInit(): void {
    
}

user = {
  nameUser :  "toto",
  email : "toto@fivepoints.fr",
  adresse : "lac 2",
  hobbies : ["music","sport","movie"]

}
hobidisplay="none"
text="afficher hobbies"
showhobbi(){
  if (this.hobidisplay == 'none') {
    this.hobidisplay='block'
  } else {
    this.hobidisplay='none'
  }
if (this.text == 'afficher hobbies') {
  this.text ="masquer hobies"
  
} else {
  this.text="afficher hobbies"
  
}
}

suprimer(i:any){
  this.user.hobbies.splice(i,1);
  console.log(this.user.hobbies)
  this.ngOnInit()

}
















}
