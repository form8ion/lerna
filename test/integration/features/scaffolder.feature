Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then lerna will be configured
    And the packages will be published with semantic-release
