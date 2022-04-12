import React, { useState, useRef } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components'
import { colorPalette, myProjectState } from '../store/states';
import CheckIcon from '../public/statics/svg/iconmonstr-check-mark-17.svg';

const idGenerator = () => {
  return Math.floor(Math.random() * 100000);
}

const AddProjectModal: React.FC = ({isOpen, setIsOpen}) => {
  const [projectName, setProjectName] = useState("");
  const [colorName, setColorName] = useState("챠콜");
  const [colorCode, setColorCode] = useState("#323232");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const palette = useRecoilValue(colorPalette);
  const [projects, setProjects] = useRecoilState(myProjectState)
  const projectRef = useRef();
  projectRef.current = projects;
  let newProject = {
    name: projectName,
    color: {name: colorName, code: colorCode},
    favorite: isFavorite,
  };

  const handleInput = (event) => {
    const targetValue = event.currentTarget.value;
    setProjectName(targetValue);
  }

  const chooseColor = async (color) => {
    await setColorName(color.name);
    await setColorCode(color.code);
    setIsPaletteOpen(false);
  }

  const addProject = async () => {
    if(projects.length === 5) {
      alert("프로젝트 최대 갯수는 5개입니다.");
      setIsOpen(false);
      return;
    }
    const newId = idGenerator();
    newProject['id'] = newId;
    const newList = await [...projectRef.current].concat(newProject);
    setProjects(newList);
    setProjectName("");
    setColorName("챠콜");
    setColorCode("#323232");
    setIsFavorite(false);
    setIsOpen(false);
  }
  return (
    <>
    <ModalBackground className={!isOpen ? "hidden" : ""}>
    <ModalOutlay className={!isOpen ? "hidden" : ""}>
        <ModalHeader>프로젝트 추가</ModalHeader>
        <ModalInner>
          <LabelText>이름</LabelText>
          <input type="text" className="name-input" value={projectName} onChange={handleInput}/>
          <LabelText>색상</LabelText>
          <CurrentColor onClick={() => setIsPaletteOpen(!isPaletteOpen)}>
            <ColorEx color={colorCode} />
            <ColorName>{colorName}</ColorName>
          </CurrentColor>
          <ColorSelector className={isPaletteOpen === false ? "hidden" : "visible"}>
            {palette.map((color: Object)  => (
              <>
                <ColorElement onClick={() => chooseColor(color)}>
                  <ColorEx color={color.code}/>
                  <span>{color.name}</span>
                  <CheckIcon className={colorName === color.name ? "Icon" : "hidden"} />
                </ColorElement>
              </>
            ))}
          </ColorSelector>
          <AddToFavorites>
            <span>즐겨찾기에 추가</span>
            <input type="checkbox" className="check-for-favorite"
            checked={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
            />
          </AddToFavorites>
        </ModalInner>
        <ModalFooter>
          <ButtonContainer>
            <CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
            <AddButton onClick={() => addProject()}>추가</AddButton>
          </ButtonContainer>
        </ModalFooter>
    </ModalOutlay>
    </ModalBackground>

    </>
  )
}

export default AddProjectModal

const ModalBackground = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(49, 51, 56, 0.7);
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
  height: 520px;
  border-radius: 20px;
  background-color: #ffffff;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0px 24px;
  font-size: 16px;
  font-weight: 700;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 400px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0px 24px;
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

const ColorSelector = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 354px;
  height: 200px;
  background: #ffffff;
  top: 400px;
  overflow-y: scroll;
`;

const ColorElement = styled.div`
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

const AddToFavorites = styled.div`
display: flex;
align-items: center;
.check-for-favorite{
  width: 17px;
  height: 17px;
  margin-left: 10px;
}
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
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
margin-left: 10px;
font-family: 'Pretendard';
  font-size: 13px;
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

