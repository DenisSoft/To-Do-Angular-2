import {FilterCategoriesActions, PUSH_POP_CATEGORY_IN_FILTER} from './filter-categories.actions';

export interface State {
  openCategories: number[];
}

const initialState: State = {
  openCategories: [0]
};

export function filterCategoryReducer(state = initialState, action: FilterCategoriesActions): State {
  switch (action.type) {

    case PUSH_POP_CATEGORY_IN_FILTER:

      if (state.openCategories.includes(action.id)) {
        let listIdOpenCategory = state.openCategories.slice();
        const listOpenCategory = action.openCategories.slice();
        const closeCategory = listOpenCategory.find((category) => category.id === action.id);
        if (closeCategory.listIdChildrenCategory.length) {
          const closingSubsidiaryCategories = (listIdCategory) => {
            listIdCategory.forEach((idCategory) => {
              if (listIdOpenCategory.includes(idCategory)) {
                const closeChildCategory = listOpenCategory.find((category) => category.id === idCategory);
                if (closeChildCategory.listIdChildrenCategory.length) {
                  closingSubsidiaryCategories(closeChildCategory.listIdChildrenCategory);
                }
                listIdOpenCategory = listIdOpenCategory.filter((id) =>
                  id !== closeChildCategory.id
                );
              }
            });
            return listOpenCategory;
          };
          closingSubsidiaryCategories(closeCategory.listIdChildrenCategory);
        }
        return {
          openCategories: listIdOpenCategory.filter((idCategory) =>
            idCategory !== action.id)
        };
      }
      return {
        openCategories: [
          ...state.openCategories,
          action.id,
        ]
      };

    default:
      return state;
  }
}

export const getOpenCategories = (state: State) => state.openCategories;

