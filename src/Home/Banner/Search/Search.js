import React ,{useState} from 'react'
import './Search.css' ;
import {DateRangePicker} from 'react-date-range';
import {Button} from '@material-ui/core'
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import "react-date-range/dist/styles.css";  //main style file
import "react-date-range/dist/theme/default.css";   
const Search = () => {
    const [ startDate, setStartDate ] = useState(new Date() )
    const [ endDate , setEndDate ] = useState(new Date((new Date()).getTime() + 24*60*60*1000) )
    
    const selectionRange ={
        startDate:startDate , 
        endDate:endDate , 
        key : 'selection'
    }
    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className='search'>
           <DateRangePicker
            ranges = {[selectionRange]}
            onChange={handleSelect}
           />
           <h2>
               Number of Guests <PeopleOutlineRoundedIcon/>
           </h2>
           <input 
            min={0}
            max={60}
            defaultValue={2}
            type="number"
           />
           <Button>
               Search Airbnb
           </Button>
        </div>
    )
}

export default Search
