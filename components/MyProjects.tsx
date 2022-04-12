import React, {useState} from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { myProjectState } from '../store/states';
import ArrowDownIcon from '../public/statics/svg/iconmonstr-arrow-65.svg';
import PlusIcon from '../public/statics/svg/iconmonstr-plus-thin.svg';import Link from 'next/link';
;

const MyProjects: React.FC = ({setIsModalOpen, currentProject, setCurrentProject}) => {
    const [projects, setProjects] = useRecoilState(myProjectState);
    const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    <Container>
        <HeaderRow onClick={() => setIsOpen(!isOpen)}>
            <ArrowDownIcon className={isOpen ? "rotate Icon" : "Icon"} />
            <span>프로젝트</span>
        </HeaderRow>
        <IconContainer className="add-project">
            <PlusIcon transform="scale(0.7)" onClick={() => setIsModalOpen(true)}/>
            </IconContainer>
        <ProjectsList className={isOpen ? "extended-list" : "hidden"}>
            {projects.map(project => (
                <Link href="/project/[id]" as={`/project/${project.id}`} >
                <ProjectRow className={currentProject.id === project.id ? "selected" : "not"} onClick={() => setCurrentProject(project)}>
                    <ColorContainer>
                        <TagColor color={project.color.code}/>
                    </ColorContainer>
                    <ProjectText>{project.name}</ProjectText>
                </ProjectRow>
                </Link>
            ))}
        </ProjectsList>
    </Container>
    </>
  )
}

export default MyProjects


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 250px;
    margin-top: 50px;
    .hidden {
        height: auto;
        overflow: hidden;
        transition: all 0.3s ease-out;
        flex: 0;    
    }
    .extended-list {
        height: auto;
        overflow: hidden;
        transition: all 0.3s ease-out;
        flex: 1;
    }
    .add-project{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 430px;
        right: 30px;
       visibility: hidden;
       :hover {
           width: 24px;
           height: 24px;
           border-radius: 4px;
           background-color: #dddddd;
       }
    }
`;
const HeaderRow = styled.div`
    position: relative;
    width: 265px;
    height: 44px;
    padding: 5px 16px 5px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .Icon {
      transform: scale(0.7) rotate(-90deg);
      fill: #8b8b8b;
      transition: 0.5s;
      margin-right: 10px;
    }
    .rotate {
        transform: scale(0.7);
        transition: 0.5s;
    }
`;

const IconContainer = styled.div`
`;

const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    width: 265px;
    transition: height 0.5s;
    height: auto;
    .selected {
        background: #f1f1f1;
    }
`;

const ProjectRow = styled.div`
    display: flex;
    width: 265px;
    height: 44px;
    padding: 5px 16px 5px 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    :hover {
        background-color: #f1f1f1;
        transition: 0.3s;
    }
`;

const ProjectText = styled.div`
    display: flex;
    align-items: center;
    line-height: 0px;
    width: 201px;
    height: 24px;
    font-size: 15px;
`;

const ColorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
`;
const TagColor = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: ${props => props.color};
`