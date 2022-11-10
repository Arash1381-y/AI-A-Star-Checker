import React from 'react';
import Page from "../components/Page";
import Testcase from "../components/Testcase";



function Examples() {
    const obj = require('../test.json')
    const tests = obj.Tests;
    return (
        <Page>
            <div style={{marginTop:'15%'}}>
            {
                tests.map((test, index) => {
                    return (
                        <div key={index}>
                            <Testcase
                                index={index + 1}
                                title={test.title}
                                nodesNumber={test.nodesNumber}
                                edgesNumber={test.edgesNumber}
                                edgesList={test.edgesList}
                                stepsList={test.stepsList}
                                answer={test.answer}
                            />
                        </div>

                    )
                })
            }
            </div>
        </Page>
    );
}

export default Examples;