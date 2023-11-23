import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../components/global";
import { increase, decrease } from "../components/global";

const Homescreen = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increase());
  };
  const decreaseHandler = () => {
    dispatch(decrease());
  };
  return (
    <Container>
      <Box>
        <Boxwrap>
          <Button onClick={increaseHandler}>Add</Button>
          <Count>{count}</Count>
          <Button onClick={decreaseHandler}>Sub</Button>
        </Boxwrap>
      </Box>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid white;
`;
const Boxwrap = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #020c1b;
  font-size: 14px;
`;
const Count = styled.div`
  color: #020c1b;
  font-size: 30px;
  font-weight: bold;
`;
