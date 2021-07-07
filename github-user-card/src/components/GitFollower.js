import React from 'react';

const GitFollower = props => {

    return (
        <div className="gitFollower">
            {props.followers.map(follower => {
                return (
                    <div>
                        <img src={follower.avatar_url}/>
                        <p>{follower.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default GitFollower;