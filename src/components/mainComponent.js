import React, { Component } from "react";
import { Card } from "reactstrap";

class Main extends Component {
      constructor(props) {
        super(props);
        this.state = {
          logos: [
            {
                id: 0,
                name: 'Bootstrap',
                image: 'assets/images/images/bootstrap-logo.png',
            },
            {
              id: 1,
              name: 'Git ',
              image: 'assets/images/images/git-logo.png',
            },
            {
                id: 2,
                name: 'MongoDB',
                image: 'assets/images/images/mongo-logo.png',
            },
            {
                id: 3,
                name: 'NodeJs',
                image: 'assets/images/images/node-logo.png',
            }
        ],
        }
      };

      render() {
        const directory = this.state.logos.map(logo => {
        return (
          <div>
            <img className="w-50" src={logo.image} />
            
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row">
            {directory}
          </div>
        </div>
      );
      }
}

export default Main;
