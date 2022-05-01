import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { DayOfTheWeek } from '../store/states';

const DayIndicator: React.FC = ({today, setDay}) => {
    const dayOfTheWeek = useRecoilValue(DayOfTheWeek);
    const dateGenerator = (day: Object) => {
        const newDate = new Date();
        newDate.setDate(today.getDate()+(day.code - today.getDay()))
        return newDate;
    }
    const thisWeek = dayOfTheWeek.map(day => dateGenerator(day));
  return (
    <>
    <Container>
    {thisWeek.map(day => (
      <>
        <DayElement className={day.getDate() === today.getDate() ? "today" : "notToday"} onClick={() => setDay(day)}>
          <span className='dayText'>{dayOfTheWeek[day.getDay()].name}</span>
          <span className="dayNum">{day.getDate()}</span>
        </DayElement>
      </>
      ))}
    </Container>
    </>
  )
}

export default DayIndicator

const Container = styled.div`
    display: flex;
    width: 580px;
    max-width: 700px;
    justify-content: space-between;
    margin-left: 20px;
    .today {
        font-weight: 700;
        border-bottom: 1px solid #7054ff;
    }
    border-bottom: 1px solid #f1f1f1;
`;
const DayElement = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    cursor: pointer;
    .dayText {
        font-size: 12px;
        color: #8b8b8b;
    }
    :hover {
        background: #f1f1f1;
        transition: 0.5s;
    }
`;