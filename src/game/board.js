import React from "react";
import './board.css';
class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:1,
            board:  [[0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0]],
            play1:"",
            play2:"",
            showStore:true,
            showStore1:true,
            showStore3:true,
            showStore4:false,
            w:"",
            w1:"",
            btn:""

        }
    }
    render(){ 
        return (
            <div class="page">
                {/* <h2>Welcome to the Game</h2> */}
                <div id="outline" style={{display: this.state.showStore3 ? 'block' : 'none' }}>
                    <div class="selection">
                        <div class="in1">
                            <label class="names">player1</label><br/>
                            <input class="input1" type="text" onChange={this.playerone} name="player1" placeholder="player1"></input>
                            <span class="red"></span>
                        </div>
                        <div class="in2">
                        <label class="names">player2</label><br/>
                            <input class="input2" type="text" onChange={this.playertwo} name="player2" placeholder="player2"></input>
                            <span class="green"></span>
                        </div>
                    </div>
                    <h3 id="player"style={{display: this.state.showStore ? 'block' : 'none' }}>{this.state.w}</h3>
                   <table>
                        <tbody>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                    <div>
                        <label></label><br/>
                            <button class="start1" id="start1" onClick={this.load} name="start1" style={{display: this.state.showStore1 ? 'block' : 'none' }}>Start</button>
                    </div>
                </div>
                <h2 id="result">{this.state.w1}</h2>
                {/* <button id="start" onClick="location.reload();" style={{display: this.state.showStore4 ? 'block' : 'none' }}>restart</button> */}
            </div>
        );
    }
    // reload=()=>{
    //     "location.reload()"
    // }
    checkVertical(board) {
        for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c] &&
                board[r][c] === board[r - 2][c] &&
                board[r][c] === board[r - 3][c]) {
                return board[r][c];    
            }
            }
        }
        }
    }

    checkHorizontal(board) {
        for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r][c + 1] && 
                board[r][c] === board[r][c + 2] &&
                board[r][c] === board[r][c + 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    
    
    checkDiagonalRight(board) {
        for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c + 1] &&
                board[r][c] === board[r - 2][c + 2] &&
                board[r][c] === board[r - 3][c + 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    
    playerone=(event)=>{
        var play1=event.target.value;
        this.setState({play1: play1});
    }
    
    playertwo=(event)=>{
        var play2=event.target.value;
        this.setState({play2: play2});
    }

    checkDiagonalLeft(board) {
        for (let r = 3; r < 6; r++) {
        for (let c = 3; c < 7; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c - 1] &&
                board[r][c] === board[r - 2][c - 2] &&
                board[r][c] === board[r - 3][c - 3]) {
                return board[r][c];
            }
            }
        }
        }
    }



    // componentDidMount()
    load=()=>
        {  
        //  document.getElementById("start1").style.display = "none";
            this.setState({showStore1:false});
        const grid= document.getElementById("outline");
        // console.log(grid)
        const cells = grid.getElementsByTagName("td");
        for(let i=0; i < cells.length; i++){
            cells[i].addEventListener("click", ()=>{
                var col = i%7
                var row = Math.floor(i/7)
                if(cells[i].style.backgroundColor !== "red" && cells[i].style.backgroundColor !=="lime"){
                    if(this.state.player === 1){
                        // var p1=document.getElementById("player1")[0].value;
                        // var p1=document.getElementsByName("player2")[0].value
                        // var p2=this.play2
                        // this.setState({play2:p2});
                        var w="Next turn: "+this.state.play2;
                        this.setState({w:w});
                        // document.getElementById("player").innerHTML=
                        cells[i].style.backgroundColor="red";
                        var b = this.state.board
                        b[row][col] = 1
                        this.setState({board: b})
                        // console.log(this.state.board, row, col)
                        this.checkWinner(b)
                        this.setState({player:2});
                    }
                    else if(this.state.player===2){
                        cells[i].style.backgroundColor="lime";
                        // var p2=this.play1
                        // this.setState({play1:p2});
                        var w="Next turn: "+this.state.play1;
                        this.setState({w:w});
                        // console.log(p2)
                        // document.getElementById("player").innerHTML="Next turn: "+`<span style="font-size:30px; color:red">${p2}</span>`;
                        b = this.state.board
                        b[row][col] = 2
                        this.setState({board: b})
                        // console.log(this.state.board, row, col)
                        this.checkWinner(b)
                        this.setState({player:1});
                    }
                }
            });
        }
    }
    checkWinner = (b) =>{
        let w = (this.checkVertical(b) || this.checkDiagonalRight(b) || this.checkDiagonalLeft(b) || this.checkHorizontal(b))
            if(w === 1){
                this.setState({showStore:false});
                var w1=this.state.play1+" won the match";
                this.setState({w1:w1})
                // document.getElementById("result").innerHTML = `<h2 class="winner">${this.state.play1}</h2><h2 class="winner"> Won The Game !!!</h2>
                // <h4 class="winner">${this.state.play2}  Better Luck Next Time</h4> `;
                // var btn="<button class='btnre' onclick='location.reload()'>play Again</button>"
                // this.setState({btn:btn});
                this.setState({showStore3:false});
                this.setState({showStore4:true});
                // break;
                // break;
            }
            else if(w === 2){
                this.setState({showStore:false});
                var w1=this.state.play2+" won the match";
                this.setState({w1:w1})
                this.setState({showStore3:false});
                // document.getElementById("result").innerHTML = `<h2 class="winner">${this.state.play2}</h2><h2 class="winner">  Won The Game !!!</h2>
                // <h4 class="winner">${this.state.play1}  Better Luck Next Time </h4>`;
                // var btn="<button class='btnre' onclick='location.reload()'>play Again</button>"
                // this.setState({btn:btn});
                // document.getElementById("start").innerHTML=`<button class="btnre" onclick=${"location.reload()"}>play Again</button>`;
                this.setState({showStore4:true});
                // break;
            }
            // return w
    }

    // restart=()=>{
    //     var i=
    //     document.getElementById("start").innerHTML=`<button class="btnre" onclick=${"location.reload()"}>play Again</button>`;
    //     this.setState({showStore3:false});
    // }
        
 }
export default Board;
