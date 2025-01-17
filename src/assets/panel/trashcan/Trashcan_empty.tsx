import React from 'react';
import trashcan_empty from 'src/assets/icons/trashcan\full.svg';

const Trashcan_empty: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-2 py-4 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={trashcan_empty} />
      <div>
        <span className="block text-xs -mb-1">tempat sampah</span>
        <div className="text-xxxs">
          <span className="block">penuh</span>
        </div>
      </div>
    </div>
  );
};

export default Trashcan_empty;
