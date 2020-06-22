import React from 'react';
import { connect } from 'react-redux';
import { startEditTest, startRemoveTest } from '../actions/TestActions';
import { ITestData } from 'types/stateTypes';
import { TAppState } from 'configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { TAppActions } from 'types/actionTypes';
import { bindActionCreators } from 'redux';

interface ITestProps {
    id?: string;
    color?: string;
}

interface ITestState {
    test?: string;
}

type Props = ITestProps & ILinkDispatchProps & ILinkStateProp;

export class Test extends React.Component<Props, ITestState> {
    onEdit = (testData: ITestData) => {
        this.props.startEditTest(testData);
    };
    onRemove = (id: string) => {
        this.props.startRemoveTest(id);
    };
    render() {
        const { testArr } = this.props;
        return (
            <div>
                <h1>Test Page</h1>
                <div>
                    {testArr.map((testData: ITestData) => (
                        <div>
                            <p>{testData.desc}</p>
                            <button onClick={() => this.onRemove(testData.id)}>Remove Test</button>
                            <button onClick={() => this.onEdit(testData)}>Edit Test</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

interface ILinkStateProp {
    testArr: ITestData[];
    auth_token: ITestData[];
}

interface ILinkDispatchProps {
    startEditTest: (testData: ITestData) => void;
    startRemoveTest: (id: string) => void;
}

const mapStateToProps = (state: TAppState, ownProps: ITestProps): ILinkStateProp => ({
    testArr: state.testReducer.testArr,
    auth_token: state.testReducer.testArr
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, TAppActions>,
    ownProps: ITestProps
): ILinkDispatchProps => ({
    startEditTest: bindActionCreators(startEditTest, dispatch),
    startRemoveTest: bindActionCreators(startRemoveTest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
