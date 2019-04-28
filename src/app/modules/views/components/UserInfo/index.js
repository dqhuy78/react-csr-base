import React from 'react';

const UserInfo = (props) => (
    <div className="UserInfo">
        Username: {props.user.get('username')}
    </div>
);

export default UserInfo;
