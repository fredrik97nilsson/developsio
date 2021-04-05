import React from 'react';


const testList=['Fredrik','Anton','Stella']

function StartPage() {
    return (
        <div>
            {testList.map((name)=><h1>{name}</h1>)}
            
        </div>

    );
}

export default StartPage;