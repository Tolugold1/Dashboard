import './chart.styles.scss'
import { MdMoreVert} from 'react-icons/md';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from '../chartAnimations/AnimatedProgressProvider'

const Charts = () => {
   return (
      <div className='charts m-4'>
         <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MdMoreVert  fontSize="34px" />
         </div><hr />
         <div className='chart-body'>
            <div className='cir-chart'>
               <AnimatedProgressProvider
               valueStart={0}
               valueEnd={70}
               duration={1.5}
               easingMethod={easeQuadInOut}
               repeat
               >
               {value => {
                  const roundedValue = Math.round(value)
                  return (
                     <CircularProgressbar 
                     value={value}
                     text={`${roundedValue}%`}
                     strokeWidth='3'
                     styles={buildStyles({ pathTransition: "none"})}
                     />
                  )
               }}
               </AnimatedProgressProvider>
            </div>
         </div>
      </div>
   )
}

export default Charts