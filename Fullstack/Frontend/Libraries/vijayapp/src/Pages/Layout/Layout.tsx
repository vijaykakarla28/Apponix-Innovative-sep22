import { Container, Grid } from "@mui/material";
import { MyNavbar } from "../../Components/Navbar";


interface ILayout{
    children:any;
}
export const Layout:React.FC<ILayout>=(props)=>{
    return <>
 <Container>
    <Grid>
        <MyNavbar/>
        </Grid>
        </Container>   
        {props.children}
    </>
}