import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownOutput(props) {
  return (
    <div>
      <ReactMarkdown source={props.source} />
    </div>
  );
}

export default MarkdownOutput;
