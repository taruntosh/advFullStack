import { useEffect, useState } from "react";
import { VStack, Text } from "@chakra-ui/react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_TODOS = gql`
  query ExampleQuery {
    getAllTodos {
      id
      task
      isCompleted
    }
  }
`;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    client
      .query({ query: GET_TODOS })
      .then((result) => {
        console.log(`result from graphql - ${JSON.stringify(result)}`);
        const fetchedTodos = result.data.getAllTodos.map((todo) => ({
          id: todo.id,
          text: todo.task,
          isCompleted: todo.isCompleted,
        }));
        setTodos(fetchedTodos);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

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