import React, {useState, useRef} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { myProjectState, myTaskState } from '../store/states'
import CheckIcon from '../public/statics/svg/iconmonstr-check-mark-17.svg';

const idGenerator = () => {
    return Math.floor(Math.random() * 100000);
  }

const AddTaskModal: React.FC = ({isOpen, setIsOpen}) => {
    const projects = useRecoilValue(myProjectState);
    const [taskName, setTaskName] = useState("");
    const [projectName, setProjectName] = useState(projects.[0].name);
    const [colorCode, setColorCode] = useState(projects[0].color.code);
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [tasks, setTasks] = useRecoilState(myTaskState)
    const taskRef = useRef();
    taskRef.current = projects;
    let newTask = {
      name: taskName,
      color: {code: colorCode},
      project: projectName,
    };
  
    const handleInput = (event) => {
      const targetValue = event.currentTarget.value;
      setTaskName(targetValue);
    }
  
    const chooseProject = async (project) => {
      await setProjectName(project.name);
      await setColorCode(project.color.code);
      setIsPaletteOpen(false);
    }
  
    const addTask = async () => {
      const newId = idGenerator();
      newTask['id'] = newId;
      const newList = await [...taskRef.current].concat(newTask);
      setTasks(newList);
      setTaskName("");
      setIsOpen(false);
    }
  return (
    <>
    <ModalBackground className={!isOpen ? "hidden" : ""}>
    <ModalOutlay className={!isOpen ? "hidden" : ""}>
        <ModalHeader>Add your To do!</ModalHeader>
        <ModalInner>
          <LabelText>제목</LabelText>
          <input type="text" className="name-input" value={taskName} onChange={handleInput}/>
          <LabelText>프로젝트</LabelText>
          <CurrentColor onClick={() => setIsPaletteOpen(!isPaletteOpen)}>
            <ColorEx color={colorCode} />
            <ColorName>{projectName}</ColorName>
          </CurrentColor>
          <ProjectSelector className={isPaletteOpen === false ? "hidden" : "visible"}>
            {projects.map((project: Object)  => (
              <>
                <ProjectElement onClick={() => chooseProject(project)}>
                  <ColorEx color={project.color.code}/>
                  <span>{project.name}</span>
                  <CheckIcon className={projectName === project.name ? "Icon" : "hidden"} />
                </ProjectElement>
              </>
            ))}
          </ProjectSelector>
        </ModalInner>
        <ModalFooter>
          <ButtonContainer>
            <CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
            <AddButton onClick={() => addTask()}>추가</AddButton>
          </ButtonContainer>
        </ModalFooter>
    </ModalOutlay>
    </ModalBackground>

    </>
  )
}

export default AddTaskModal

const ModalBackground = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    overflow: hidden;
`;

const ModalOutlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 400px;
  height: 320px;
  border-radius: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.29); 
box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.29);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0px 24px;
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 200px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0px 24px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  .name-input {
    width: 351px;
    height: 31px;
    padding: 5px;
    border: 1px solid #f1f1f1;
    border-radius: 3px;
    margin-bottom: 30px;
  :focus {
      outline: 1px solid #7054ff;
    }
  }
`;

const LabelText = styled.div`
  margin: 20px 0px 10px 0px;
`;

const CurrentColor = styled.div`
  display: flex;
  align-items: center;
    width: 351px;
    height: 31px;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 30px;
    cursor: pointer;
    border: 1px solid #f1f1f1;
`;

const ColorEx = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: ${props => props.color};
  margin: 0px 10px;
`;

const ColorName = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const ProjectSelector = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 354px;
  height: 200px;
  background: #ffffff;
  top: 400px;
  overflow-y: scroll;
`;

const ProjectElement = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 335px;
  height: 29px;
  padding: 6px;
  :hover {
    background: #f1f1f1;
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
  .Icon {
    position: absolute;
    right: 20px;
    transform: scale(0.9);
  }
  .hidden {
    visibility: hidden;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  padding: 0px 24px;
  font-size: 16px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CancelButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #ddd;
border-radius: 3px;
padding: 9px 15px 10px;
margin-right: 10px;
font-family: 'Pretendard';
  font-size: 13px;
  color: black;
  cursor: pointer;
  :hover {
    border: 1px solid black;
    transition: border 0.5s;
  }
`;

const AddButton = styled(CancelButton)`
  background-color: #7054ff;
  color: #ffffff;
`;

