import { Container, Grid } from "@mui/material";
import { MyH1, MyState } from "../../Components";
import { Mycard } from "../../Components/Mycards/Mycard";
import { Mycarousel } from "../../Components/carousels/Mycarousel";
import { Rating1 } from "../../Components/mui/Rating/Rating1";
import { MyNavbar } from "../../Components/Navbar/MyNavbar";
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'

export const Home = () => {

    return (<>
        <Container maxWidth="xl" >

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >

                <MyNavbar />



            </Grid>

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
                <Mycard img={img1} />
                <Mycard img={img2} />
                <Mycard img={img3} />



            </Grid>

        </Container>



    </>)
}