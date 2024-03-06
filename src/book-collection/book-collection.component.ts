import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  template: `
  <div class="grid">
    <div class="col-12">
      <span class="p-3 bg-blue-500">{{books.length}}</span>
    </div>
        @for (book of books; track book.id) {
          <div class="col-4">
            <div class="book-item">
              <p class="book-title">{{book.volumeInfo.title}}</p>
              <span class="book-author">by {{book.volumeInfo.authors}}</span>
              <button class="remove-button" (click)="removeEvent.emit(book.id)" data-test="remove-button">Remove from Collection</button>
            </div>
          </div>
        }

</div>
 `,

  styles: `.book-item {
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

.remove-button {
    background-color: #e74c3c;
    color: #fff;
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.remove-button:hover {
    background-color: #c0392b;
}

  `,
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() removeEvent = new EventEmitter<string>();
}
