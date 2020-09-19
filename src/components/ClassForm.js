import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import useUser from "../_hooks/useUser";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

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

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

function ClassForm() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
    setAge(event.target.value);
  };

return( 
    <div>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="ClassName">Class</InputLabel>
            <BootstrapInput id="name" />
        </FormControl>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="InstructorName">Instructor</InputLabel>
            <BootstrapInput id="instructor" />
        </FormControl>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="Location">Location</InputLabel>
            <BootstrapInput id="location" />
        </FormControl>
        <form className={classes.container} noValidate>
            <TextField
                id="start"
                type="time"
                label="Start Time"
                defaultValue="08:00"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        </form>
        <form className={classes.container} noValidate>
            <TextField
                id="end"
                type="time"
                label="End Time"
                defaultValue="09:00"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        </form>  
        <form>
            <label>
                Day
                <br></br>
                <select id="day" name="day">
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </label>
        </form>
        <Button type="submit" id="submit">Submit</Button>
    </div>
    );
}





export default ClassForm;