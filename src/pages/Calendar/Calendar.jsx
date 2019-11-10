import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interation from '@fullcalendar/interaction';
import Modal from 'react-bootstrap/Modal'

import './Calendar.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

export default function Calendar() {
  const [show, setShow] = useState(false);
  const [elementDate, setElementDate] = useState([])
  const [elementEvents, setElementEvents] = useState([{title: null, date: null}])
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');


  const handleEvent = () => {
    const dateString = `${elementDate.year}-${elementDate.month}-${elementDate.day}`
    const event = {
      title: name, date: dateString
    }
    const eventsArray = elementEvents
    eventsArray.push(event)
    //events.map(e => setElementEvents({title: e.title, date: e.date}))
    setElementEvents(eventsArray)
    console.log(elementEvents)
    setShow(false)
  }

  const handleClick = ({ date }) => {
    const elements = {
      day: (date.getDate() + 1) / 10 < 1 ? '0'+ (date.getDate() + 1) : date.getDate() + 1,
      month: (date.getMonth() + 1) / 10 < 1 ? '0'+ (date.getMonth() + 1) : date.getMonth() + 1,
      year: date.getFullYear(),
    }
    setDate(`${elements.day}/${elements.month}/${elements.year}`)
    setElementDate(elements)
    setShow(true)
  }
  
  const handleShow = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className="row">
        <div className="col-12" id="header">
          <p className="title">CALENDÁRIO</p>
        </div>
        <div className="col-md-12">
            <FullCalendar
            id="fullcalendar"
            defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin, interation ]}
            weekends={true}
            editable={true}
            droppable={true}
            locale="pt-br"
            timeZone="America/Sao_Paulo"
            dateClick={handleClick}
            events={elementEvents}
          />

        <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Novo evento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">Data escolhida</label>
            <input type="text" className="form-control" id="date" value={date} onChange={data => setDate(data.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nome do evento</label>
            <input type="email" className="form-control" onChange={data => setName(data.target.value)} id="name" />
          </div>
          <div className='form-group' id='datetimepicker1'>
              <label htmlFor="date">Horário</label>
              <input type='time'id="time" className="form-control" onChange={data => setTime(data.target.value)} />
          </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-default" onClick={handleShow}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-dark"  onClick={handleEvent}>
              Agendar
            </button>
          </Modal.Footer>
        </Modal>

    </div>
  </div>
  );
}
