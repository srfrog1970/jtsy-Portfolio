// import axios from "axios";
import _ from "lodash";
import React, { useState, useEffect, useContext, Fragment } from "react";
import { Table, Form, Button, Modal, Grid, Container, Segment } from "semantic-ui-react";
import API from "../../utils/API";
import RepoSearchBox from "../RepoSearchBox";
import DevModal from "../DevModal"
import './style.css'
// import RepositoryContext from "../../contexts/DevDataContext";

var tableData = []

const DevTable = () => {
  // const { devData, setDevData } = useContext(DevDataContext)
  // console.log('displayRepos: ', devData.repositories.length)
  const [state, setState] = useState({
    id: null,
    column: null,
    data: null,
    sort: null,
    direction: null,
    rowClick: false,
    deploymentLink: "",
    repoName: "",
    filteredRepos: null,
    searched: -1,
    searchID: null
  })

  const [activeFlag, setActiveFlag] = useState({ activeFlag: '' })

  useEffect(() => {
    console.log('DevTable 1.  in useEffect')
    API.getActiveDeveloper()
      .then(res => {
        console.log('DevTable 2. ', res)
        setState({
          ...state,
          data: res.data.repositories,
          filteredRepos: res.data.repositories,
        });
        tableData = res.data.repositories
      });
  }, []);


  const resetRepoSearch = (e) => {
    setState({
      ...state,
      filteredList: state.data.repositories,
    });
  };

  // componentDidMount = () => {
  //   console.log('1.  in componentDidMount')
  //   API.getActiveDeveloper()
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         ...this.state,
  //         data: res.data.repositories,
  //         filteredRepos: res.data.repositories,
  //       })
  //       tableData = res.data.repositories
  //     })
  // }

  const handleSort = (clickedColumn) => () => {
    const { column, filteredRepos, direction } = state;
    console.log('in handleSort', clickedColumn)
    if (column !== clickedColumn) {
      setState({
        ...state,
        column: clickedColumn,
        filteredRepos: _.sortBy(filteredRepos, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    setState({
      filteredRepos: filteredRepos.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    console.log(name, value)
    // Updating the input's state
    setState({
      ...state,
      deploymentLink: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let value = state.deploymentLink
    console.log('in handleFormSubmit ', state.deploymentLink)
    setState({
      ...state,
      deploymentLink: value,
    });
    console.log(state.deploymentLink)
    updateDB(state.id, { deploymentLink: state.deploymentLink })
  }

  const handleClick = (e) => {
    console.log('in handleClick')
    setState({
      ...state,
      rowClick: false,
    });
  }

  const handleSearchChange = event => {

    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = filteredRepos.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    console.log('filteredList', filteredList)
    setState({
      ...state,
      filteredRepos: filteredList
    });

  }

  const resetSearch = (e) => {
    setState({
      ...state,
      filteredRepos: state.data.repositories
    });
    console.log('resetSearch', filteredRepos.length)
  };

  const updateFlag = (id) => {
    console.log('change Flag clicked', id, tableData[id].activeFlag)
    if (tableData[id].activeFlag === 'false') {
      tableData[id].activeFlag = 'true';
    } else {
      tableData[id].activeFlag = 'false';
    }
    console.log('in updateFlag ', tableData[id].activeFlag)
    let flag = tableData[id].activeFlag;
    setActiveFlag({ activeFlag: flag });
    console.log('to updateDB', id, { activeFlag: flag })
    updateDB(state.id, { activeFlag: flag })
  };

  const updateDB = (id, property) => {
    console.log('in updateDB:  ', id, property)
    API.updateRepositories(id, property)
      .then(res => {
        console.log('7. success');
      })
      .catch(err => {
        console.log(err)
      })
  }

  const showDevRepo = (repo) => {
    // console.log('clicked', repo)
    let id = tableData.findIndex(e => e.repoID === repo)
    console.log('id: ', id, 'deployLink: ', tableData[id].deploymentLink)
    console.log(tableData[id]._id)
    setState({
      ...state,
      id: tableData[id]._id,
      rowClick: true,
      deploymentLink: tableData[id].deploymentLink,
      repoName: tableData[id].repoName,

    });
    setActiveFlag({ activeFlag: tableData[id].activeFlag })
  };

  const { column, direction, rowClick, filteredRepos } = state;

  let content = (
    <Fragment>
      <span className="searchLine">
        <RepoSearchBox handleSearchChange={handleSearchChange} resetSearch={resetSearch} />
      </span>
      <div className="devTable">
        <Table sortable celled fixed inverted singleLine>
          <Table.Header inverted>
            <Table.Row className="sticky">
              <Table.HeaderCell
                width={4}
                sorted={column === "name" ? direction : null}
                onClick={handleSort("name")}
              >
                Repo Name
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "description" ? direction : null}
                onClick={handleSort("description")}
              >
                Description
            </Table.HeaderCell>
              <Table.HeaderCell
                width={2}
                textAlign="center"
                sorted={column === "activeFlag" ? direction : null}
                onClick={handleSort("activeFlag")}
              >
                Active
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              filteredRepos,
              ({ repoDesc, activeFlag, repoName, repoID }, index) => (
                <Table.Row className="devRow" id={index} key={index} value={index} active onClick={e => showDevRepo(repoID)}>
                  <Table.Cell>{repoName}</Table.Cell>
                  <Table.Cell>{repoDesc}</Table.Cell>
                  <Table.Cell textAlign="center">{activeFlag}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table >
      </div >
      <div>
        <Container>
          <Modal
            open={state.rowClick}
            centered={false}
            size="small"
          >
            <Modal.Header>Update Repository</Modal.Header>
            <Modal.Content>
              <Modal.Description as="p" className="boxTitle">
                Information for Repository: <span className="repoName">{state.repoName}</span>
              </Modal.Description>
              <Segment>
                <Form >
                  <Form.Group>
                    <Form.Field>
                      <p className="flagLabel">Update activeFlag </p>
                      <label className="inputLabel">Active Flag: <span className="repoName">{state.activeFlag}</span></label>
                      {/* <input width={2} name="activeFlag" label='ActiveFlag Value' value={this.state.activeFlag} control='input' /> */}
                    </Form.Field>
                    <Form.Field>
                      <Button type="submit" color="blue" name="updateFlag" onClick={() => updateFlag(state.rowClick)}>Change</Button>
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Segment>
              <Segment>
                <Form>
                  <Form.Group>
                    <Form.Field>
                      <p className="flagLabel">Enter Deployment URL </p>
                      <label className="inputLabel">Deployment URL: <span className="repoName">{state.deploymentLink}</span></label>
                      <input className="urlBox" name="deploymentLink" label='Deployment URL: ' placeholder="new link" value={state.value} onChange={(event) => handleInputChange(event)} />
                    </Form.Field>
                    <Form.Field>
                      <Button primary type='submit'>Update</Button>

                    </Form.Field>
                  </Form.Group>
                </Form>
              </Segment>
              <Segment>
                <Button color="blue" fluid size="large" active
                  onClick={e => handleClick()}>
                  Close
                </Button>
              </Segment>
            </Modal.Content>
          </Modal>
        </Container>
      </div>
    </Fragment >
  );
  return content;
}

export default DevTable;