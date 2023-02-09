import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  
  //Input est un décorateur, il change le comportement de l'élément que l'on décore. 
  //title est une propriété de ma classe que je mets à l'intérieur des parenthèses de Input, on met un alias qui a plus de poids que l'attribut title.
  //Si on change la valeur de l'attribut title par l'alias, on retrouve la valeur de mon attribut
  @Input('postTitle') title = 'Mon titre par défaut'

  //clickTitle est le nom d'un événement
  //on lui donne un émetteur d'événement.
  //entre les parenthèses de l'output, on peut utiliser un alias comme avec l'input.
  @Output() clickTitle = new EventEmitter

  clickedTitle(){
    this.clickTitle.emit(this.title);
  }
}
