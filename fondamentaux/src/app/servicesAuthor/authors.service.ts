import { Injectable } from '@angular/core';

export interface Author{
  sirName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAllAuthors(): Author[] {
    return [
      {
        sirName: 'Hergé',
      },
      {
        sirName: 'Ers',
      },
      {
        sirName: 'Dugommier',
      },
    ];
  }
}
