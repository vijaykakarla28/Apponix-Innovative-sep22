import { BottomNavigation, Container, Drawer, Grid } from "@mui/material";
import { MyH1, MyState } from "../../Components";
import { Mycard } from "../../Components/Mycards/Mycard";
import { Mycarousel } from "../../Components/carousels/Mycarousel";
import { Rating1 } from "../../Components/mui/Rating/Rating1";
import { MyNavbar } from "../../Components/Navbar/MyNavbar";
import img1 from '../../images/1.jpeg'
import img2 from '../../images/2.jpeg'
import img3 from '../../images/3.jpeg'
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
                <Mycard img={img4} />
                <Mycard img={img5} />
                <Mycard img={img6} />

            </Grid>

        </Container>



    </>)
}