import React from 'react';
import Layout from '../others/Layout';

import Trashcan_empty from '../panel/trashcan/Trashcan_empty';
import Kondisi_perangkat from '../others/Kondisi_perangkat';

const Hero_page: React.FC = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center mt-10 mx-10'>
        <div className='flex bg-putih rounded-3xl px-12 py-4 w-full items-center justify-center mx-6'>
          <img className="w-32" src="./src/assets/img/Logo hymas.png" alt="Logo hymas" />
        </div>

        <Kondisi_perangkat></Kondisi_perangkat>         
      </div>
    </Layout>
  );
};

export default Hero_page;
