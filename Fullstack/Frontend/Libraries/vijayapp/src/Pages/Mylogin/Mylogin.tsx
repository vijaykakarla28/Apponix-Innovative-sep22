import {Container , Grid } from "@mui/material"
import { Myautocomplete, Myform } from "../../Components"

export const Mylogin:React.FC<{}>=()=>{
return <>
<Container maxWidth="xl" >
    <Grid>
        navbar
    </Grid>
    <Grid>
        Autocomplete
        <Myautocomplete/>
    </Grid>
    <Grid>
        form 
        <Myform />
    </Grid>
</Container>
</>
}