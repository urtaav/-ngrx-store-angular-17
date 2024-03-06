import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  template: `

<div class="grid">

@for (book of books; track book.id) {
  <div class="col-4">
      <div class="book-container">
        <p class="book-title">{{book.volumeInfo.title}}</p>
        <span class="book-author">by {{book.volumeInfo.authors}}</span>
        <button class="add-button" (click)="add.emit(book.id)" data-test="add-button">Add to Collection</button>
    </div>
  </div>
}


 
</div>

  `,
  styles: `
  .book-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.book-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
}

.book-author {
    color: #555;
    margin-bottom: 15px;
}

.add-button {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-button:hover {
    background-color: #45a049;
}

  `,
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
