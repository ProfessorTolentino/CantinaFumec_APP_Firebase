import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listCategory = [
    {
      "id":1,
      "cardTitle":"Sanduíche",
      "cardSubtitle":"Sanduíches naturais",
      "imagem":"assets/imgs/sanduiche-natural.jpg"
    },
    {
      "id": 2,
      "cardTitle": "Pães de Queijo",
      "cardSubtitle": "Normal e Recheados",
      "imagem": "assets/imgs/pao-queijo.jpg"
    },
    {
      "id": 3,
      "cardTitle": "Pizzas",
      "cardSubtitle": "Com bordas e Sem bordas",
      "imagem": "assets/imgs/pizza.jpg"
    },
    {
      "id": 4,
      "cardTitle": "Chinesa",
      "cardSubtitle": "Quentes e Rolinhos",
      "imagem": "assets/imgs/chinesa.jpg"
    },
    {
      "id": 5,
      "cardTitle": "Sucos",
      "cardSubtitle": "Sucos e Refrigerantes",
      "imagem": "assets/imgs/suco.jpg"
    },
    {
      "id": 6,
      "cardTitle": "Sobremesas",
      "cardSubtitle": "Tortas e Doces",
      "imagem": "assets/imgs/sobremesa.jpg"
    },
    {
      "id": 7,
      "cardTitle": "Salada",
      "cardSubtitle": "Saladas e Molhos",
      "imagem": "assets/imgs/salada.jpg"
    } 

  ]

  constructor() {}

}
