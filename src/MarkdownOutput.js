import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownOutput(props) {
  return (
    <div id="preview">
      <ReactMarkdown source={props.source} />
    </div>
  );
}

export default MarkdownOutput;
