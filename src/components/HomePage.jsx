import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import CoronaFetch from './CoronaFetch';

const HomePage = () => {

    const useStyle = makeStyles((theme) => ({
        header:{
            textAlign : "center",
            padding: "2rem 0",
        },
        corona:{
            width : "85%",
            margin: "0 auto",
        },
    }));
    const classes = useStyle();

    return (
        <Container>
            <div className={classes.header}>
                <h1>Global CoronaVirus Tracker</h1>
            </div>
            <div className={classes.corona}>
                <CoronaFetch/>
            </div>
        </Container>
    )
}

export default HomePage
