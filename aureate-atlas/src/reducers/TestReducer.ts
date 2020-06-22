import { ITestReducer } from '../types/stateTypes';
import { TTestActionTypes } from 'types/actionTypes';

const testDefaultReducer: ITestReducer = {
    testArr: []
};

const testReducer = (state: ITestReducer = testDefaultReducer, action: TTestActionTypes): ITestReducer => {
    switch (action.type) {
        case 'SET_TEST_ARR':
            return {
                ...state,
                testArr: action.testArr
            };
        case 'REMOVE_TEST':
            var testArray = state.testArr.filter(({ id }) => id !== action.id);
            return {
                ...state,
                testArr: testArray
            };
        case 'EDIT_TEST':
            var testArray = state.testArr;
            testArray.map((testData) => {
                if (testData.id === action.testData.id) {
                    testData = action.testData;
                }
            });
            return {
                ...state,
                testArr: testArray
            };
        case 'ADD_TEST':
            var testArray = state.testArr;
            testArray.push(action.testData);
            return {
                ...state,
                testArr: testArray
            };
        default:
            return state;
    }
};

export { testReducer };
