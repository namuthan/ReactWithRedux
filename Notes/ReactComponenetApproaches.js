/*
  Four ways to create react components
    ES5 create class
    ES6 - Not autobind
          - recommended binding is within constructor
        - Default props declared seperately
        - Set initial state in constructor

    Stateless functional component - no state, get data soley from props
      var helloWorld = function(props){
        return (<h1>Hello World</h1>);
      }

        - Benefits
          - No class needed
          - Avoid 'this' keyword
          - Avoiding having to do binding
          - Enforced best practices
          - Don't support state or lifecycle methods
          - High signal-to-noise ratio
          - Enhanced code completion / intellisense
          - Bloated componets are obvious
          - Easy to understand
          - Easy to test since they are functions
          - Performance benefits
        - When to use
          - Whenever possible
          - No state is needed
          - If you don't need access to Refs and lifecycle methods
          - When you don't have nesting functions

      Container vs Presentation Componet
        - Container
          - little to no markup
          - passing data and actions(stateful)
          - Knows about Redux
          - Often Stateful

        - Presentation
          - Nearly all markup
          - Receive data and actions via prop
          - Doesn't know about Redux
          - Typically functional componets


    Summary
      - ES5 create class
      - Es6 class
      - Es5 Stateless Functions
      - Es6 Stateless Functions

      - Container vs Presentation Componets
*/
