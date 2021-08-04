import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import "../Style/Review.css";

function Review(props) {
    const [userdetails, setuserdetails] = useState([{name:"Rahul Sharma",email:"rahul@gmail.com",suggestion:"Great Website", star:"5"}]);
    const [sugg, setsugg] = useState('');
    const [username, setusername] = useState('');
    const [useremail, setuseremail] = useState('');
    return (
            <div className='Suggestionbox'>
                <h4>We will appreciate your valuable feadback</h4>
                <form className="formbox" onSubmit={e=>{
                    e.preventDefault();
                    setuserdetails([...userdetails,{name:username,email:useremail,suggestion:sugg, star:props.star}])
                    e.target.reset();
                }}
                noValidate autoComplete="off">
                    <TextField id="outlined-basic" variant="outlined" label="Enter Usename" onChange={e=>(setusername(e.target.value))}/>
                    <div className="space"/>
                    <TextField id="outlined-basic" variant="outlined" label="Enter Email" onChange={e=>(setuseremail(e.target.value))}/>
                    <div className="space"/>
                    <TextField id="outlined-basic" variant="outlined" label="Write Suggestions" minRows={3} onChange={e=>(setsugg(e.target.value))}/>
                </form>
            </div>
        
    )
}

export default Review
