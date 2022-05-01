import React from 'react'
import { NextPage } from 'next'
import { useRecoilState, useRecoilValue } from 'recoil';
import { DayOfTheWeek, isMenuOpenState, myTaskState } from '../store/states';
import styled from 'styled-components';
import Task from '../components/Task';

const today: NextPage = () => {
  const dayOfTheWeek = useRecoilValue(DayOfTheWeek);
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const day = dayOfTheWeek[now.getDay()].name;
  const dayInfo = day + " " + String(month) + "월" + String(date) + "일";
  const isMenuOpen = useRecoilValue(isMenuOpenState);

  const [myTaskList, setMyTaskList] = useRecoilState(myTaskState);
  const todayTaskList = myTaskList.filter(task => new Date(task.date).toDateString() === now.toDateString());

  const removeTask = (task) => {
    const newList = myTaskList.filter(element=> element.id !== task.id);
    setMyTaskList(newList);
  }

  return (
    <>
    <Container className={isMenuOpen ? "menu-shown" : "menu-hide"}>
      <Title>
        <span>오늘</span>
        <DayInfo>{dayInfo}</DayInfo>
      </Title>
      <TaskListContainer>
            {todayTaskList.map(task => (
                <>
                   <Task content={task} onCheck={removeTask}/>
                </>
            ))}
        </TaskListContainer>
    </Container>

    </>
  )
}

export default today

const Container = styled.div`
  padding: 30px;
  transition: 0.5s;
`;

const Title = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-left: 30px;
`;

const DayInfo = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #8b8b8b;
  line-height: 25px;
  padding-left: 10px;
`;

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;
