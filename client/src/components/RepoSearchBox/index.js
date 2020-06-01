import React from "react";
import { Input, Button } from "semantic-ui-react";
import "./repoSearchBox.css";

const RepoSearchBox = ({ handleSearchChange, resetRepoSearch }) => {

  let content = (
    <div className="search">
      <Input
        as="span"
        focus
        placeholder="Search..."
        className="searchBox"
        onChange={(e) => handleSearchChange(e)}
      />
      <Button
        onClick={(e) => resetRepoSearch(e)}
      >
        Clear
        </Button>
    </div>
  )
  return content
};

export default RepoSearchBox;
