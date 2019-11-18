import React from 'react';
import {View, Text, Image} from 'react-native';
const PET_DATA = {
  name: 'Gizmo',
  age: '5',
  images: require('./src/img/bird.jpg'),
};
const OWNER_DATA = {
  name: 'Daniyah Bai',
  contact: '97502219',
  membership: 'Gold',
};

const Lesson05quiz = () => {
  let petdata = [];
  let petowner = [];
  petdata.push(<Text>Name:</Text>);
  petdata.push(<Text key={PET_DATA.name}>----------{PET_DATA.name}</Text>);
  petdata.push(<Text>Age:</Text>);
  petdata.push(<Text key={PET_DATA.age}>----------{PET_DATA.age} years old</Text>);
  petdata.push(<Image source={PET_DATA.images} />);
  console.log(petdata);
  petowner.push(<Text>Owner Information</Text>);
  petowner.push(<Text>----------</Text>);
  petowner.push(<Text>Name:</Text>);
  petowner.push(<Text key={OWNER_DATA.name}>----------{OWNER_DATA.name}</Text>);
  petowner.push(<Text>Contact:</Text>);
  petowner.push(<Text key={OWNER_DATA.contact}>----------{OWNER_DATA.contact}</Text>);
  petowner.push(<Text>Membership:</Text>);
  petowner.push(<Text key={OWNER_DATA.membership}>----------{OWNER_DATA.membership}</Text>);
  console.log(petowner);
  return (
    <View>
      {petdata}
      {petowner}
    </View>
  );
};

export default Lesson05quiz;
