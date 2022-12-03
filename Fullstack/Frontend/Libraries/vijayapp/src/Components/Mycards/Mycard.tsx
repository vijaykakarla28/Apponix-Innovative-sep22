import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, green, orange, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './mycss.css'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface IMycard{
  img:string,
  title?:string,
  price?:string
};
export const  Mycard:React.FC<IMycard>=(props)=> {
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:'red' }} aria-label="recipe">
            $
          </Avatar>
        }
        action={
          <IconButton sx={{bgcolor:green[500]}} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Electronic Gadgets"
        subheader="December 1, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ bgcolor:red[500] }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{bgcolor:blue[500]}} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{color:orange[500]}} paragraph>
          Electronic items that are available near us
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
