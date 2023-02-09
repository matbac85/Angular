import { Component } from '@angular/core';

enum Star {
  EMPTY = '☆',
  FILLED = '★'
}

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

isEmpty = true;

  // pContent = '☆';
  // isEmpty = true;

  // showFullStar() {
  //   this.isEmpty || this.pContent == '☆' ? this.pContent = '★' : this.pContent = '☆';
  //   this.isEmpty = false;
  // }
  star = Star.EMPTY;
  toggleIsFavourite(){
    this.star = this.star === Star.EMPTY ? Star.FILLED : Star.EMPTY
  }

}
