Feature: Case study

Scenario: Login_001
Given I verify Login after launch

#Scenario: Create_a_new_Post_002
#Given I click on the create new post link
#Then I create a new post
#And I verify the new post

Scenario: Create_and_Edit_Post_003
Given I click on the create new post link
Then I create a new post
And I verify the new post
Then I udpdate the post
And I verify the updated post