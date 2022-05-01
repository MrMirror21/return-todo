import React, { useState } from 'react'
import styled from 'styled-components';
import { NextPage } from 'next'
import DayIndicator from '../components/DayIndicator';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMenuOpenState, myTaskState } from '../store/states';
import Task from '../components/Task';
import WeekChanger from '../components/WeekChanger';


const next: NextPage = () => {
  const now = new Date();
  const [selectedDay, setSelectedDay] = useState(now);
  const month = selectedDay.getMonth() + 1;
  const year = selectedDay.getFullYear();
  const [myTaskList, setMyTaskList] = useRecoilState(myTaskState);
  const todayTaskList = myTaskList.filter(task => new Date(task.date).toDateString() === selectedDay.toDateString());
  const isMenuOpen = useRecoilValue(isMenuOpenState);

  const removeTask = (task) => {
    const newList = myTaskList.filter(element=> element.id !== task.id);
    setMyTaskList(newList);
  }

  const setDateOfWeek = async (type) => {
    const newDate = new Date(selectedDay);
    if (type === "prev") {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setSelectedDay(newDate);
  }

  return (
    <>
      <Container className={isMenuOpen ? "menu-shown" : "menu-hide"}>
      <Title>
        <span>{month}월 {year}</span>
        <WeekChanger setDate={setDateOfWeek} />
      </Title>
        <DayIndicator today={selectedDay} setDay={setSelectedDay}/>
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

export default next

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
    .prevIcon {
      cursor: pointer;
      fill: #8b8b8b;
      transform: scale(0.7) rotate(-270deg);
      margin-left: 400px;
      :hover {
        opacity: 0.5;
        transition: 0.3s;
      }
    }
    .nextIcon {
      cursor: pointer;
      fill: #8b8b8b;
      transform: scale(0.7) rotate(-90deg);
      :hover {
        opacity: 0.5;
        transition: 0.3s;
      }
    }
    
`;

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;