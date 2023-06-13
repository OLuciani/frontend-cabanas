import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./DoubleCalendar.css"

const DoubleCalendar = ({ onChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [nextMonth, setNextMonth] = useState(getNextMonth(currentMonth));

  function getNextMonth(date) {
    const nextDate = new Date(date);
    nextDate.setMonth(nextDate.getMonth() + 1);
    return nextDate;
  }

  function handleMonthChange(date) {
    setCurrentMonth(date);
    setNextMonth(getNextMonth(date));
  }

  return (
    <div className="double-calendar">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={currentMonth}
        onActiveStartDateChange={({ activeStartDate }) =>
          handleMonthChange(activeStartDate)
        }
      />
      <Calendar
        className="calendar"
        onChange={onChange}
        value={nextMonth}
        onActiveStartDateChange={({ activeStartDate }) =>
          handleMonthChange(activeStartDate)
        }
      />
    </div>
  );
};

export default DoubleCalendar;