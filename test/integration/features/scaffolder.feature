Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then lerna will be configured
