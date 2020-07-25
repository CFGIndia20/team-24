import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"

class Leaderboard extends Component {
    state = {
        users: [
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
        ]
    }
    render() {
        return (
            <>
                <SidebarComponent />
                <div className="main">
                    <div className="container main-content">
                        <div id="container">
                            <div className="row-leaderboard">
                                <div className="name" style={{ fontWeight: "bold" }}>Name</div><div className="score"
                                    style={{ fontWeight: "bold" }}>Score</div>
                            </div>
                            {this.state.users.map(user => (
                                <div className="row-leaderboard">
                                    <div className="name">{user.name}</div><div className="score">{user.score}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Leaderboard;