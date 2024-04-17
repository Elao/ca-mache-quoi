import { styled } from '@mui/material'
import {useEffect, useState} from 'react'

export default function SlotMachineImage() {
  const primaryLightColor: string = '#ffdd76';
  const secondaryLightColor: string = '#f5b63b';

  const [oddLightsColor, setOddLightsColor] = useState<string>(primaryLightColor);
  const [evenLightsColor, setEvenLightsColor] = useState<string>(secondaryLightColor);

  // Animate the lights
  useEffect(() => {
    const interval = setInterval(() => {
      setOddLightsColor((prevColor) => (prevColor === primaryLightColor ? secondaryLightColor : primaryLightColor));
      setEvenLightsColor((prevColor) => (prevColor === primaryLightColor ? secondaryLightColor : primaryLightColor));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SVG viewBox="0 0 460 675" xmlns="http://www.w3.org/2000/svg">
      {/* slot machine body */}
      <path d="m413.6 0s-376 0-376 0c-5.6 0-10.2 4.6-10.2 10.2v653.8c0 5.6 4.6 10.2 10.2 10.2h376c5.6 0 10.2-4.6 10.2-10.2v-653.8c0-5.6-4.6-10.2-10.2-10.2zm-16 385.8-2.4 1.3c-.8.4-1.8.7-2.8.7h-339c-1 0-1.9-.2-2.8-.7l-2.4-1.3v-197.1l2.4-1.3c.8-.4 1.8-.7 2.8-.7h339c1 0 1.9.2 2.8.7l2.4 1.3z" fill="#143374"/>

      {/* slot machine handle */}
      <path d="m423.8 323.8h1.1c2.7 0 5.3 1.1 7.2 3s3 4.5 3 7.2v98.8c0 2.7-1.1 5.3-3 7.2s-4.5 3-7.2 3h-1.1z" fill="#f5b63b"/>
      <path d="m435 354h10.2c2.7 0 5.3 1.1 7.2 3s3 4.5 3 7.2v31.2c0 2.7-1.1 5.3-3 7.2s-4.5 3-7.2 3h-10.2z" fill="#f5b63b"/>
      <path d="m445.1 278.2h-5.9v75.8h5.9z" fill="#f5b63b"/>
      <path d="m441.5 214c1.2 0 2.3.2 3.4.7s2.1 1.1 2.9 2c.8.8 1.5 1.8 1.9 2.9s.7 2.3.6 3.4v55.2h-17.7v-55.2c0-2.4.9-4.6 2.6-6.3s3.9-2.6 6.3-2.6v-.2z" fill="#143374"/>

      {/* slot machine bottom */}
      <path d="m329.5 419.2h-226c-5.2 0-9.5 4.6-9.5 10.2v95.4c0 5.6 4.3 10.2 9.5 10.2h226c5.2 0 9.5-4.6 9.5-10.2v-95.4c0-5.6-4.3-10.2-9.5-10.2z" fill="#161a3d"/>
      <path d="m319.6 432.4h-204.8c-5.2 0-9.5 4.6-9.5 10.2v65.6c0 5.6 4.3 10.2 9.5 10.2h204.8c5.2 0 9.5-4.6 9.5-10.2v-65.6c0-5.6-4.3-10.2-9.5-10.2z" fill="#12122d"/>
      <path d="m146.4 499.8c12.2 0 22.1-10.6 22.1-23.7s-9.9-23.7-22.1-23.7-22.1 10.6-22.1 23.7 9.9 23.7 22.1 23.7z" fill="#12122d"/>
      <path d="m215.7 499.8c12.2 0 22.1-10.6 22.1-23.7s-9.9-23.7-22.1-23.7-22.1 10.6-22.1 23.7 9.9 23.7 22.1 23.7z" fill="#12122d"/>
      <path d="m286.8 499.9c12.2 0 22-10.6 22-23.7s-9.9-23.7-22-23.7-22.1 10.6-22.1 23.7 9.9 23.7 22.1 23.7z" fill="#12122d"/>
      <path d="m378.5 419h-15.5v34h15.5z" fill="#f5b63b"/>
      <path d="m366.6 424.1h8.3v23.7h-8.3z" fill="#12122d" stroke="#20203f"/>
      <path d="m95.1 553.6h142.8v43.8h-142.8z" fill="#12122d" stroke="#20203f"/>

      {/* slot machine top */}
      <path d="m27.5 142.1c-2.6 0-5-1-6.9-2.8-1.8-1.8-2.8-4.3-2.8-6.9s0 0 0 0l-13.3-93.4c0-2.6 1-5 2.8-6.8s4.3-2.8 6.9-2.8h420.6c2.6 0 5 1 6.9 2.8 1.8 1.8 2.8 4.3 2.8 6.8l-10.9 97.1c0 2.6-1 5.1-2.8 6.9s-4.3 2.8-6.8 2.8l-396.4-3.8z" fill="#0460fc"/>
      <path d="m416.8 51.9-12.7 70.2h-354.6l-14-70.2h381.2z" fill="#12122d" stroke="#20203f"/>

      {/* slot machine lights (organized clockwise) */}
      {/* top */}
      <circle cx="35.1" cy="40.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="69.1" cy="40.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="103.2" cy="40.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="137.2" cy="40.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="174.3" cy="40.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="216" cy="40.7" fill={evenLightsColor} r="8.5"/>
      <circle cx="254.6" cy="40.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="293.3" cy="40.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="333.5" cy="40.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="369" cy="40.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="405.5" cy="40.7" fill={oddLightsColor} r="8.5"/>

      {/* right */}
      <circle cx="430.9" cy="43.8" fill={evenLightsColor} r="8.5"/>
      <circle cx="427.8" cy="73.1" fill={oddLightsColor} r="8.5"/>
      <circle cx="423.1" cy="102.5" fill={evenLightsColor} r="8.5"/>

      {/* bottom */}
      <circle cx="417" cy="131.9" fill={oddLightsColor} r="8.5"/>
      <circle cx="384.5" cy="133.4" fill={evenLightsColor} r="8.5"/>
      <circle cx="352" cy="132.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="319.6" cy="132.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="287.1" cy="132.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="254.6" cy="132.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="222.2" cy="132.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="189.7" cy="132.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="157.3" cy="132.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="124.8" cy="132.5" fill={oddLightsColor} r="8.5"/>
      <circle cx="92.3" cy="132.5" fill={evenLightsColor} r="8.5"/>
      <circle cx="59.9" cy="132.5" fill={oddLightsColor} r="8.5"/>

      {/* left */}
      <circle cx="25.9" cy="90.1" fill={oddLightsColor} r="8.5"/>
      <circle cx="33.6" cy="122.6" fill={evenLightsColor} r="8.5"/>
      <circle cx="18.1" cy="57.7" fill={evenLightsColor} r="8.5"/>
    </SVG>
  )
}

const SVG = styled('svg')(() => ({
  width: '400px',
  position: 'fixed',
  top: '50%',
  right: '100px',
  transform: 'translateY(-50%)',
}));