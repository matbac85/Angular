import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  //element Ref qui vient d'AngularCore va nous permettre d'avoir la référence de l'élément sur lequel nous pointons.
  private initialColor = '#f5f5f5';
  private defaultColor = '#00FFD5';
  private defaultHeight = 200;

  
  
  constructor(private el: ElementRef){
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor)
  }

  @Input("pkmBorderCard") declare borderColor : string;

  @HostListener("mouseenter") onMouseEnter(){
    // Ceci va déterminer la couleur de notre div lors du hover;
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener("mouseleave") onMouseLeave(){
    // Ceci va déterminer la couleur de notre div lors du hover;
    this.setBorder(this.initialColor)
  }

  setHeight(height: number){
    // on va définir la hauteur du ElementRef
    this.el.nativeElement.style.height = `${height}px`
    // le native element va venir rechercher l'élément DOM car l'ElementRef est, en fait, un encapsuleur (un wrapper) autour de l'élément DOM, le native element va venir chercher l'élément en question. 
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 14px ${color}`
  }

}

//Améliorer le code de façon à ce que plutôt que de passer par des valeurs données en dire, nous passions par des propriétés rendant possible le dynamisme de notre code.
//les variables sont :
// initialColor : couleur présente au chargement de la page.
// defaultColor : couleur par défaut si aucune couleur n'est donnée.
// defaultHeight : la hauteur par défaut.
// Ces propriétés devront être privées.
