import { useRouter } from "next/router";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ToDo } from "@/pages";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-top: 50px;

  button {
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
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 50px;
  font-weight: 700;
`;

const Completed = styled.span<{
  isCompleted: boolean;
}>`
  color: ${(props) => (props.isCompleted ? "#ccc" : "#000")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};

  font-size: 20px;
`;

export default function Id({
  todo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const handleRoutePush = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <button onClick={handleRoutePush}>Go Back</button>
      <Title>{todo.title}</Title>
      <Completed isCompleted={todo.completed}>
        {todo.completed ? "is completed" : "isn't completed"}
      </Completed>
    </Wrapper>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext): Promise<{ props: { todo: ToDo } }> {
  const { id } = params as { id: string };
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  const todo: ToDo = await response.json();

  return {
    props: {
      todo,
    },
  };
}
