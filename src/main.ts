import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { appConfig } from './app.config';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { GoogleBooksService } from './service/book.service';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './store/books.selectors';
import { AsyncPipe } from '@angular/common';
import { BooksActions, BooksApiActions } from './store/books.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, BookListComponent, BookCollectionComponent],
  template: `
   <h1>Oliver Sacks Books Collection</h1>
   <app-book-list class="book-list" [books]="(books$ | async)!" (add)="onAdd($any($event))"/>
  
<h2>Books</h2>

<app-book-collection class="book-collection" [books]="(bookCollection$ | async)!" (removeEvent)="onRemove($any($event))"/>
  `,
})
export class App {
  name = 'Angular';

  booksService: GoogleBooksService = inject(GoogleBooksService);
  private store: Store = inject(Store);

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd = (bookId: string) =>
    this.store.dispatch(BooksActions.addBook({ bookId }));

  onRemove = (bookId: string) =>
    this.store.dispatch(BooksActions.removeBook({ bookId }));
}

bootstrapApplication(App, appConfig);
