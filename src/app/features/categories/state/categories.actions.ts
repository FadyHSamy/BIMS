import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetCategories } from '../../../shared/models/categories/get-categories.model';

export const CategoriesActions = createActionGroup({
  source: 'Categories',
  events: {
    'Load Categories': emptyProps(),
  },
});

export const CategoriesApiActions = createActionGroup({
  source: 'Categories API',
  events: {
    'Load Categories Success': props<{ categories: GetCategories[] }>(),
    'Load Categories Failure': props<{ error: string }>(),
  },
});
