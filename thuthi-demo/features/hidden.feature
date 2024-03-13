Feature: Hidden layers

    @TC-hidden-01
    Scenario:  Verify the green button cannot be clicked twice.
        Given Website is open and ready for use
        When I click on the green button
        Then The green button cannot be clicked twice
