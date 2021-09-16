import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Select = ({items, onChange, label, defaultValue, includeAll = true, includeNone = true}) => {
    const classes = useStyles();

    const [item, setItem] = React.useState(defaultValue);

    const handleChange = (event) => {
        setItem(event.target.value);
        onChange(event.target.value)
    };

    return(
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <MuiSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item}
                onChange={handleChange}
                defaultValue={defaultValue}
            >
                {
                    includeAll && <MenuItem value={"all"}>
                        <em>All</em>
                    </MenuItem>
                }
                {
                    includeNone &&
                    <MenuItem value={"none"}>
                        <em>None</em>
                    </MenuItem>
                }
                {
                    items.map(({title, value}) =>
                         <MenuItem value={value}>{title}</MenuItem>
                    )
                }
            </MuiSelect>
        </FormControl>
    );
}

export default Select;
