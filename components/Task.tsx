import React from 'react'
import styled from 'styled-components'
import CheckIcon from '../public/statics/svg/iconmonstr-check-mark-17.svg';


const Task: React.FC = ({content, onCheck}) => {
  return (
    <>
    <Container>
    <CheckCircle>
        <CheckIcon className="Icon" onClick={() => onCheck(content)}/>
        </CheckCircle>
        <InfoContainer>
            <Name>{content.name}</Name>
        </InfoContainer>
        <ProjectInfo>
            <ColorCircle color={content.color.code}/>
            <span className="project-name">{content.project} / {content.date}</span>
        </ProjectInfo>
    </Container>
    </>
  )
}

export default Task

const Container = styled.div`
    display: flex;
    width: 500px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 20px;
`;

const CheckCircle = styled.div`
display: flex;
justify-content: center;
align-items: center;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #8b8b8b;
    border-radius: 100px;
    :hover {
        background: #8b8b8b;
        transition: 0.5s;
    }
    .Icon {
        transform: scale(0.5);
        fill: #ffffff;
        margin-right: 0px;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 2;
    margin-left: 20px;
`;
const Name = styled.div``;

const ProjectInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
`;

const ColorCircle = styled.div`
    width: 10px;
    height: 10px;
    background: ${props => props.color};
    border-radius: 100px;
    margin-right: 10px;
`;