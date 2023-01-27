import React, {Fragment} from 'react';
import NavBar from '../../components/navBar/navBar';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import InputLabel from '@mui/material/InputLabel';


import "./styles.scss"

const SearchPage = () => {
const onChangeHandler = (e) => {
    console.log(e.target.value);
    };
const HandleClick = () => {}

    return (
        <Fragment>
            <NavBar onChangeHandler={onChangeHandler}>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    className={'textFieldStyle'}
                    placeholder={"Nunca dejes de buscar"}
                    endAdornment={<InputAdornment position="end">
                    <IconButton
                    onClick={HandleClick}
                    edge="end"
                  >
                        <SearchIcon />
                    </IconButton></InputAdornment>}
                    inputProps={{
                    'aria-label': 'weight',

                    }}
                />
        </FormControl>
            </NavBar>
        </Fragment>
    )
}

export default SearchPage
