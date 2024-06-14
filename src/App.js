import { VStack, Text } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
    query ExampleQuery {
      getAllTodos {
        id
        task
        isCompleted
      }
    }
    `,
  })
  .then((result) => console.log(`result from graphql - ${JSON.stringify(result)}` ));

function App() {
  const todosList = [
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Watch a movie" },
  ];

  const [todos, setTodos] = useState(todosList);

  function deleteTodo(id) {
    // IMPLEMENT DELETE TODO
    const updatedTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodoList);
  }

  function addTodo(newTodo) {
    const updatedTodoList = [...todos, newTodo];
    setTodos(updatedTodoList);
    debugger;
    // IMPLEMENT ADD TODOS
  }

  function editTodo(id, updatedTodo) {
    // IMPLEMENT EDIT TODO
    const updatedTodoList = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    debugger;
    setTodos(updatedTodoList);
  }

  return (
    <ApolloProvider client={client}>
      <VStack p={5}>
        <Text
          bgGradient="red"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Todo App
        </Text>
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </ApolloProvider>
  );
}

export default App;
