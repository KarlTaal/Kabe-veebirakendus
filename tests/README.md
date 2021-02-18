# Testing

This is the base example of a future test suite. Please take your time to consider the examples and think about the sort of test suite you wish to have.

This is going to be running as part of CI. If a test is broken so is the build.

# How to run

If you wish to run the entire test suite, you can use

```
npm run test
```

If you wish to run a specific test spec file you can use

```
npm run test <Spec.file.name.spec.js>

npm run test Status.spec.js
```

The Jest test runner runs all tests in parallel, so the as the number of tests increases, it should still run the test suite relatively efficiently. 

Ideally you would always run all the tests when developing (to ensure that you have not broken something unexpected), but in some cases, running a single test can be useful (you want to test a smaller part of a larger composition that is not yet ready).

# Principles

Over time, we should populate this space with a more concrete list of principles which we expect people to abide by. For now, here is an explanation of why and how we need to do this and how it will save us time in the long run.

Eventually, when people are more at home with these ideas, we should condense it down to a more specific list of ideas, to remind ourselves and future developers of why we are doing this.

## Why ?

When a developer writes code, he ALWAYS tests his code - whether he realizes it or not. Very often he does it manually, by running the server, checking that everything looks ok in the browser and elements are in place, queries are run and the results displayed correctly etc. This is great for prototyping and quickly evolving applications that dont really have anything to be maintained.

And while this sort of testing is useful, it is also transient (and I would argue slower). By transience I mean the fact that when you test your code in your machine at some point in time, that test is not reproducible in the future. It is lost in time and space, so to speak. When someone comes along and changes some part of the system in the future, there is nothing to tell that future developer what the code is SUPPOSED to do, so if its behavior changes unexpectedly, the test you manually run today will not matter.

Tests are in fact validation. As requirements change, so much tests to reflect changed requirements. They validate now and in the future that your code does something that the test specifices as written (hence the term spec). That the functions you provide have the desired outputs when given certain inputs.

Unit testing is essentially just that - giving inputs to your functions and seeing if the output is correct. For yourself and for everyone else. Over time it will give you the confidence to make changes without worring about breaking something. 

## When ?

So when should I WRITE tests? For a production system - always. If you have ever heard of [Test Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development), then you know that some principles state the tests should be written BEFORE you ever write any code.

In all honesty I have never seen a person who religiously follows TDD and never writes a single line of code before the test for it is already in place. However, the idea behind it is solid.

When you are starting on new functionality, its not necessary to write tests immediately. Try to first get the general structure of objects / components in place. We can call this the prototyping phase - when things are changing fast.
Eventually you get to the part where you are fleshing out your functions, and adding meat to the bones of the structure you have built. This is when you usually find yourself running the application most often - to check that the incremental changes you are making are still working as expected.

That is the best time to start write tests. When you are doing your manual testing - do it with unit tests instead. I guarantee you will save time in the process since writing tests AFTER the fact is usually a little tedious. Once you get into the habit of writing unit tests, you will see that they actually allow you to test your code without even having to run all of it.

## How ?

We have a debt. A lot of our code is missing tests.
The goal should be to cover as much code as possible with unit tests from the day that we put this principle into action.

That does not mean every line of code, but it should mean every component. Meaningful inputs and outputs should be covered and considered a prerequisite before a task is considered to be finished. In the beginning this will give us confidence that the new functionality we developed is functional.

Over time, we will get to a place where a green suite of tests gives a certain measure of confidence not only about the parts currently under development but also about those that are not. As test coverage increases, so does the confidence in our changes not breaking unintended things that also have test coverage from earlier phases.

# References 
## Package References

[vue/test-utils - Vue testing components reference](https://vue-test-utils.vuejs.org/)

[Jest - Testing framework reference](https://jestjs.io/docs/en/getting-started)

## Useful tutorials or commentary

https://vuejs.org/v2/cookbook/unit-testing-vue-components.html

https://vuejsdevelopers.com/2019/08/26/vue-what-to-unit-test-components/

https://www.freecodecamp.org/news/why-i-now-appreciate-testing-and-why-you-should-too-74d48c67ab72/

https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c