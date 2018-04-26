export class Category {
  constructor(public id: number,
              public title: string,
              public idParentCategory?: number,
              public listIdChildrenCategory?: number[]) {
  }
}

