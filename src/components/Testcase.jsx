import {Button, Container, styled, Typography} from "@mui/material";
import {toast} from 'react-toastify';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const TestCaseTitle = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#016aa1',
    borderBottom: '4px solid #016aa1',
    display: 'inline-block',
});

function successToast() {
    toast.success('test is copied to clipboard', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // style the progress bar
        progressStyle: {
            background: "#00d587",
        },
    });
}

const stepToString = (step) => {
    // step.index step.parent
    // step.labels
    // g and h

    //labels array to string with space between
    const labels = step.labels.join(' ');

    return `${step.index} ${step.parent} \n${labels}\n${step.g} ${step.h}\n \n`;
}

const objectCreator = (nodesNumber, edgesNumber, edgesList, stepsList) => {
    // concat each edge of the edge list to a string
    let edges = '';
    edgesList.forEach((edge) => {
        edges += edge.from + ' ' + edge.to + '\n';
    });
    // concat each step of the steps list to a string
    let steps = '';
    stepsList.forEach((step) => {
        steps = steps.concat(stepToString(step));
    });

    return {
        nodesNumber: nodesNumber,
        edgesNumber: edgesNumber,
        edgesList: edges,
        stepsList: steps,
    }
}

function Testcase({title, index, nodesNumber, edgesNumber, edgesList, stepsList, answer}) {
    return (
        <Container>
            <Button variant={'text'} gutterBottom>
                <CopyToClipboard text={JSON.stringify(objectCreator(nodesNumber, edgesNumber, edgesList, stepsList))}>
                    <TestCaseTitle variant={'h3'} onClick={successToast} gutterBottom>
                        {`${index}. ${title}: correct answer : ${answer}`}
                    </TestCaseTitle>
                </CopyToClipboard>
        </Button>

</Container>
)
}


export default Testcase