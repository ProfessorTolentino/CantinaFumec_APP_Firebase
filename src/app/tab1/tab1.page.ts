import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  menu = [
    {
      'title': 'Menus dados',
      'icon': 'person-circle-outline',
      'color': '#78BD43',
      'link': ''
    },
    {
      'title': 'Favoritos',
      'icon': 'star-outline',
      'color': '#0CA9EA',
      'link': '/favorite'
    },
    {
      'title': 'Configurações',
      'icon': 'settings-outline',
      'color': '#F46529',
      'link': '/settings'
    },
    {
      'title': 'Alterar senha',
      'icon': 'key-outline',
      'color': '#FFD439',
      'link': ''
    }
  ]

  imagePath: string = "url(https://image.freepik.com/free-photo/tasty-fresh-appetizing-italian-food-ingredients-dark-background-ready-cook-home-italian-healthy-food-cooking-concept-toning_1220-1820.jpg)";
  name: string = "Vinícius Tolentino";
  profilePath: string = "url(https://uploaddeimagens.com.br/images/002/609/354/full/0.jpg?1587689158)"

  constructor(public router: Router, public nav:NavController, public auth:AuthService) { }

  goTo(menuItem) {
    console.log(menuItem);
    //this.nav.
    this.router.navigateByUrl(menuItem.link)
  }

  logout(){
    this.auth.signOut().then(
      data=>{
        console.log("Logout realizado com sucesso!")
      }
    )
  }

}
