import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetCategories } from '../models/categories/get-categories.model';

export const CategoriesApiActions = createActionGroup({
  source: 'Categories API',
  events: {
    'load Categories': emptyProps(),
    'load Categories Success': props<{ categories: GetCategories[] }>(),
    'load Categories Failure': props<{ error: any }>(),
  },
});
