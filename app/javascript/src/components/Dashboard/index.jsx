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
        <div className="flex justify-center">
          <div className="w-3/4 px-4">
            <div className="flex justify-between">
              <h2 className="text-3xl font-extrabold text-indigo-500">Polls</h2>
              <Button
                type="create"
                buttonText="Create a poll +"
                loading={loading}
              />
            </div>
            <ListPolls data={polls} />
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-xl leading-5 text-center">No polls available😔</h1>
    </Container>
  );
};

export default Dashboard;
