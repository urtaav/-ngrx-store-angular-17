import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { booksReducer } from './store/books.reducer';
import { collectionReducer } from './store/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore({
      books: booksReducer,
      collection: collectionReducer,
    }),
    provideEffects(),
  ],
};
