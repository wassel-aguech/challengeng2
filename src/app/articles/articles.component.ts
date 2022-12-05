import { Component } from '@angular/core';
import { Article } from './Article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  public titre = "les articles des jours"


constructor(){
  
}

  NgOninit(){}

  listeArticles:Article[] = [
    {titre:"le championnat du monde",contenu:"le championnat du monde de cette anne est dans Qatar", auteur:"med taher", date:"12/12/2005"},
    {titre:"Les nouveaux parents",contenu:"Les nouveaux parents....", auteur:"med ali", date:"03/17/2020"},
    {titre:"Comment écrire votre CV",contenu:"Pour réussir à décraucher un emploi ..", auteur:"wassel", date:"14/9/2008"}
 ]
 

}
