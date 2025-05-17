import React from 'react'
import Homepage from './homepage/homepage';
import { PipeConnectorsScene } from './homepage/model';
import FeaturedWork from './homepage/feature-work';

function Page() {
  return (
    <div>
      <Homepage />  
      <div className="bg-white w-full items-center">
      <PipeConnectorsScene />
        </div>
        <FeaturedWork />
        <hr />
    </div>
  )
}

export default Page;