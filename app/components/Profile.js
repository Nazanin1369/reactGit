var React = require('react');
var Router = require('react-router');
var ReactfireMixin = require('reactfire');
var Firebase = require('firebase');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile')
var Notes = require('./Notes/Notes')


var Profile = React.createClass({
    misins: [
        ReactfireMixin
    ],
    getInitialState(){
        return {
           // notes: [1, 2, 3],
            bio: {
                name: 'naz'
            },
            repos: ['a', 'b', 'c']
        }
    },
    componentDidMount: function() {
        this.ref = new Firebase('https://githubnoter.firebaseio.com/');
        var childref = this.ref.child(this.props.params.username);
        console.log(this)
        this.bindAsArray(childref, 'notes');

    },
    componentWillUnmount: function() {
        this.unbind('notes');
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                   <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes username={this.props.params.username} notes={this.state.notes}/>
                </div>
            </div>
        )
    }
});

module.exports = Profile;