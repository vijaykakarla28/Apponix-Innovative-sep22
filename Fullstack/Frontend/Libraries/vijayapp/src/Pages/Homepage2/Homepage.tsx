import Grid from '@mui/system/Unstable_Grid'
import  Drawer  from '../../Components/Drawer2/Drawer'
import { BottomNavigation } from '@mui/material'


export const Homepage = () => {
      return (<>
      
<Grid
container
direction="row"
justifyContent="center"
alignItems="center"
color="darkorange"
>


<Drawer/>
</Grid>
<Grid container
direction="row"
justifyContent="center"
alignItems="center"
color="rebeccapurple"
borderColor="blueviolet">
    <BottomNavigation/>
</Grid>
      
      </>)
}