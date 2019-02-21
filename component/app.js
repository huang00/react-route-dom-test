import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
export default class App extends Component {
    render() {
        return <div>
                    <h1> App word! </h1>
                    <Link to='/test/wa'>wa</Link>
                </div>
    }
}
