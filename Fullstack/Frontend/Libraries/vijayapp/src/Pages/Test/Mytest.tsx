import { Container, Grid } from "@mui/material"
import { Cards  , Pag  } from "../../Components/Test"
import img7 from "../../images/7.jpg"
import img8 from "../../images/8.jpeg"
import img9 from "../../images/9.jpg"
import Form from "../../Components/Test/Form"
import Close from "../../Components/Test/Close"
import FloatingActionButtons from "../../Components/Test/Floating-action-button"
import BottomNav from "../../Components/Test/BottomNav"
import Drawer from "../../Components/Test/Drawer"
import SearchAppBar from "../../Components/Test/SearchAppBar"



export const Mytest = () => {
    return (<>
        <Container maxWidth="xl">
        
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <SearchAppBar />
            </Grid>
            <br />
            <Grid
            container
            direction="column"
            justifyContent="right"
            alignItems="end"
            >
                <Drawer/>
            </Grid>
         <br />
            <Grid 
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Cards img={img7}  />
                <Cards img={img8}  />
                <Cards img={img9}  />
                
            </Grid>
            <br />
            <Grid style={{width: '100%'}}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            >
                <FloatingActionButtons/>
            </Grid>
            <Grid 
             container
             direction="row"
             justifyContent="center"
             alignItems="stretch"
            >
           <Form />
            </Grid>
            <br />
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            >
            <Pag/>
            </Grid>
            <br />
            <Grid 
            bgcolor="black">
                <Close />

            </Grid>
            <br />
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            >
                <BottomNav/>
            </Grid>
           
        </Container>
    </>)
}