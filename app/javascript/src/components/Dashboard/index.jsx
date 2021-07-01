import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import Button from "components/Button";
import ListPolls from "components/Polls/ListPolls";
import PageLoader from "components/PageLoader";
import pollsApi from "apis/polls";
import { getFromLocalStorage } from "helpers/storage";

const Dashboard = ({ history }) => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";
  logger.info(isLoggedIn);

  const fetchPolls = async () => {
    try {
      const response = await pollsApi.list();
      // logger.info(response);
      setPolls(response.data.polls);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const showPoll = id => {
    history.push(`/polls/${id}/show`);
  };

  const updatePoll = id => {
    history.push(`/polls/${id}/edit`);
  };

  const destroyPoll = async id => {
    try {
      await pollsApi.destroy(id);
      await fetchPolls();
    } catch (error) {
      logger.error(error);
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
              {isLoggedIn && (
                <Button
                  type="link"
                  path={`/polls/new`}
                  buttonText="Create a poll"
                  iconClass="ri-add-line"
                  loading={loading}
                />
              )}
            </div>
            <ListPolls
              data={polls}
              showPoll={showPoll}
              updatePoll={updatePoll}
              destroyPoll={destroyPoll}
            />
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex justify-center">
        <div className="w-3/4 px-4">
          <div className="flex justify-between">
            <h2 className="text-3xl font-extrabold text-indigo-500">Polls</h2>
            {isLoggedIn && (
              <Button
                type="link"
                path={`/polls/new`}
                buttonText="Create a poll"
                iconClass="ri-add-line"
                loading={loading}
              />
            )}
          </div>
          <div className="flex">
            <h1 className="leading-5 text-grey-800">No Polls available 😔</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
