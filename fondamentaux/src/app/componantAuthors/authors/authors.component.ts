import { Component } from '@angular/core';
import { AuthorsService, Author } from '../../servicesAuthor/authors.service';

@Component({
  selector: '.deuxiemeComposant',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  declare authors: Author[]

  constructor(private authorsService: AuthorsService) {
    this.authors = this.authorsService.getAllAuthors();
  } 
}
