import React from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import {styled, TextField, Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Page from "../components/Page";


const formStyle = {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: 'white'
}

const FormButton = styled(Button)(
    {
        background: 'linear-gradient(323deg, #2abccb, #00cc8e)',
        marginTop: '1rem',
        marginBottom: '1rem',
    }
)

const initSchema = yup.object({
    verticesNumber: yup
        .number('enter vertices number')
        .required('vertices number is required')
    ,
    edgesNumber: yup
        .number('enter edges number')
        .required('edges number is required')
    ,
    edges: yup
        .string('enter edges')
        .required('edges is required')
    ,
    steps: yup
        .string('enter steps')
        .required('steps is required')
    ,
})

const StyledTexField = styled(TextField)({
    width: '100%',
    marginBottom: '1rem'
})


function GraphForm() {
    const navigate = useNavigate()

    const initForm = useFormik({
        initialValues: {
            verticesNumber: 0,
            edgesNumber: 0,
            edges: '',
            steps: '',
        }
        ,
        validationSchema: initSchema,
        onSubmit: (values) => {

            navigate('/my-implementation', {state: values})
        }

    });


    return (
        <Page>
            <Box sx={formStyle}>
                <form onSubmit={initForm.handleSubmit}>
                    <StyledTexField
                        fullWidth
                        id="verticesNumber"
                        name="verticesNumber"
                        label="vertices number"
                        value={initForm.values.verticesNumber}
                        onChange={initForm.handleChange}
                        error={initForm.touched.verticesNumber && Boolean(initForm.errors.verticesNumber)}
                        helperText={initForm.touched.verticesNumber && initForm.errors.verticesNumber}
                    />
                    <StyledTexField
                        fullWidth
                        id="edgesNumber"
                        name="edgesNumber"
                        label="edges number"
                        value={initForm.values.edgesNumber}
                        onChange={initForm.handleChange}
                        error={initForm.touched.edgesNumber && Boolean(initForm.errors.edgesNumber)}
                        helperText={initForm.touched.edgesNumber && initForm.errors.edgesNumber}
                    />
                    <StyledTexField
                        fullWidth
                        id="edges"
                        name="edges"
                        label="edges"
                        multiline
                        rows={4}
                        value={initForm.values.edges}
                        onChange={initForm.handleChange}
                        error={initForm.touched.edges && Boolean(initForm.errors.edges)}
                        helperText={initForm.touched.edges && initForm.errors.edges}
                    />
                    <StyledTexField
                        fullWidth
                        id="steps"
                        name="steps"
                        label="steps"
                        multiline
                        rows={4}
                        value={initForm.values.steps}
                        onChange={initForm.handleChange}
                        error={initForm.touched.steps && Boolean(initForm.errors.steps)}
                        helperText={initForm.touched.steps && initForm.errors.steps}
                    />
                    <FormButton variant="contained" fullWidth type="submit">
                        Submit
                    </FormButton>
                </form>
            </Box>
        </Page>
    );
}

export default GraphForm;