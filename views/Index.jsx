//index.jsx
const React = require("react");
 
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1>'See All The Pokemon!'
</h1>
        <ul>
          {pokemon.map((pokemon, i) => (
            <li key={i}>
              <a href={`/pokemon/${i}`}>{pokemon.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
 
module.exports = Index;