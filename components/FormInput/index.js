import React, {forwardRef, useState, useImperativeHandle} from 'react';
// import {useTranslator} from "translator";
import styles from "./FormInput.module.css";
import {TextField} from "@mui/material";

const Input = ({name, label, onChange, ...props}, ref) => {
    // const {__} = useTranslator();
    const [value, setValue] = useState('');

    useImperativeHandle(ref, ()=> ({
        setValue
    }), [])

    return (
        <TextField
            fullWidth
            id={name}
            name={name}
            value={value}
            label={label}
            variant="filled"
            onChange={(e) => {
                const {value, name} = e.target;
                if(onChange) onChange({value, name});
                setValue(value);
            }}
            className={styles.formControl}
            {...props}
        />
    );
};

export default forwardRef(Input);