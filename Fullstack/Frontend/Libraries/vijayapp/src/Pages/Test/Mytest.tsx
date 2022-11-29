import { Container, Grid } from "@mui/material"
import { Pag } from "../../Components/Test/Pag"
import { Cards } from "../../Components/Test/Cards"
import { Navbar2 } from "../../Components/Test/Navbar2"
import img6 from "../../images/6.jpg"
import img7 from "../../images/7.jpg"
import img8 from "../../images/8.jpeg"
import img9 from "../../images/9.jpg"
import Form from "../../Components/Test/Form"
import Close from "../../Components/Test/Close"
import { red } from "@mui/material/colors"
import FloatingActionButtons from "../../Components/Test/Floating-action-button"



export const Mytest = () => {
    return (<>
        <Container maxWidth="xl">
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <Navbar2 />
            </Grid>
            <br />
         
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
            >
                <Cards img={img7}  />
                <Cards img={img8}  />
                <Cards img={img9}  />
                
            </Grid>
            <br />
            <Grid
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
           
        </Container>
    </>)
}