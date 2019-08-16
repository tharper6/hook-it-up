import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import UserPhones from './UserPhones';
import Posts from './Posts';
import PostBody from './PostBody';

const App = () => {
    return (
        <>
            <Router>
                <div className='row mt-1 border border-dark p-2 bg-secondary justify-content-around'>
                    <Link to='/' className='btn btn-primary' >Home</Link>
                    <Link to='/users' className='btn btn-primary' >Users</Link>
                    <Link to='/posts' className='btn btn-primary' >Posts</Link>
                </div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/users' component={Users} />
                    <Route exact path='/user/:id' component={UserPhones} />
                    <Route exact path='/posts' component={Posts} />
                    <Route exact path='/post/:id' component={PostBody} />
                </Switch>
            </Router>
        </>
    )
}

export default App;