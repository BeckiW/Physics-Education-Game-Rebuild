exports.newTopicValidation = {
  title: {
    isLength: {
      errorMessage: "title should be betweek 1 and 30 letters",
      options: { min: 1, max: 20 }
    }
  },
  level: {
    isLength: {
      errorMessage: "level should be be a number",
      options: { min: 0, max: 90 }
    }
  },
  description: {
    isLength: {
      options: { min: 1, max: 90 }
    }
  }
};

exports.topicValidation = {
  resultid: {
    in: ["params", "query"],
    errorMessage: "ID is wrong",
    isLength: {
      errorMessage: "id should be betweek 1 and 20 letters",
      options: { min: 1, max: 20 }
    }
  }
};
