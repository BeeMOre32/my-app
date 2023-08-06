import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { InferGetServerSidePropsType } from "next";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 500px;
  li {
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        color: #000;
      }
    }
  }
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const ListTitle = styled.li<{
  isCompleted: boolean;
}>`
  color: ${(props) => (props.isCompleted ? "#ccc" : "#000")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};
`;

export type ToDo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Todos({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <Link href={"/create"}>
        <Button>Create</Button>
      </Link>
      <List>
        {todos.map((todo) => (
          <Link href={"/detail/" + todo.id} key={todo.id}>
            <ListTitle isCompleted={todo.completed}>{todo.title}</ListTitle>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
}

export async function getServerSideProps(): Promise<{
  props: { todos: ToDo[] };
}> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo: ToDo[] = await response.json();
  const todos = todo.slice(0, 10);

  return {
    props: {
      todos,
    },
  };
}
