import React from 'react';
import { ITestData } from 'types/stateTypes';

interface ITestProps {
    testProp: string;
    testArr: ITestData[];
    startEditTest: (testData: ITestData) => void;
    startRemoveTest: (id: string) => void;
}

interface ITestState {
    test: any;
}

export class Test extends React.Component<ITestProps, ITestState> {
    onEdit = (testData: ITestData) => {
        this.props.startEditTest(testData);
    };
    onRemove = (id: string) => {
        this.props.startRemoveTest(id);
    };

    render() {
        return (
            <div className="Test">
                <h1>{this.props.testProp}</h1>
                {this.props.testArr.map((testData: ITestData) => (
                    <div key={testData.id}>
                        <p>{testData.desc}</p>
                        <button onClick={() => this.onRemove(testData.id)}>Remove Test</button>
                        <button onClick={() => this.onEdit({ id: 'test', desc: 'pootis', modDate: 199345 })}>
                            Edit Test
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Test;
