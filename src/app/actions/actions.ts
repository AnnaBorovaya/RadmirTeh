import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER'
export const ADD_POST = 'ADD_POST' 

export class AddUser implements Action {
    readonly type = ADD_USER

    constructor(public payload: any) {

    }
}

export class AddPost implements Action {
    readonly type = ADD_POST

    constructor(public payload: any) {
        
    }
}

export type Actions = AddUser | AddPost
