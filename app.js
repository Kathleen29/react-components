var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={["Eggs", "Milk", "Cookies"]} />
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onMouseEnterOrLeave() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
      <li key={this.props.index} style={style} onMouseEnter={this.onMouseEnterOrLeave.bind(this)} onMouseLeave={this.onMouseEnterOrLeave.bind(this)}>{this.props.item}</li>
    )
  }
};

var GroceryList = (props) => (
  <ul>
    {props.items.map((item, index) =>
      <GroceryListItem key={index} item={item} />
    )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));