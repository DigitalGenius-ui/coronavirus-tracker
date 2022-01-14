import { Box, Collapse, IconButton, makeStyles, Table, TableBody, 
TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React, { useState } from 'react';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    table:{
      "&:hover":{
        backgroundColor : "#00000045",
      }
    }
  });

const SingleCorona = ({virus}) => {
    const classes = useRowStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow className={classes.root}>
              <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {virus.Country_text}
              </TableCell>
              <TableCell align = {"right"} style={{color  :"#ff0000",  fontWeight: "600"}}>{virus["Total Cases_text"]}</TableCell>
              <TableCell align = {"right"} style={{color : "#ff0000",  fontWeight: "600"}}>{virus["Total Deaths_text"]}</TableCell>
              <TableCell align = {"right"} style={{color : "green",  fontWeight: "600"}}>{virus["Total Recovered_text"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                    <Typography variant="h6" gutterBottom component="div">
                      More Info 
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Last Update</TableCell>
                          <TableCell>New Cases</TableCell>
                          <TableCell >New Deaths</TableCell>
                          <TableCell >Active Cases</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                          <TableRow >
                            <TableCell component="th" scope="row">
                                {virus["Last Update"]}
                            </TableCell>
                            <TableCell>{virus["New Cases_text"]}</TableCell>
                            <TableCell >{virus["New Deaths_text"]}</TableCell>
                            <TableCell >
                              {virus["Active Cases_text"]}
                            </TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
        </>
    )
}

export default SingleCorona
