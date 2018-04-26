import {ADD_CATEGORY, CategoriesActions, DELETE_CATEGORY, UPDATE_CATEGORY} from './categories.actions';
import {Category} from './category.model';
import {CATEGORIES} from './categories.list';

export interface State {
  categories: Category[];
}

const initialState: State = {
  categories: CATEGORIES
};

export function categoryReducer(state = initialState, action: CategoriesActions): State {
  switch (action.type) {

    case ADD_CATEGORY:
      if (action.idParentCategory) {
        const index = state.categories.findIndex((i) => i.id === action.idParentCategory) + 1;
        const newId = state.categories.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1;
        const parentCategory = state.categories.slice(index - 1, index)[0];
        parentCategory.listIdChildrenCategory.push(newId);
        return {
          categories: [
            ...state.categories.slice(0, index - 1),
            parentCategory,
            {
              id: newId,
              title: action.title,
              idParentCategory: action.idParentCategory,
              listIdChildrenCategory: [],
            },
            ...state.categories.slice(index),
          ]
        };
      }
      return {
        categories: [
          {
            id: state.categories.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1,
            title: action.title,
            idParentCategory: action.idParentCategory || 0,
            listIdChildrenCategory: [],
          },
          ...state.categories,
        ]
      };

    case DELETE_CATEGORY:
    {
      let newState = state.categories.slice();
      const idParentCategory = state.categories.find((i) => i.id === action.id).idParentCategory;
      if (idParentCategory) {
        const indexParentCategory = state.categories.findIndex((i) => i.id === idParentCategory);
        const parentCategory = state.categories.slice(indexParentCategory, indexParentCategory + 1)[0];
        parentCategory.listIdChildrenCategory = parentCategory.listIdChildrenCategory.filter((id) =>
          id !== action.id
        );
        newState = [
          ...state.categories.slice(0, indexParentCategory),
          parentCategory,
          ...state.categories.slice(indexParentCategory + 1),
        ];
      }
      const deleteCategory = newState.find((i) => i.id === action.id);
      if (deleteCategory.listIdChildrenCategory.length) {
        let oldState = newState.slice();
        const listIdChildrenCategory = oldState.find((i) => i.id === action.id).listIdChildrenCategory;
        const deleteCildrenCategory = (listIdCategory) => {
          listIdCategory.forEach((idCategory) => {
            const deleteChildCategory = oldState.find((i) => i.id === idCategory);
            if (deleteChildCategory.listIdChildrenCategory.length) {
              deleteCildrenCategory(deleteChildCategory.listIdChildrenCategory);
            }
            oldState = oldState.filter((category) =>
              category.id !== idCategory
            );
          });
          return oldState;
        };
        newState = deleteCildrenCategory(listIdChildrenCategory);
      }
      return {
        categories: newState.filter((category) =>
          category.id !== action.id
        )
      };
    }

    case UPDATE_CATEGORY: {
      const index = state.categories.findIndex((i) => i.id === action.id) + 1;
      return {
        categories: [
          ...state.categories.slice(0, index - 1),
          // new Category(action.id, action.title, action.idParentCategory, action.listIdChildrenCategory),
          {
            id: action.id,
            title: action.title,
            idParentCategory: action.idParentCategory,
            listIdChildrenCategory: action.listIdChildrenCategory,
          },
          ...state.categories.slice(index),
        ]
    };
    }

    default:
      return state;
  }
}

export const getCategories = (state: State) => state.categories;

