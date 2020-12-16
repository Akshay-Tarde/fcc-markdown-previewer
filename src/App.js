import React from "react";
import MarkdownOutput from "./MarkdownOutput";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markedInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markedInput: event.target.value,
    });
  }

  render() {
    const markup = this.state.markedInput;
    return (
      <div className="container">
        <div>
          <textarea id="editor" onChange={this.handleChange}></textarea>
        </div>
        <div id="preview">
          <MarkdownOutput source={markup} />
        </div>
      </div>
    );
  }
}

export default App;
