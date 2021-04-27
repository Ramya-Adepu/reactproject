// import logo from './logo.svg';
import './App.css';
import React from "react";
import Board from "./game/board";
import connect4 from './connect4.jpeg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
		<div >
      <div class="menu">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			{/* <Link to="/" >Home</Link> &nbsp;&nbsp;&nbsp;
			<Link to="/about">About</Link> &nbsp;&nbsp;&nbsp; */}
     <button class="b"><Link to="/" class="link">Home</Link></button>  &nbsp;&nbsp;&nbsp;
     <button class="b"><Link to="/about" class="link">Game</Link></button>  &nbsp;&nbsp;&nbsp;
			</div>
      <h1>Connect 4 Game</h1>
		</div>
		
		<Switch>
		  {/* <Route exact path="/">
			<Home />
		  </Route>
		  <Route path="/about">
			<About />
		  </Route> */}
      <Route exact path="/">
			<Home />
		  </Route>
		  <Route path="/about">
			<About />
		  </Route>
		</Switch>
	</Router>
  );
}

function Home() {
  return (
    <div class="home">
      <h2>Game Intructions:</h2>
      <ul>
        <h2>Description</h2>
        <img src={connect4} class="img"/>
        <li>This game is played on a vertical board wich has seven hollow columns and six rows.</li>
        <li>Each column has a hole in the upper part of the board, where pieces are introduced.</li> 
        <li>There is a window for every square, so that pieces can be seen from both sides.</li>
        <li>In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.</li> 
        <li>Both players have a set of 21 thin pieces (like coins); each of them uses a different colour.</li>
        <li>The board is empty at the start of the game.</li>
      </ul>
      <h2>Objective</h2>
      <p>The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.</p>
      <h2>How the game goes on</h2>
      <ul>
      <li>Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.</li>
      <li>Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column.</li>
      <li>So, in every turn the introduced piece may be placed at most on seven different squares.</li>
      <li>The winner is the first player who gets a straight line made with four own pieces and no gaps between them.</li>
      </ul>
    </div>
  );
}

function About() {	
  return (
    <div  class="home">
      <div class="board">
        {/* <h2>Game page</h2> */}
        <Board />
      </div>
    </div>
  );
}

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function User() {
//   let { name } = useParams();
//   return (
//     <div>
//       <h2>Current player : {name}</h2>
// 			<li><Link to="/user/player1">player1</Link></li>
// 			<li><Link to="/user/player2">player2</Link></li>
//     </div>
//   );
// }
