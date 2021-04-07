
import React, {useState} from 'react';
import CreateProfile from '../../Components/CreateProfile/CreateProfile';



function LoginPage() {
    const [stateObject, setStateObject] = useState({firstName: '', 
    lastName: '',
    email: '',
    skype: '',
    adress: '',
    zip: '',
    town: '',
    phone: ''});

    const [users, setUsers] = useState([]);

    const handleChange = target =>  {
        const {value, name} = target;
        setStateObject((prev) => ({
            ...prev, 
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setUsers((prev)=>{
           return [...prev, stateObject]
        });
        setStateObject({
            firstName: '',
            lastName: '',
            email: '',
            skype: '',
            adress: '',
            zip: '',
            town: '',
            phone: ''
        });
    }

    return (
            <div>
                <CreateProfile objekt={stateObject} handleChanged={handleChange} onClick={handleSubmit}/>

                {users.map((user, index)=>(
                    <div>
                        <h3>User {index+1}</h3>
                        <h3>Namn: {user.firstName}</h3>
                        <h3>Efternamn: {user.lastName}</h3>
                        <h3>Email: {user.email}</h3>
                        <h3>Skype: {user.skype}</h3>
                        <h3>Adress: {user.adress}</h3>
                        <h3>Zip: {user.zip}</h3>
                        <h3>Town. {user.town}</h3>
                        <h3>Phone: {user.phone}</h3>
                    </div>    
                ))}
                
            </div>
    );
}

export default LoginPage;