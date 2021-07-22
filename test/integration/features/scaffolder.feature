Feature: Scaffolder

  Scenario: Scaffold for an npm project
    Given the project will use the "npm" package manager
    When the project is scaffolded
    Then lerna will be configured
    And the packages will be published with semantic-release

  Scenario: Scaffold for an npm project
    Given the project will use the "yarn" package manager
    When the project is scaffolded
    Then lerna will be configured
    And the packages will be published with semantic-release
