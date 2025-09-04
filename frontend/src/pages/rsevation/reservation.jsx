import React, { useState, useRef } from 'react';
import './reservation.css';
import Revheader from '../../compoments/rev_header/Revheader';
import Tabreve from '../../compoments/tab-reve/Tabreve';
import Conreve from '../../compoments/con_reve/Conreve';
import Footer from '../../compoments/footer/Footer';

function Reservation() {
  const [selectedTable, setSelectedTable] = useState(null);
  const conreveRef = useRef(null);

  const handleReserveClick = (tableData) => {
    setSelectedTable(tableData);
    if (conreveRef.current) {
      conreveRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Revheader />
      <Tabreve onReserveClick={handleReserveClick} />
      <div ref={conreveRef}>
        <Conreve selectedTable={selectedTable} />
      </div>
      <Footer/>
    </div>
  );
}

export default Reservation;
