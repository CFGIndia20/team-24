import React, { Component } from 'react';

class CardComponent extends Component {
    state = {
        title: "hey this is the title",
        timing: "11:20-12:20",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry/. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        teacher: "Miss Braganza",
        batch: "J1",
        no_of_students: "10"
    }
    render() {
        if (this.props.info) {
            return (
                <div style={{ margin: "20px 0px" }}>
                    <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top" src="https://images.indianexpress.com/2015/04/students-l1.jpg" alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.info.company}</h4>
                            <p>{this.props.info.role}</p>
                            <p className="card-text">{this.props.info.description}</p>
                            <a href="#" className="btn">Apply</a>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src="https://images.indianexpress.com/2015/04/students-l1.jpg" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{this.state.title}</h4>
                    <p>{this.state.teacher}</p>
                    <p className="card-text">{this.state.description}</p>
                    <a href="#" className="btn btn-primary">book slot</a>
                </div>
            </div>
        );
    }
}

export default CardComponent;