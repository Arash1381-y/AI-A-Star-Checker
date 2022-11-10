import React from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import {styled, TextField, Button, Grid, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Page from "../components/Page";


const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    nodesNumber: yup
        .number('enter vertices number')
        .required('vertices number is required')
    ,
    edgesNumber: yup
        .number('enter edges number')
        .required('edges number is required')
    ,
    edgesList: yup
        .string('enter edges')
        .required('edges is required')
    ,
    stepsList: yup
        .string('enter steps')
        .required('steps is required')
    ,
})

const jsonSchema = yup.object({
    object: yup
        .string('enter obejcet')
        .required('obejcet is required')
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
            nodesNumber: 0,
            edgesNumber: 0,
            edgesList: '',
            stepsList: '',
        }
        ,
        validationSchema: initSchema,
        onSubmit: (values) => {
            navigate('/my-implementation', {state: values})
        }

    });

    const jsonForm = useFormik({
        initialValues: {
            object: '',
        }
        ,
        validationSchema: jsonSchema,
        onSubmit: (values) => {
            let props = JSON.parse(values.object)
            navigate('/my-implementation', {state: props})
        }
    });


    return (
        <Page>
            <Container maxWidth="xs">
                <Typography sx={{marginTop: '1rem', color: '#2abccb'}} align={'center'} variant={'h4'} gutterBottom>Graph
                    Data</Typography>
                <Box sx={formStyle}>
                    <form onSubmit={initForm.handleSubmit}>
                          <StyledTexField
                            id="nodesNumber"
                            name="nodesNumber"
                            label="vertices number"
                            type="number"
                            variant="outlined"
                            value={initForm.values.nodesNumber}
                            onChange={initForm.handleChange}
                            error={initForm.touched.nodesNumber && Boolean(initForm.errors.nodesNumber)}
                            helperText={initForm.touched.nodesNumber && initForm.errors.nodesNumber}
                        />
                        <StyledTexField
                            id="edgesNumber"
                            name="edgesNumber"
                            label="edges number"
                            type="number"
                            variant="outlined"
                            value={initForm.values.edgesNumber}
                            onChange={initForm.handleChange}
                            error={initForm.touched.edgesNumber && Boolean(initForm.errors.edgesNumber)}
                            helperText={initForm.touched.edgesNumber && initForm.errors.edgesNumber}
                        />
                        <StyledTexField
                            id="edgesList"
                            name="edgesList"
                            label="edges"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={initForm.values.edgesList}
                            onChange={initForm.handleChange}
                            error={initForm.touched.edgesList && Boolean(initForm.errors.edgesList)}
                            helperText={initForm.touched.edgesList && initForm.errors.edgesList}
                        />
                        <StyledTexField
                            id="stepsList"
                            name="stepsList"
                            label="steps"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={initForm.values.stepsList}
                            onChange={initForm.handleChange}
                            error={initForm.touched.stepsList && Boolean(initForm.errors.stepsList)}
                            helperText={initForm.touched.stepsList && initForm.errors.stepsList}
                        />
                        <FormButton variant="contained" fullWidth type="submit">
                            Submit
                        </FormButton>
                    </form>
                </Box>
                <Box>
                    <StyledTexField
                        fullWidth
                        id="object"
                        name="object"
                        label="object"
                        multiline
                        rows={4}
                        value={jsonForm.values.object}
                        onChange={jsonForm.handleChange}
                        error={jsonForm.touched.object && Boolean(jsonForm.errors.object)}
                        helperText={jsonForm.touched.object && jsonForm.errors.object}
                    />
                    <FormButton variant="contained" fullWidth type="submit" onClick={jsonForm.handleSubmit}>
                        Submit
                    </FormButton>
                </Box>
            </Container>
        </Page>
    );
}

export default GraphForm;