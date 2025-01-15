import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../others/Layout';
import White_layout from '../others/White_layout';

const Main_page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='flex items-center justify-center min-h-screen'>
        <White_layout>
          <p> hai sayang </p>
        </White_layout>
      </div>
    </Layout>
  );
};

export default Main_page;
