import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

var About = React.createClass({

    render() {

        return (
            <Jumbotron id='about' componentClass='section'>
                <div className="page-header">
                    <h1>Me <small>in a nutshell</small></h1>
                </div>
                <div className="portrait pull-right">
                    <div className="portrait-image">
                        <img src="images/profiles/bitstrip_001.jpg"/>
                    </div>
                </div>
                <p>Hi, I'm a progressive web technologist focused on creating beautiful, easy to use, goal oriented web applications using cutting edge technologies across all devices.  I am not just a "web developer", I love working in the full stack. Making sure that some pesky Javascript is not causing too many repaints, and that some RESTful service is performing at scale is my passion.</p>

                <p>That said, I also understand that great stacks are best created by great teams.  I love working with others to help create a positive and winning user experience. Creating positive working relationships, collaborations with my peers, and helping increase the overall productivity of my working environment is something I strive for in any setting.</p>

                <p>Forever learning, forever evolving, that's me in a nutshell.</p>

                <p>Find out more about me, the `projects.status === 'done' ? 'I've worked on' : 'I'm working on'`, and some of my hobbies below.</p>
            </Jumbotron>
        );
    }
});

export default About;
