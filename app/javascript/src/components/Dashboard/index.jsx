import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import Button from "components/Button";
import ListPolls from "components/Polls/ListPolls";
import PageLoader from "components/PageLoader";
import PollsApi from "apis/polls";

const Dashboard = ({ history }) => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPolls = async () => {
    try {
      const response = await PollsApi.list();
      logger.info(response);
      setPolls(response.data.polls);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (!either(isNil, isEmpty)(polls)) {
    return (
      <Container>
        <div className="flex justify-between">
          <h2 className="text-3xl font-extrabold text-indigo-500">Polls</h2>
          <Button
            type="link"
            path={`/polls/new`}
            buttonText="Create a poll"
            iconClass="ri-add-line"
            loading={loading}
          />
        </div>
        <ListPolls data={polls} />
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="text-3xl font-extrabold text-indigo-500">Polls</h2>
        <Button
          type="link"
          path={`/polls/new`}
          buttonText="Create a poll"
          iconClass="ri-add-line"
          loading={loading}
        />
      </div>
      <div className="flex">
        <h1 className="leading-5 text-grey-800">No Polls available 😔</h1>
      </div>
    </Container>
  );
};

export default Dashboard;
