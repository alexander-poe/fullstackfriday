import React from 'react';
// import {connect} from 'react-redux';


export  default class CheeseList extends React.Component {
    constructor(props) {
    super(props);
  }

    render(props) {

      return(

          <ul>
            {this.props.cheeses}
          </ul>

      );
    }
}

// const mapStateToProps = (state, props) => ({
//   cheeses: state.cheeses
// });
//
// export default connect(mapStateToProps)(CheeseList);
