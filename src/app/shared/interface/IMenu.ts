export interface IMenu {
    text: string,
    icon: string,
    routerLink?: string;
    children: IMenuItem[]
}
export interface IMenuItem {
    text: string,
    icon: string,
    routerLink: string;
}

export class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
  }
  