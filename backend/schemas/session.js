exports.newSessionValidation = {
  topicId: {
    isLength: {
      errorMessage: "title should be betweek 1 and 30 letters",
      options: { min: 1, max: 20 }
    }
  },
  questionText: {},
  correctAnswer: {
    isLength: {
      options: { min: 1 }
    }
  },
  answers: {
    isArray: {
      options: { min: 1 }
    }
  }
};

exports.sessionValidation = {
  resultid: {
    in: ["params", "query"],
    errorMessage: "ID is wrong",
    isLength: {
      errorMessage: "id should be betweek 1 and 20 letters",
      options: { min: 1, max: 20 }
    }
  }
};
