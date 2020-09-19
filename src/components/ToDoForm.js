import React, { Component } from 'react'
import { render } from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import useUser from "../_hooks/useUser";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

class Clock extends Component {
    constructor() {
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {

            currentDate: date

        }

    }
}


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function ToDoForm() {
    const classes = useStyles();
    const [cla, setClass] = React.useState('');

    const handleChange = (event) => {
        setClass(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="TaskName">Task</InputLabel>
                <BootstrapInput id="TaskName" />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="className">Class</InputLabel>
                <Select
                    labelId="className"
                    id="name"
                    value={cla}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <form className={classes.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Due Date"
                    type="datetime-local"
                    defaultValue="2020-01-01T11:59"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <p>{this.date.currentDate}</p>
            <Button variant="contained">Submit</Button>
        </div>
    );

}

export default ToDoForm;