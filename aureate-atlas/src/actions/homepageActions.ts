import { ITestData } from 'types/stateTypes';
import { TAppActions } from 'types/actionTypes';
import { Dispatch } from 'redux';
import { TAppState } from 'store/configureStore';

export const setTetsArr = (testArr: ITestData[]): TAppActions => ({
    type: 'SET_TEST_ARR',
    testArr
});

export const removeTest = (id: string): TAppActions => ({
    type: 'REMOVE_TEST',
    id
});

export const editTest = (testData: ITestData): TAppActions => ({
    type: 'EDIT_TEST',
    testData
});

export const addTest = (testData: ITestData): TAppActions => ({
    type: 'ADD_TEST',
    testData
});

// export function SetAddTest({
//     desc,
//     modDate
// }: {
//     desc: string;
//     modDate: number;
// }) {
//     return (dispatch: Dispatch<TAppActions>, getState: () => TAppState) => {
//         console.log(getState().homepageReducer.testArr);
//         dispatch(setTetsArr('TEST ON'));
//     };
// }

// export function startAddTest({
//     desc,
//     modDate
// }: {
//     desc: string;
//     modDate: number;
// }) {
//     return (dispatch: Dispatch<TAppActions>, getState: () => TAppState) => {
//         console.log(getState().homepageReducer.testArr);
//         dispatch(SetTetsArr('TEST ON'));
//     };
// }

// export function startAddTest({
//     desc,
//     modDate
// }: {
//     desc: string;
//     modDate: number;
// }) {
//     return (dispatch: Dispatch<TAppActions>, getState: () => TAppState) => {
//         console.log(getState().homepageReducer.testArr);
//         dispatch(SetTetsArr('TEST ON'));
//     };
// }

// export function startAddTest({
//     desc,
//     modDate
// }: {
//     desc: string;
//     modDate: number;
// }) {
//     return (dispatch: Dispatch<TAppActions>, getState: () => TAppState) => {
//         console.log(getState().homepageReducer.testArr);
//         dispatch(SetTetsArr('TEST ON'));
//     };
// }
