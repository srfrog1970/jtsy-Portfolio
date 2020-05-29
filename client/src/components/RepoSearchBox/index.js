import React, { useState, useContext } from "react";
import DevDataContext from "../../contexts/DevDataContext"
import { Input, Button } from "semantic-ui-react";
import "./repoSearchBox.css";

function RepoSearchBox() {
  const { devData } = useContext(DevDataContext);

  const [filteredRepos, setFilteredRepos] = useState({
    filteredRepos: devData.repositories,
  });

  const handleInputChange = (event) => {
    const filter = event.target.value;
    var filteredList = devData.repositories.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    console.log("filteredList:", filteredList);
    setFilteredRepos({
      filteredRepos: filteredList,
    });
  };

  const resetRepoSearch = (e) => {
    setFilteredRepos({ filteredRepos: devData.repositories });
  };

  return (
    <div className="search">
      <Input
        focus
        placeholder="Search..."
        className="searchBox"
        onChange={(e) => handleInputChange(e)}
      />
      <Button onClick={(e) => {
        resetRepoSearch(e);
      }}>Clear</Button>
    </div>
  );
}

export default RepoSearchBox;
