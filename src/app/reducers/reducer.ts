import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import * as ActionsInfo from './../actions/actions'
 

const initialState = {
    user: null,
    post: null
}

export function reducer(state = initialState, action: ActionsInfo.Actions) {
    switch (action.type ) {
        case ActionsInfo.ADD_POST:
            return {...state}
            break;
        case ActionsInfo.ADD_USER:
            return {...state}
            break;
        default:
            return state;
    }
}