Feature: Overlapped


    @TC-over-01
    Scenario: Record setting text into the Name input field
        Given The Name input field is partially visible
        When The test scrolls the element into view and enters the text TestName
        Then The text TestName should be successfully entered into the Name input field
