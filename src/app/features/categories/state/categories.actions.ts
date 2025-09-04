import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetCategories } from '../models/categories/get-categories.model';

export const CategoriesActions = createActionGroup({
  source: 'Categories',
  events: {
    'Get Categories': emptyProps(),
    'Get Categories Success': props<{ categories: ReadonlyArray<GetCategories> }>()
  },
});
