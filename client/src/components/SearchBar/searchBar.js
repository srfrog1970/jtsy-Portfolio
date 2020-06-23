import React from "react";
import { Input, Button } from "semantic-ui-react";
import "./searchBar.css";

export default function searchBar({ resetSearch, handleInputChange }) {
  // const { devData, setDevData } = useContext(DevDataContext);
  // console.log(props);
  let content = (
    <div className="search" display="inline-block">
      <form display="inline-block">
        <Input
          focus
          placeholder="Search..."
          className="searchBar"
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          type='reset'
          className="clearButton"
          onClick={(e) => resetSearch(e)}
        >
          Clear
        </Button>
      </form>
    </div>
  )
  return content
}
