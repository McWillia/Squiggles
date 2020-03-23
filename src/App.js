import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
    constructor(props){
        super(props);

        this.addSquiggle = this.addSquiggle.bind(this);
    }

    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.translate(400, 400);
        this.addSquiggle(100,0, 1);
        this.addSquiggle(200,10, -1);

    }

    addSquiggle(xStart, yStart, flip){

        let x = 0;
        let y = 0;
        let angle = 0;
        let a = 2;



        this.ctx.lineWidth = 2;
        this.ctx.moveTo(xStart, yStart*flip);

        for (var i = 0; i < 100; i++) {
            angle = 0.1 * i;
            x = (a + (a * angle)) * Math.cos(angle);
            y = (a + (a * angle)) * Math.sin(angle);
            console.log(x+","+y)
            this.ctx.lineTo((x+xStart),(y+yStart)*flip);
            this.ctx.stroke();

        }

        // let prev = 1;
        // let temp = 1;
        // let current = 1;
        // let x = {c:0, p:0};
        // let y = {c:0, p:0};
        // this.ctx.moveTo(x,y);
        // this.ctx.lineWidth = 1;
        //
        // for (var i = 0; i < 14; i++) {
        //
        //     temp = current;
        //     current = current + prev;
        //     prev = temp;
        //
        //     switch (i%4) {
        //         case 0:
        //             x.p = x.c;
        //             y.p = y.c;
        //             x.c = current;
        //             y.c = current;
        //
        //             break;
        //         case 1:
        //             x.p = x.c;
        //             y.p = y.c;
        //             x.c = current;
        //             y.c = -current;
        //             break;
        //         case 2:
        //             x.p = x.c;
        //             y.p = y.c;
        //             x.c = -current;
        //             y.c = -current;
        //             break;
        //         case 3:
        //             x.p = x.c;
        //             y.p = y.c;
        //             x.c = -current;
        //             y.c = current;
        //             break;
        //         default:
        //
        //
        //
        //     }
        //
        //     console.log(x.c + "," + y.c + " : " + x.p + "," + y.p + " : " + (x.c-x.p)/2 + " : " +(y.c-y.p)/2);
        //
        //     this.ctx.quadraticCurveTo((x.c+x.p),(y.c+y.p), x.c,y.c);
        //
        //     this.ctx.stroke();
        //
        // }


    }


    /*
    <input type={'button'} onClick={this.addSquiggle(Math.floor(Math.random() * 400), Math.floor(Math.random() * 400), Math.round(Math.random()))} >
        Add random Squiglle
    </input>

    */

    render(){
        return (
          <div className="App">
            <header className="App-header">
                <div>
                  <canvas ref="canvas" width={800} height={800} style={{border:"1px solid black"}} />
                </div>
                <div>

                </div>
            </header>
          </div>
        );
    }
}
