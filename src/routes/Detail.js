import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ state }) => {
  const { id } = useParams();
  const toDo = state.find((todo) => todo.id === parseInt(id));
  return (
    <div>
      <h1>{toDo?.text}</h1>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Detail);
