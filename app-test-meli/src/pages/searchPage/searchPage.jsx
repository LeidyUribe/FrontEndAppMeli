import React, {Fragment} from 'react';
import NavBar from '../../components/navBar';
import Form from 'react-bootstrap/Form';
import Button from "../../components/button";
import TextField from '../../components/textField';
import "./styles.scss"

const SearchPage = () => {
const onChangeHandler = (e) => {
    console.log(e.target.value);
    };
const onHandleClick = () => {}

    return (
        <Fragment>
            <NavBar onChangeHandler={onChangeHandler}>
                <Form>
                    <div className="formAlign">
                        <TextField
                            type="text"
                            placeholder="Nunca dejes de buscar"
                            className="inputStyle"
                        />
                        <Button 
                            id="buscar"
                            type={"button"}
                            variant="success"
                            onClick={onHandleClick}
                            >
                            Buscar
                        </Button>
                    </div>
                </Form>
            </NavBar>
        </Fragment>
    )
}

export default SearchPage
