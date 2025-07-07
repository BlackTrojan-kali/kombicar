import React from 'react'
import HeroSection from '../Components/HeroSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBoltLightning, faChevronRight, faCoins, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Card from '../Components/Card'

const Vtc = () => {
  return (
    <>
    <div className='pt-[75px]'></div>
    <HeroSection label="VTC" showLogo={false}/>

       <br />
       <div className=' py-[30px] lg:px-[230px] px-[20px] text-center'>
          <h1 className='font-bold text-4xl'>Nos itinéraires bus les plus en vogue</h1>
          <div className='mt-12 flex gap-7 overflow-x-hidden'>
            <Card imageUrl="/assets/default/city-1.jpg" trajets={45} distance={500} driver="yassine" depart="Yaounde" arrivee="Douala" prix={400}/>
            <Card imageUrl="/assets/default/city-1.jpg" trajets={45} distance={500} driver="yassine" depart="Yaounde" arrivee="Douala" prix={400}/>
            <Card imageUrl="/assets/default/city-1.jpg" trajets={45} distance={500}  driver="yassine" depart="Yaounde" arrivee="Douala" prix={400}/>
          </div>
       </div>
    <main className='pt-86 lg:pt-24'>

     <div  className='w-full justify-between flex flex-col md:flex-row gap-[20px] align-middle text-start'>
      <div className='md:w-[350px]'>
        <FontAwesomeIcon icon={faCoins} className='text-3xl mb-4'/>
        <h4 className='font-bold'>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis illum autem ullam. Quia ab ducimus sint ipsum magni animi officia omnis deleniti.
        </p>
      </div>
      <div className='md:w-[350px]'>
        <FontAwesomeIcon icon={faNewspaper} className='text-3xl mb-4'/>
        <h4 className='font-bold'>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis illum autem ullam. Quia ab ducimus sint ipsum magni animi officia omnis deleniti.
        </p>
      </div>
      <div className='md:w-[350px]'>
        <FontAwesomeIcon icon={faBoltLightning} className='text-3xl mb-4'/>
        <h4 className='font-bold'>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis illum autem ullam. Quia ab ducimus sint ipsum magni animi officia omnis deleniti.
        </p>
      </div>
      </div>
      <div className='mt-[20px] flex flex-col md:flex-row gap-[20px]'>
          <img src="/assets/default/carsharing-4.jpg" alt=""  className='md:w-1/2 w-fu;; rounded-2xl'/>
      
        <div className='px-[20px] py-[100px] w-full md:w-1/2'>
            <h2 className='font-bold text-2xl mb-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores maxime fugit et temporibus iure error eaque eos officia, repellendus illo ducimus, at in quas veniam dolorem asperiores, voluptatibus molestiae quo architecto iste! Earum, iusto!</p>
       <br />
        <center>
          <button className='btn-primary px-[20px] py-[10px] rounded-full cursor-pointer'>en Savoir plus</button>
        </center>
        </div>

     </div>
    </main>
<br />
     <main className='pt-24'>


     <br />
     <div>
      <h1 className='text-center font-bold text-4xl'>FAQ Covoiturage</h1>
      <div className='flex flex-col md:grid md:grid-cols-2  gap-8 mt-4'>
        <div>
          <h4 className='font-bold'>Lorem ipsum dolor sit.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod ad, laudantium temporibus atque, necessitatibus voluptatum porro quo et possimus natus illum rem pariatur sunt optio ipsam at, id adipisci ipsa quidem deserunt amet corporis recusandae! Beatae enim asperiores repudiandae, ipsa voluptatum soluta quisquam dolore quis, possimus nostrum, odio explicabo?</p>
        <hr  className='mt-4 border-[1px] border-gray-200'/>
        </div>
        <div>
          <h4 className='font-bold'>Lorem ipsum dolor sit.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod ad, laudantium temporibus atque, necessitatibus voluptatum porro quo et possimus natus illum rem pariatur sunt optio ipsam at, id adipisci ipsa quidem deserunt amet corporis recusandae! Beatae enim asperiores repudiandae, ipsa voluptatum soluta quisquam dolore quis, possimus nostrum, odio explicabo?</p>
        <hr  className='mt-4 border-[1px] border-gray-200'/>
        
        </div>
        <div>
          <h4 className='font-bold'>Lorem ipsum dolor sit.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod ad, laudantium temporibus atque, necessitatibus voluptatum porro quo et possimus natus illum rem pariatur sunt optio ipsam at, id adipisci ipsa quidem deserunt amet corporis recusandae! Beatae enim asperiores repudiandae, ipsa voluptatum soluta quisquam dolore quis, possimus nostrum, odio explicabo?</p>
        <hr  className='mt-4 border-[1px] border-gray-200'/>
        
        </div>
        <div>
          <h4 className='font-bold'>Lorem ipsum dolor sit.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod ad, laudantium temporibus atque, necessitatibus voluptatum porro quo et possimus natus illum rem pariatur sunt optio ipsam at, id adipisci ipsa quidem deserunt amet corporis recusandae! Beatae enim asperiores repudiandae, ipsa voluptatum soluta quisquam dolore quis, possimus nostrum, odio explicabo?</p>
        <hr  className='mt-4 border-[1px] border-gray-200'/>
        
        </div>
      </div>
      </div>
    
      
    </main>
      
      {/* Presentation de l'application mobile */}
      <div className="h-[50px]"></div>
      <div className="py-8 bg-yellow-300">
        <h1 className="text-3xl text-center font-bold text-gray-600">
          Simplifiez votre expérience
        </h1>
        <h1 className="text-xl text-center font-bold text-gray-600">
          Télécharger notre application mobile
        </h1>

        <div className="grid justify-center gap-2 md:gap-8 md:flex" data-aos="fade-up-left">
          <div className="flex justify-center">
            <img src="/assets/default/app-kombicar.png" alt="" className="w-[250px]" />
          </div>
          <div>
            <div className="flex justify-center">
              <div className="pt-1 md:pt-40">
                <a href="https://apps.apple.com/us/app/kombicar/id6468362045">
                  <button
                    type="button"
                    className="flex items-center justify-center w-48 mt-3 text-black bg-transparent border border-black h-14 rounded-xl transition-all hover:w-52"
                  >
                    <div className="mr-3">
                      <svg viewBox="0 0 384 512" width="30">
                        <path
                          fill="currentColor"
                          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="-mt-1 font-sans text-2xl font-semibold">
                        App Store
                      </div>
                    </div>
                  </button>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.kombicar.app">
                  <button
                    type="button"
                    className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14 transition-all hover:w-52"
                  >
                    <div className="mr-3">
                      <svg viewBox="30 336.7 120.9 129.2" width="30">
                        <path
                          fill="#FFD400"
                          d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                        ></path>
                        <path
                          fill="#FF3333"
                          d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                        ></path>
                        <path
                          fill="#48FF48"
                          d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                        ></path>
                        <path
                          fill="#3BCCFF"
                          d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="-mt-1 font-sans text-xl font-semibold">
                        Google Play
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vtc