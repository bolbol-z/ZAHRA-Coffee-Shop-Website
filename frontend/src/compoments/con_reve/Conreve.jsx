import React from 'react';
import './Conreve.css';
import { useMemo } from 'react';

function Conreve({ selectedTable }) {
  const isVip = useMemo(() => selectedTable?.type?.includes('vip'), [selectedTable]);
  const isOutdoor = useMemo(() => selectedTable?.type?.includes('outdoor'), [selectedTable]);

  // خصائص CSS الديناميكية للـ "items"
  const itemClass = `table-item ${isVip ? 'vip' : ''} ${isOutdoor ? 'outdoor' : ''}`;
  const headerColor = isVip ? '#B85C38' : (isOutdoor ? '#A7D8E4' : '#2E6F5E');
  const borderColor = headerColor;

  return (
    <div className='conreve-container'>
      <h1 className='conreve-title'>réservation</h1>
      <div className='conreve-divider'></div>

      <div className='booking-form-container'>
        <div className='table-display'>
          <h2>Votre table</h2>
          {selectedTable ? (
            <div className={itemClass} style={{ borderColor: borderColor }}>
              <div className="table-header" style={{ background: headerColor }}>
                <p className="table-number">{selectedTable.number}</p>
              </div>
              <div className="table-details">
                <p className="table-location">{selectedTable.location}</p>
                <p className="table-capacity-label">Nombre de personnes</p>
                <p className="table-capacity">{selectedTable.capacity}</p>
              </div>
            </div>
          ) : (
            <div className='empty-table-placeholder'>
              <p>Veuillez sélectionner une table</p>
            </div>
          )}
        </div>

        <div className='booking-inputs'>
          <input type="text" placeholder="votre Nom" className="booking-input" />
          <input type="datetime-local" className="booking-input" />
          <input type="tel" placeholder="Numéro de téléphone" className="booking-input" />
          <input type="email" placeholder="Adresse e-mail" className="booking-input" />
        </div>
      </div>

      <button className='conreve-reserve-button'>Réservez</button>
    </div>
  );
}

export default Conreve;