describe('My Todo App E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('can add a new task', () => {
    cy.intercept('POST', 'http://localhost:8000/tasks/').as('addTask');

    cy.get('input[placeholder="Title"]').type('Test Task');
    cy.get('textarea[placeholder="Description"]').type('Test Description');
    cy.contains('Add').click();

    cy.wait('@addTask');

    cy.contains('Test Task').should('exist');
    cy.contains('Test Description').should('exist');
  });

  it('can mark a task as done', () => {
    cy.intercept('PATCH', 'http://localhost:8000/tasks/*/done').as('markDone');

    cy.get('input[placeholder="Title"]').type('Another Task');
    cy.get('textarea[placeholder="Description"]').type('Another Description');
    cy.contains('Add').click();
    cy.wait(500);

    cy.contains('Done').last().click();
    cy.wait('@markDone');

    cy.contains('Done').should('exist');
  });

  it('shows max 5 latest tasks', () => {
    for (let i = 1; i <= 6; i++) {
      cy.get('input[placeholder="Title"]').type(`Task ${i}`);
      cy.get('textarea[placeholder="Description"]').type(`Desc ${i}`);
      cy.contains('Add').click();
      cy.wait(200);
    }

    cy.get('strong').should('have.length', 5);
    cy.contains('Task 1').should('not.exist');
    cy.contains('Task 6').should('exist');
  });
});
