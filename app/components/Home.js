 var React = require('react');
 var ReactRouter = require('react-router');

 
 
 var Home = React.createClass({
	 render: function(){
		 return (
			<div className='jumbotron col-sm-12 text-center'>  
				<h1>Weather App</h1>
				<p className='lead'>Sun is Shining</p>
				
			</div>
		 )
	 }
 })
 
 module.exports = Home;