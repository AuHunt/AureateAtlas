import { ITestData } from './stateTypes';

export const SET_TEST_ARR = 'SET_TEST_ARR';
export const EDIT_TEST = 'EDIT_TEST';
export const REMOVE_TEST = 'REMOVE_TEST';
export const ADD_TEST = 'ADD_TEST';

export interface ISetTetsArrAction {
    type: typeof SET_TEST_ARR;
    testArr: ITestData[];
}

export interface IRemoveTestAction {
    type: typeof REMOVE_TEST;
    id: string;
}

export interface IEditTestAction {
    type: typeof EDIT_TEST;
    testData: ITestData;
}

export interface IAddTestAction {
    type: typeof ADD_TEST;
    testData: ITestData;
}

export type TTestActionTypes =
    | ISetTetsArrAction
    | IEditTestAction
    | IRemoveTestAction
    | IAddTestAction;

export type TAppActions = TTestActionTypes;
