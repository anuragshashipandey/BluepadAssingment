import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {FormHelperText} from '@material-ui/core';
import "../Style/Review.css";

function Review(props) {
    // const [userdetails, setuserdetails] = useState([{name:"Rahul Sharma",email:"rahul@gmail.com",suggestion:"Great Website", star:"5"}]);
    const [sugg, setsugg] = useState('');
    const [username, setusername] = useState('');
    const [useremail, setuseremail] = useState('');
    return (
            <div className='Suggestionbox'>
                <h4>We will appreciate your valuable feadback</h4>
                <form className="formbox" onSubmit={e=>{
                    e.preventDefault();
                   if(username.length>0&&sugg.length>0) 
                        props.setuserdetails([...props.userdetails,{name:username,email:useremail,suggestion:sugg, star:props.star}])
                   setsugg('');
                   setusername('');
                   e.target.reset();
                }}
                noValidate autoComplete="off">
                    <FormControl id="outlined-basic" required={true}> 
                        <TextField id="outlined-basic" variant="outlined" label="Enter Usename*" onChange={e=>(setusername(e.target.value))}/>
                    </FormControl> 
                    <div className="space"/>
                    <FormControl id="outlined-basic" required={true}> 
                        <TextField id="outlined-basic" variant="outlined" label="Enter Email" onChange={e=>(setuseremail(e.target.value))}/>
                        <FormHelperText id="outlined-basic">We'll never share your email.</FormHelperText>
                    </FormControl> 
                    <div className="space"/>
                    <FormControl id="outlined-basic" required={true}>
                        <TextField id="outlined-basic" variant="outlined" label="Write Suggestions*" minRows={3} onChange={e=>(setsugg(e.target.value))}/>
                        <FormHelperText id="outlined-basic">We will be happy to hear your critisim 😃 </FormHelperText>
                    </FormControl> 
                    <input className="submit-btn" onSubmit type="submit" value="Submit" />
                </form>
            </div>
        
    )
}

export default Review
