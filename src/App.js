

import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TeamCard from "./components/TeamCard";
import teams from "./teams.json";


class App extends Component {
  // Setting this.state.teams to the teams json array
  state = {
    teams: teams,
    score: 0,
    highscore: 0,
    arr: []
  };

  
  
  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        // console.log(this.state.highscore)
      });
    }

  }

  handleClick = (id) => {

    this.setState((prevState, arr) => ({
      score: prevState.score + 1,
      test: this.state.arr.push(id)
    }));
    this.state.teams.sort(() => Math.random() - 0.5)
    return true;



    // function addToArray(count){
    //   id.push(count)
    // }
    console.log(this.state.score)
    console.log(id)
    this.endGame()
  } 



  // Map over this.state.teams and render a teamCard component for each team object
  render() {
    return (
      <Wrapper>
        <Title>Teams</Title>
        <div>Score:{this.state.score}</div>
        <div>High Score:{this.state.score}</div>
        <br/>
        {this.state.teams.map(team => (
          <TeamCard
            id={team.id}
            key={team.id}
            name={team.name}
            image={team.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}



export default App;
