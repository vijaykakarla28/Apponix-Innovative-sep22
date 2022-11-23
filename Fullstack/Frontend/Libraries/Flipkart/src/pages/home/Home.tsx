import { Container, Grid } from "@mui/material"
import { MyH1, MyState } from "../../components"
import { Mycarousel } from "../../components/carousels/Mycarousel"
import { Rating1 } from "../../components/mui/Ratings/Rating1"
import {Mycard} from "../../components/mycards/Mycard"
import { MyNavbar } from "../../components/navbar/MyNavbar"
import img1 from '../../images/2.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/4.jpg'


// interface Itest{
//     a:string
// }
// const Test:React.FC<Itest>=(props)=>{
//    console.log(props.a) 
//     //alert('hello')
//     return <></>
// }

// function test(a:object){
//    // alert(a)
//     console.log(a)

// }
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
            <br/>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
<Mycard img={img1}/>
<Mycard img={img2}/>
<Mycard img={img3}/>



            </Grid>

        </Container>



    </>)
}


{/* <h1>my topics</h1>
<ol>
 <li><MyState/></li>
 <li><Rating1/></li>
</ol>


<MyH1 a={"hello"} bg={"blue"}/> */}