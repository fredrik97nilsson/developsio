
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

    }

    return (
            <div>
                <CreateProfile objekt={stateObject} handleChanged={handleChange} />
                <h3>Namn</h3><br/>
                <h3>{stateObject.firstName}</h3>
                <h3>Efternamn</h3><br/>
                <h3>{stateObject.lastName}</h3>
                <h3>Email</h3><br/>
                <h3>{stateObject.email}</h3>
                <h3>Skype</h3><br/>
                <h3>{stateObject.skype}</h3>
                <h3>Adress</h3><br/>
                <h3>{stateObject.adress}</h3>
                <h3>Zip</h3><br/>
                <h3>{stateObject.zip}</h3>
                <h3>Town</h3><br/>
                <h3>{stateObject.town}</h3>
                <h3>Phone</h3><br/>
                <h3>{stateObject.phone}</h3>
            </div>
    );
}

export default LoginPage;