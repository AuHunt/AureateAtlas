import { ITestData } from 'types/stateTypes';
import { TAppActions } from 'types/actionTypes';
import { Dispatch } from 'redux';
import { TAppState } from 'configureStore';
import { v1 as uuid } from 'uuid';

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

export function startSetTest(testArr: ITestData[]) {
    return (dispatch: Dispatch<TAppActions>) => {
        dispatch(setTetsArr(testArr));
    };
}

export function startRemoveTest(id: string) {
    return (dispatch: Dispatch<TAppActions>) => {
        dispatch(removeTest(id));
    };
}

export function startEditTest(testData: ITestData) {
    return (dispatch: Dispatch<TAppActions>) => {
        dispatch(editTest(testData));
    };
}

export function startAddTest(testInfo: { desc: string; modDate: number }) {
    return (dispatch: Dispatch<TAppActions>, getState: () => TAppState) => {
        console.log(getState().testReducer.testArr);
        const id: string = uuid();
        const testData: ITestData = {
            id,
            ...testInfo
        };

        dispatch(addTest(testData));
    };
}
