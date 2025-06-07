
import React from 'react';

interface Props {
  name: string;
  age: number;
}

const UserProfile: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
};

export default UserProfile;

