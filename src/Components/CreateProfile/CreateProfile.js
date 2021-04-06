import InputField from '../UI/InputField/InputField';
import React, {useState} from 'react';


function CreateProfile(props) {
    

    return(
        <div>
            <form onSubmit> 
            <b>First name</b><br/>
            <InputField name='firstName' value={props.objekt.firstName} handleChanged={props.handleChanged}/>
            <b>Last name</b><br/>
            <InputField name='lastName' value={props.objekt.lastName} handleChanged={props.handleChanged}/>
            <b>Email</b><br/>
            <InputField name='email' value={props.objekt.email} handleChanged={props.handleChanged}/>
            <b>Skype</b><br/>
            <InputField name='skype' value={props.objekt.skype} handleChanged={props.handleChanged}/>
            <b>Adress</b><br/>
            <InputField name='adress' value={props.objekt.adress} handleChanged={props.handleChanged}/>
            <b>Zip-code</b><br/>
            <InputField name='zip' value={props.objekt.zip} handleChanged={props.handleChanged}/>
            <b>Town</b><br/>
            <InputField name='town' value={props.objekt.town} handleChanged={props.handleChanged}/>
            <b>Phone</b><br/>
            <InputField name='phone' value={props.objekt.phone} handleChanged={props.handleChanged}/>
            <button type='submit'>Create profile</button>
            </form>
        </div>
    )
}

export default CreateProfile;