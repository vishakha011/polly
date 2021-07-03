import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "components/Container";
import PageLoader from "components/PageLoader";
import Button from "components/Button";
import pollsApi from "apis/polls";

const ShowPoll = () => {
  const { id } = useParams();
  const [pageLoading, setPageLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([]);
  const [choice, setChoice] = useState(-1);
  const [result, setResult] = useState(false);

  const fetchPollDetails = async () => {
    try {
      const response = await pollsApi.show(id);
      setTitle(response.data.poll.title);
      setOptions(response.data.poll.options);
    } catch (error) {
      logger.error(error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchPollDetails();
  }, []);

  const handleVote = id => setChoice(id);

  const handleSubmit = async () => {
    setOptions(state => {
      state.map(obj => {
        if (obj.id == choice) obj.vote = ++obj["vote"];
      });
      return state;
    });

    setResult(true);
    await pollsApi.update(id, {
      poll: { title, options_attributes: options },
    });
  };

  const totalVote = () => {
    let total = 0;
    options.map(option => (total += option.vote));
    return total;
  };

  const computeVotesPercentage = vote => {
    const totalVotes = totalVote();

    if (totalVotes == 0) return 0;

    return (vote * 100) / totalVotes;
  };

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <div className="flex justify-center w-full">
        <div className="w-3/4 py-4">
          <h2 className="text-2xl font-semibold text-indigo-500">{title}</h2>
          {options.map(option => (
            <div
              className="w-3/4 py-2 cursor-pointer"
              key={option.id}
              onClick={() => handleVote(option.id)}
            >
              <div className="flex items-center">
                <div className="border rounded-full px-2 py-3 w-3/4">
                  <div
                    className={`text-base text-gray-800 ${
                      choice == option.id && "text-indigo-500"
                    }`}
                  >
                    {option.option}
                  </div>
                </div>
                {result && (
                  <div className="px-2 w-1/4">
                    {computeVotesPercentage(option.vote).toFixed(2)}%
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-center px-6">
            <Button
              loading={false}
              onClick={handleSubmit}
              buttonText="Submit"
              result={result}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShowPoll;
