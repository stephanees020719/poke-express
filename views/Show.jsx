	// Show.jsx
    const React = require("react");
 
    class Show extends React.Component {
      render() {
        const { name, img } = this.props.pokemon;
     
        return (
          <div>
            <h1>"Gotta Catch 'Em All"</h1>
            <div>
              <h2>This pokemon is {name}.</h2>
            </div>
            <img src={img} alt="pokemon" />
          </div>
        );
      }
    }
     
    module.exports = Show;
     