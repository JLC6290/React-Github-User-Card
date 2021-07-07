import React from 'react';

const GitUser = props => {
    return(
        <div className="userCard">
            <img src={props.users.avatar_url} alt="Profile picture"/>
            <h3>{props.users.name}</h3>
            <p>Bio: {props.users.bio}</p>
            <p>Followers: {props.users.followers}</p>
            <p>Following: {props.users.following}</p>
        </div>
    )
}
export default GitUser;