import React from 'react';
import './Tabreve.css';
import CircularGallery from '../../compoments/CircularGallery';

const tables = [
  // ... (نفس مصفوفة الطاولات)
  { type: 'standard', location: 'À l’intérieur', number: 1, capacity: 4, id: 'T01' },
  { type: 'standard', location: 'À l’intérieur', number: 2, capacity: 2, id: 'T02' },
  { type: 'standard', location: 'À l’intérieur', number: 3, capacity: 4, id: 'T03' },
  { type: 'standard', location: 'À l’intérieur', number: 4, capacity: 2, id: 'T04' },
  { type: 'standard', location: 'À l’intérieur', number: 5, capacity: 4, id: 'T05' },
  { type: 'standard', location: 'À l’intérieur', number: 6, capacity: 6, id: 'T06' },
  { type: 'standard', location: 'À l’intérieur', number: 7, capacity: 4, id: 'T07' },
  { type: 'vip-indoor', location: 'VIP à l’intérieur', number: 8, capacity: 4, id: 'T08' },
  { type: 'vip-indoor', location: 'VIP à l’intérieur', number: 9, capacity: 6, id: 'T09' },
  { type: 'vip-indoor', location: 'VIP à l’intérieur', number: 10, capacity: 6, id: 'T10' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 11, capacity: 2, id: 'T11' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 12, capacity: 2, id: 'T12' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 13, capacity: 4, id: 'T13' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 14, capacity: 4, id: 'T14' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 15, capacity: 4, id: 'T15' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 16, capacity: 6, id: 'T16' },
  { type: 'standard-outdoor', location: 'À l’extérieur', number: 17, capacity: 4, id: 'T17' },
  { type: 'vip-outdoor', location: 'VIP à l’extérieur', number: 18, capacity: 4, id: 'T18' },
  { type: 'vip-outdoor', location: 'VIP à l’extérieur', number: 19, capacity: 6, id: 'T19' },
  { type: 'vip-outdoor', location: 'VIP à l’extérieur', number: 20, capacity: 6, id: 'T20' },
];

function Tabreve({ onReserveClick }) {
  const loopedTables = [...tables, ...tables];

  const galleryItems = loopedTables.map(table => ({
    data: table, 
  }));

  return (
    <div className='tab-container'>
      <h1 className="tab-title">Nos Tables</h1>
      <div className="tab-divider"></div>
      
      <div className="gallery-wrapper">
        <CircularGallery 
          items={galleryItems}
          bend={3} 
          scrollEase={0.02}
          renderItem={(item) => {
            const isVip = item.data.type.includes('vip');
            const isOutdoor = item.data.type.includes('outdoor');
            const itemClass = `table-item ${isVip ? 'vip' : ''} ${isOutdoor ? 'outdoor' : ''}`;
            const headerColor = isVip ? '#B85C38' : (isOutdoor ? '#A7D8E4' : '#2E6F5E');
            const borderColor = headerColor;

            return (
              <div className={itemClass} style={{ borderColor: borderColor }}>
                <div className="table-header" style={{ background: headerColor }}>
                  <p className="table-number">{item.data.number}</p>
                </div>
                <div className="table-details">
                  <p className="table-location">{item.data.location}</p>
                  <p className="table-capacity-label">Nombre de personnes</p>
                  <p className="table-capacity">{item.data.capacity}</p>
                </div>
                <button 
                  className="reserve-button" 
                  style={{ borderColor: borderColor, color: borderColor }}
                  onClick={() => onReserveClick(item.data)}
                >
                  Réservez
                </button>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Tabreve;