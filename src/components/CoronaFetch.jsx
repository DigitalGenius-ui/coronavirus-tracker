import { makeStyles, Table, TableBody, TableCell, 
TableHead, TableRow, TableContainer, Paper, LinearProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCorona from './SingleCorona';

const CoronaFetch = () => {

    const [virusList, setVirusList] = useState([]);
    const [cut, setCut] = useState(1);
    // const [searchBar, setSearchBar] = useState("");
    // const [outPut, setOutPut] = useState([]);
    const [loading, setLoading] = useState(false);
    const useStyle = makeStyles((theme) => ({
        country:{
            paddingBottom : "0.5rem",
        },
        table:{
          marginTop: "1rem",
        }
    }));

    const classes = useStyle();
    const coronaFetch = async () => {
      setLoading(true)
      const data = await axios.get("https://covid-19.dataflowkit.com/v1")
      console.log(data.data);
      setVirusList(data.data);
      setLoading(false)
    }
    useEffect(() => {
    coronaFetch();
    },[]);

    // useEffect(() => {
    //   setOutPut([])
    //   virusList.filter((list) => {
    //     if(list.Country_text.toLowerCase().includes(searchBar.toLowerCase())){
    //       setOutPut(output => [...output, list])
    //     }
    //   })
    // },[searchBar]);

    if(loading){
      return <span><LinearProgress color="secondary"/></span>
    }

    return (
        <>
          <div>
              {/* <p className={classes.country}>Search For your specific country</p>
              <TextField label="Search" variant="outlined" fullWidth
              value={searchBar} onChange={e => setSearchBar(e.target.value)}
              /> */}
          </div>
              <TableContainer component={Paper} className={classes.table}>
                  <Table aria-label="collapsible table">
                    <TableHead style={{backgroundColor : "skyblue"}}>
                      <TableRow>
                        {[ "Country of Region","Positive Cases","Number Of Deaths","Recovered" ].map((name, index) => {
                            return <TableCell style={{color : "black", fontWeight : "600"}}
                            key={index} align={ "right"}>{name}</TableCell>
                        })}
                      </TableRow>
                  </TableHead>
                  </Table>
              </TableContainer>
              <Table>
                <TableBody>
                  {virusList.slice((cut - 1) * 10, (cut -1 ) * 10 + 10)
                  .map((virus, i) => (
                    <SingleCorona virus={virus} key={i}/>
                    ))}
                </TableBody>
              </Table>
                  <Pagination 
                  style={{
                    display : "flex",
                    width : "100%",
                    justifyContent : "right",
                    padding : "1rem 0",
                  }}
                  count = {23}
                  onChange={(_, value) => {
                    setCut(value);
                    window.scroll(0, -450);
                  }}
                  />
        </>
    )
}

export default CoronaFetch
