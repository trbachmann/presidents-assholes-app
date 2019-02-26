import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import './CardContain.css';

export const CardContain = (props) => {
  const { presidents, currentParty } = props;
  let presidentsToDisplay = [];

  if (currentParty === 'All') {
    presidentsToDisplay = presidents.map(currPresident => {
      return <Card president={currPresident} key={currPresident.number} />
    });
  } else {
    presidentsToDisplay = presidents.reduce( (acc, currPresident) => {
      if (currPresident.party === currentParty) {
        acc = [acc, <Card president={currPresident} key={currPresident.number} />]
      }
      return acc;
    }, []);
  }
  
  return(
    <div className='CardContain'>
      { presidentsToDisplay }
    </div>
  );
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
  currentParty: state.currentParty
});

export default connect(mapStateToProps)(CardContain);