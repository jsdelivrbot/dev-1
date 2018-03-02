import React, {Component} from 'react';
import axios from 'axios';

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadWorkoutsFromServer.bind(this);
    }
    loadWorkoutsFromServer() {
        axios.get(this.props.url)
        .then(res => {
            this.setState({data: res.data});
        })
    }
    componentDidMount() {
        this.loadWorkoutsFromServer();
    }
    render() {
        return (
            <div>
                <h2>Comments: {this.loadWorkoutsFromServer} </h2>

            </div>
        )
    }
}

export default Workout;