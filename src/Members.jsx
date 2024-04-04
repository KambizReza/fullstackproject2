import React from 'react';

function Members() {
    return (
        <div>
        <h1>Members</h1>
        <div className="grid-container">
            <div className="person"> <img src="tom.jpg" alt="Tom"/> <p>Tom Guan</p> </div>
            <div className="person"> <img src="stephanus.jpg" alt="Stephanus"/> <p>Stephanus Yang</p> </div>
        </div>
        </div>
    );
}

export default Members;