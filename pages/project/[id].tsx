import { NextPage } from 'next'
import React from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { myProjectState, myTaskState, isMenuOpenState } from '../../store/states'
import Task from '../../components/Task'

const id: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const projects = useRecoilValue(myProjectState);
  const tasks = useRecoilValue(myTaskState);
  const project = projects.find(element => String(element.id) === id);
  const taskList = tasks.filter(task => task.project === project.name);
  const isMenuOpen = useRecoilValue(isMenuOpenState);
  return (
    <>
    <Container className={isMenuOpen ? "menu-shown" : "menu-hide"}>
    <Title>{project.name}</Title>
        <TaskListContainer>
            {taskList.map(task => (
                <>
                <Task content={task}/>
                </>

            ))}
        </TaskListContainer>
    </Container>

    </>
  )
}

export default id;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s;
    padding: 30px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`;

const TaskListContainer = styled.div`
    display: flex;
    align-items: center;
`;