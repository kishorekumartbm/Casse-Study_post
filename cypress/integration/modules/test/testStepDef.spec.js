/// <reference types="cypress"/>
import {Before,Background, Given,Then,When} from "cypress-cucumber-preprocessor/steps"
import testObject from '../test/test'

Before(() => {
    testObject.launch()
  });

Given('I verify Login after launch',()=>{
    testObject.verifyLogin()
})

Given('I click on the create new post link',()=>{
    testObject.clickOnNewPost()
})

Then('I create a new post',()=>{
    testObject.createNewPost()
})

And('I verify the new post',()=>{
    testObject.vrifyThePost()
})

Then('I udpdate the post',()=>{
    testObject.updateThePost()
})

And('I verify the updated post',()=>{
    testObject.verifyTheUpdatedPost()
})

