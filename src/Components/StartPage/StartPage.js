import React from 'react';

import CreateProfile from '../CreateProfile/CreateProfile';

function StartPage() {
    return(
        

        <div className={classes.StartPageHeader}>
            <CreateProfile/>
        </div>

        
    );
}

export default StartPage;