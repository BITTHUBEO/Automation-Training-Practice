Feature: Table Example

@example
  Scenario Outline: order discount
    Given I have product with price <price>$ in my cart
    When discount for orders greater than $20 is 10%
    When I go to checkout
    Then I should see overall price is "<total>" $

    Examples:
      | price | total |
      | 10    | 10    |
      | 20    | 20    |
      | 21    | 18.9  |
      | 30    | 27    |
      | 50    | 45    |