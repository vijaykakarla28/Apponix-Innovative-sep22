import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

interface IMyautocomplete{}
export const Myautocomplete:React.FC<IMyautocomplete>=(props)=>{
var [movies,setMovies]=useState()
var handleOnchange=(e:any,val:any)=>{
    console.log(val)
    setMovies(val.label)}

return <>
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={mydata}
  sx={{ width: 300 }}
  onChange={handleOnchange}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
{movies}
</>
}
var mydata=[
    {lable:'kantara',value:'1'},
    {lable:'Avengers',value:'2'},
    {lable:'Kgf',value:'3'},
    {lable:'IronMan',value:'4'},
    {lable:'Doctor strange',value:'5'}
]
