Feature: Todos Feature

  Scenario: Should be able to add a todo
    Given I load the todos demo
    When I add a new todo
    Then It should appear with in the list
