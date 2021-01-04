exports.newResultValidation = {
  userId: {
    isLength: {
      errorMessage: "userId should be between 1 and 30 letters",
      options: { min: 1, max: 20 }
    }
  },
  topicId: {
    isLength: {
      errorMessage: "topicId should be between 1 and 30 letters",
      options: { min: 1, max: 20 }
    }
  },
  datetime: {},
  score: {
    isNumber: {
      options: { min: 1 }
    }
  }
};

exports.resultValidation = {
  resultid: {
    in: ["params", "query"],
    errorMessage: "ID is wrong",
    isLength: {
      errorMessage: "id should be betweek 1 and 20 letters",
      options: { min: 1, max: 20 }
    }
  }
};
