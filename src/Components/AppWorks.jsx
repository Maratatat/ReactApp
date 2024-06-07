import React from 'react';

const AppWorks=()=>{
    return (
        <div>
            <div>
                App works!
            </div>
            {React.createElement("button", {
                disabled: false,
                onClick: () => console.log('clicked')
            }, 'App works!')}
        </div>
    )
}

export default AppWorks;