import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = ""
  surname = ""
  nickname=""
  grupa=""
  limit=5;

 gry = [
  {
    name:"Counter Strike 2",
    players: [
      {
        id:1,
        name:"Daniel",
        surname:"S",
        nickname:"danyPL"
      }
    ]
  },
  {
    name:"Valorant",
    players: [      
      {
        id:1,
        name:"Daniel",
        surname:"S",
        nickname:"danyPL"
      }
    ]
  },
  {
    name:"League of legends",
    players: [
      {
        id: 1,
        name:"Daniel",
        surname:"S",
        nickname:"danyPL"
      }
    ]
  }
 ]
title="test"
addUser(){
if(this.name.length <=0 || this.surname.length <= 0 || this.nickname.length <= 0){
  alert("Nie podano wszystkich graczy")
}

 this.gry.map(e=>{
   if(e.players.length >= this.limit){
     alert("Osiągnięto limit graczy!");
   }else if(e.name == this.grupa){
     let user = {
       id: e.players.length +1,
       name: this.name,
       surname: this.surname,
       nickname: this.nickname
     }
     e.players.push(user)
   }
})


}
removePerson(uID: Number, gra: String): void {
  this.gry.map(e => {
    if (e.name == gra) {
      e.players = e.players.filter(e => e.id !== uID);
    }
  });
}


editPerson(uID: number, gra: String): void {
  let nName = prompt("Podaj nowe imie") || "";
  let nSur = prompt("Podaj nowe nazwisko") || "";
  let nNick = prompt("Podaj nowy nick") || "";
  this.gry.map(e => {
    if (e.name == gra) {
      const index = e.players.findIndex(user => user.id === uID);
      if (index !== -1) {
        e.players[index] = {
          id: uID,
          name: nName,
          surname: nSur,
          nickname: nNick
        };
      }
    }
  });
}
}
