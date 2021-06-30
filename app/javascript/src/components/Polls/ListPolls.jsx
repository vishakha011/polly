import React from "react";
import Table from "./Table";

const ListPolls = ({ data }) => {
  // return <Table data={ data }/>
  return (
    <>
      <h1>List of Polls</h1>
      {data.map(poll => (
        <li key={poll.id}>{poll.title}</li>
      ))}
    </>
  );
};

export default ListPolls;
