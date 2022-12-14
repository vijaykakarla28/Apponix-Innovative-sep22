import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import {Rating1} from "../mui/Rating/Rating1"

interface Irating{
    count:number,
    rate:number
}
interface ICard2{
    description:string,
    image:string,
    price:number,
    rating:Irating,
    title:string


}
export const Card2:React.FC<ICard2>=(props)=>{
    return <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description} <br />  <b/> Price:${props.price}<b/> <br />
          <Rating1/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
}