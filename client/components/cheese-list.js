import React from 'react';

import {connect} from 'react-redux';

const CheeseList = props => {

    return(
      <div className="cheeseListArray">
        <ul>
          <li>{props.cheeses}</li>
        </ul>
      </div>
    )
  }

console.log(props.cheeses)
const mapStateToProps = (state) => ({
  cheeses: state
});

export default connect(mapStateToProps)(CheeseList);
