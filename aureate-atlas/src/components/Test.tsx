import React from 'react';
import { ITestData } from 'types/stateTypes';

// Interface describing props being passed by parent component (in this case, some by a combination of react states and redux states)
interface ITestProps {
    testProp: string;
    testArr: ITestData[];
    startEditTest: (testData: ITestData) => void;
    startRemoveTest: (id: string) => void;
}

export class Test extends React.Component<ITestProps, unknown> {
    onEdit = (testData: ITestData) => {
        this.props.startEditTest(testData);
    };
    onRemove = (id: string) => {
        this.props.startRemoveTest(id);
    };

    render() {
        return (
            <div className="test-root">
                <h1>{this.props.testProp}</h1>
                <div>
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
            </div>
        );
    }
}

export default Test;
