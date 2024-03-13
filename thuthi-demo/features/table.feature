Feature: Table

    @TC-table-01
    Scenario:  Verify Chrome CPU load in Task Manager
        Given The dynamic table website is open and ready for use
        When I open the Task Manager page
        Then I compare the CPU load of Chrome with the value in the yellow label