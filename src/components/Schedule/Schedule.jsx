import React from 'react'
import { Chrono } from "react-chrono";
import { ScheduleItemMode } from '../../constants/data';
function Schedule() {
  return (
<div style={{ width: '60%', height: '950px',position:"relative", marginLeft:"320px" }}>
  <Chrono items={ScheduleItemMode} mode="VERTICAL_ALTERNATING" />
</div>
  )
}

export default Schedule