import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/cheese.js';


export class CheeseList extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.dispatch(actions.fetchCheeses());
    }

    render(props) {
      let cheeseList = this.props.cheese.map((cheese, index) => {
        return <li key={index}> {cheese} </li>
      });
      console.log('YOOOO',this.props.cheese)
      return(
          <ul>
            {cheeseList}
          </ul>
        );
    }
}

const mapStateToProps = (state, props) => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
