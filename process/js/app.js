var React = require('react');
var ReactDOM = require('react-dom');

var AptList = require('./AptList');
var AddAppointment = require('./AddAppointment');
var SearchAppointments = require('./SearchAppointments');

var MainInterface = React.createClass({
	getInitialState: function(){
		return {
			 data : [
				{
					"perName": "Spot",
					"ownerName": "Jacob Plumb",
					"aptDate": "2016-06-24",
					"aptNotes": "This is Something"
				},
				{
					"perName": "Frank",
					"ownerName": "Jacob Plumb",
					"aptDate": "2016-06-24",
					"aptNotes": "This is Something 2"
				},
				{
					"perName": "Hoe",
					"ownerName": "Jacob Plumb",
					"aptDate": "2016-06-24",
					"aptNotes": "This is Something 3"
				}
			]
		}
	},

	render: function() {
		return (
			<div className="interface">
				<ul className="item-list media-list">	
					<li className="pet-item media">
						<div className="pet-info media-body">
							<div className="pet-head">
								<span className="pet-name">{this.state.data[0].petName}</span>
								<span className="apt-date pull-right">{this.state.data[0].aptDate}</span>
							</div>
							<div className="owner-name">
								<span className="label-item">Owner:</span>
								{this.state.data[0].ownerName}
							</div>
							<div className="apt-notes">
								{this.state.data[0].aptNotes}
							</div>
						</div>
					</li>
				</ul>
			</div>
		)
	}
});

ReactDOM.render(
	<MainInterface />,
	document.getElementById('petAppointments')
);