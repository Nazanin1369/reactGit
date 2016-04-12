var React = require('react');


var Notes = React.createClass({
    render: function() {
    	console.log('notes: ', this.props.notes)
        return (
            <div>
                <p> NOTES! </p>
            </div>
        )
    }
});

module.exports = Notes;