import { Category } from './category.model';

export const CATEGORIES: Category[] =
  [
    {
      id: 6,
      title: 'Category 1',
      idParentCategory: 0,
      listIdChildrenCategory: [],
    },
    {
      id: 5,
      title: 'Category 2',
      idParentCategory: 0,
      listIdChildrenCategory: [],
    },
    {
      id: 4,
      title: 'Category 3',
      idParentCategory: 0,
      listIdChildrenCategory: [3, 2, 1],
    },
    {
      id: 3,
      title: 'Category 3 1',
      idParentCategory: 4,
      listIdChildrenCategory: [],
    },
    {
      id: 2,
      title: 'Category 3 2',
      idParentCategory: 4,
      listIdChildrenCategory: [],
    },
    {
      id: 1,
      title: 'Category 3 3',
      idParentCategory: 4,
      listIdChildrenCategory: [],
    },
  ];
