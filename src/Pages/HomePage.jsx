import React from 'react'
import HeroSection from '../Components/HeroSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBoltLightning, faChevronRight, faCoins, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Card from '../Components/Card'

const HomePage = () => {
  return (
    <>
    <div className='pt-[75px]'></div>
    <HeroSection/>
    <main className='pt-24'>
      <div  className='w-full justify-between flex  align-middle text-start'>
      <div className='w-[350px]'>
        <FontAwesomeIcon icon={faCoins} className='text-3xl mb-4'/>
        <h4 className='font-bold'>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis illum autem ullam. Quia ab ducimus sint ipsum magni animi officia omnis deleniti.
        </p>
      </div>
      <div className='w-[350px]'>
        <FontAwesomeIcon icon={faNewspaper} className='text-3xl mb-4'/>
        <h4 className='font-bold'>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis illum autem ullam. Quia ab ducimus sint ipsum magni animi officia omnis deleniti.
        </p>
      </div>
      <div className='w-[350px]'>
        <FontAwesomeIcon icon={faBoltLightning} className='text-3xl mb-4'/>
        <h4 className='font-bold'>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis illum autem ullam. Quia ab ducimus sint ipsum magni animi officia omnis deleniti.
        </p>
      </div>
      </div>
      <div className='mt-[100px] flex gap-[20px]'>
        <img src="/assets/default/solve.png"  alt=""  className='w-1/2 rounded-2xl'/>
        <div className='px-[20px] py-[100px] w-1/2'>
            <h2 className='font-bold text-2xl mb-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores maxime fugit et temporibus iure error eaque eos officia, repellendus illo ducimus, at in quas veniam dolorem asperiores, voluptatibus molestiae quo architecto iste! Earum, iusto!</p>
       <br />
        <center>
          <button className='btn-primary px-[20px] py-[10px] rounded-full cursor-pointer'>en Savoir plus</button>
        </center>
        </div>
      </div>

      <div className='mt-[20px] flex gap-[20px]'>
        <div className='px-[20px] py-[100px] w-1/2'>
            <h2 className='font-bold text-2xl mb-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores maxime fugit et temporibus iure error eaque eos officia, repellendus illo ducimus, at in quas veniam dolorem asperiores, voluptatibus molestiae quo architecto iste! Earum, iusto!</p>
       <br />
        <center>
          <button className='btn-primary px-[20px] py-[10px] rounded-full cursor-pointer'>en Savoir plus</button>
        </center>
        </div>

       <img src="/assets/default/car-women.png" alt=""  className='w-1/2 rounded-2xl'/>
      </div>
       <br />
    </main>

       <div className='w-full text-start bg-emerald-800 py-[30px] px-[230px]'>
        <h3 className='text-white font-bold text-2xl'>Trajets disponibles</h3>
        <div className="miniCard-grid">
          <div className='mini-card'>
            <div>
              <p>depart</p>
              <FontAwesomeIcon icon={faArrowRight} className='mt-1'/>
              <p>arriver</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='mt-1'/>
          </div>

          <div className='mini-card'>
            <div>
              <p>depart</p>
              <FontAwesomeIcon icon={faArrowRight} className='mt-1'/>
              <p>arriver</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='mt-1'/>
          </div>
          <div className='mini-card'>
            <div>
              <p>depart</p>
              <FontAwesomeIcon icon={faArrowRight} className='mt-1'/>
              <p>arriver</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='mt-1'/>
          </div>
          <div className='mini-card'>
            <div>
              <p>depart</p>
              <FontAwesomeIcon icon={faArrowRight} className='mt-1'/>
              <p>arriver</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='mt-1'/>
          </div>
        </div>
       </div>
       <br />
       <div className=' py-[30px] px-[230px] text-center'>
          <h1 className='font-bold text-4xl'>Nos itinéraires bus les plus en vogue</h1>
          <div className='mt-12 flex gap-7'>
            <Card imageUrl="/assets/default/city-1.jpg" driver="yassine" depart="Yaounde" arrivee="Douala" prix={400}/>
            <Card imageUrl="/assets/default/city-1.jpg" driver="yassine" depart="Yaounde" arrivee="Douala" prix={400}/>
            <Card imageUrl="/assets/default/city-1.jpg"  driver="yassine" depart="Yaounde" arrivee="Douala" prix={400}/>
          </div>
       </div>

      <div className='mt-[100px] flex gap-[20px] px-[230px]'>
        <img src="/assets/default/map-cameroon.png"  alt=""  className='w-1/2 rounded-2xl'/>
        <div className='px-[20px] py-[100px] w-1/2'>
            <h2 className='font-bold text-2xl mb-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores maxime fugit et temporibus iure error eaque eos officia, repellendus illo ducimus, at in quas veniam dolorem asperiores, voluptatibus molestiae quo architecto iste! Earum, iusto!</p>
       <br />
        <center>
          <button className='btn-primary px-[20px] py-[10px] rounded-full cursor-pointer'>en Savoir plus</button>
        </center>
        </div>
      </div>
    </>
  )
}

export default HomePage