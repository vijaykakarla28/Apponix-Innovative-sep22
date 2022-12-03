import { Container, Grid } from "@mui/material";
import { Mycard } from "../../Components/Mycards/Mycard";
import { Mycarousel } from "../../Components/carousels/Mycarousel";
import img4 from '../../images/4.jpeg'
import img5 from '../../images/5.jpeg'
import img6 from '../../images/6.jpeg'



export const Home = () => {

    return (<>
        <Container maxWidth="xl" >

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >

                <Mycarousel />
            </Grid>
            <br />
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Mycard img={img4} />
                <Mycard img={img5} />
                <Mycard img={img6} />

            </Grid>

            <Grid>
                
            </Grid>

        </Container>



    </>)
}