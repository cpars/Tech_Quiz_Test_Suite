import Quiz from "../../client/src/components/Quiz";

describe("<Quiz /> Component Tests", () => {
  // ✅ Helper function to mount with mocked data
  const mountWithMockData = () => {
    cy.intercept("GET", "/api/questions/random", {
      fixture: "mockQuestions.json",
    }).as("getQuestions");

    cy.mount(<Quiz />);
    cy.wait("@getQuestions");
  };

  it("should render the Quiz component", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').should("exist");
  });

  it("should render the Start Quiz button with correct text", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').should("contain", "Start Quiz");
  });

  it("should display the first question when Start is clicked", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').click();
    cy.get('[data-cy="question-header"]').should("be.visible");
  });

  it("should display the next question after selecting an answer", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').click();

    cy.get('[data-cy="question-header"]')
      .invoke("text")
      .then((firstQuestion) => {
        cy.get('[data-cy="answer-btn"]').first().click();

        cy.get('[data-cy="question-header"]')
          .should("be.visible")
          .invoke("text")
          .should("not.eq", firstQuestion);
      });
  });

  it("should display 'Quiz Completed' after answering all questions", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').click();

    cy.fixture("mockQuestions.json").then((questions) => {
      for (let i = 0; i < questions.length; i++) {
        cy.get('[data-cy="answer-btn"]').first().click();
      }
      cy.get('[data-cy="quiz-complete"]').should("contain", "Quiz Completed");
    });
  });

  it("should show the score after completing the quiz", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').click();

    cy.fixture("mockQuestions.json").then((questions) => {
      for (let i = 0; i < questions.length; i++) {
        cy.get('[data-cy="answer-btn"]').first().click();
      }
      cy.get('[data-cy="quiz-complete"]').should("contain", "Your score:");
    });
  });

  it("should show 'Take New Quiz' button after completing the quiz", () => {
    mountWithMockData();
    cy.get('[data-cy="start-btn"]').click();

    cy.fixture("mockQuestions.json").then((questions) => {
      for (let i = 0; i < questions.length; i++) {
        cy.get('[data-cy="answer-btn"]').first().click();
      }
      cy.get('[data-cy="quiz-complete"]').should("contain", "Take New Quiz");
    });
  });
});
