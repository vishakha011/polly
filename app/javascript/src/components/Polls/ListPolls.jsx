import React from "react";
import Button from "components/Button";

const ListPolls = ({ data, showPoll }) => {
  return (
    <>
      <div className="table w-full">
        <div className="table-row-group">
          {data.map(poll => (
            <div className="table-row py-2" key={poll.id}>
              <div
                className="table-cell text-lg font-medium cursor-pointer hover:text-indigo-500"
                onClick={() => showPoll(poll.id)}
              >
                {poll.title}
              </div>
              <div>
                <div className="table-cell">
                  <Button buttonText="Edit" />
                </div>
                <div className="table-cell pl-2">
                  <Button buttonText="Delete" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListPolls;
