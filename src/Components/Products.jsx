import React from 'react';
import webCameraImg from '../assets/webcamera.jpg';
import speakerImg from '../assets/speker.jpg';
import laptopImg from '../assets/laptop.jpg';
import printerImg from '../assets/printer1.jpg';
import tvImg from '../assets/tv.jpg';
import scannerImg from '../assets/scanner.png';
import powerSupplyImg from '../assets/power_supply.jpg';
import pendriveImg from '../assets/scandisk.png';
import computerImg from '../assets/computer.jpg';
import cpuImg from '../assets/cpu.jpg';
import cameraImg from '../assets/camera.jpg';
import upsImg from '../assets/ups.jpg';
import speaker1Img from '../assets/speaker1.jpeg';
import printerJpegImg from '../assets/printer.jpeg';
import brotherImg from '../assets/brother.jpg';

const products = [
  {
    title: 'Web Camera',
    image: webCameraImg,
    description:
      'A webcam is a video camera that feeds or streams an image or video in real time to or through a computer to a computer network, such as the Internet. Webcams are typically small cameras that sit on a desk, attach to a user\'s monitor, or are built into the hardware.',
  },
  {
    title: 'Speaker/Buffer',
    image: speakerImg,
    description:
      'Speakers are one of the most common output devices used with computer systems. Some speakers are designed to work specifically with computers, while others can be hooked up to any type of sound system. Regardless of their design, the purpose of speakers is to produce audio output that can be heard by the listener.',
  },
  {
    title: 'Laptop',
    image: laptopImg,
    description:
      'A laptop is a small, portable personal computer with a screen and alphanumeric keyboard. Laptops are folded shut for transportation, and thus are suitable for mobile use.',
  },
  {
    title: 'Printer',
    image: printerImg,
    description:
      'A printer is a device that accepts text and graphic output from a computer and transfers the information to paper, usually to standard size sheets of paper.',
  },
  {
    title: 'Television',
    image: tvImg,
    description:
      'A television is a device that receives broadcast signals and reproduces them on a screen. Modern TVs can connect to the internet and display content from a variety of sources.',
  },
  {
    title: 'Scanner',
    image: scannerImg,
    description:
      'A scanner is a device that captures images from photographic prints, posters, magazine pages, and similar sources for computer editing and display.',
  },
  {
    title: 'Power Supply',
    image: powerSupplyImg,
    description:
      'A power supply is a hardware component that supplies power to an electrical device. It regulates the voltage to an appropriate level for the device.',
  },
  {
    title: 'Pendrive',
    image: pendriveImg,
    description:
      'A pendrive is a small, portable flash memory card that plugs into a computer\'s USB port and functions as a portable hard drive.',
  },
  {
    title: 'Desktop Computer',
    image: computerImg,
    description:
      'A desktop computer is a personal computer designed for regular use at a single location on or near a desk or table due to its size and power requirements.',
  },
  {
    title: 'CPU Processor',
    image: cpuImg,
    description:
      'The central processing unit (CPU) is the primary component of a computer that processes instructions and performs calculations.',
  },
  {
    title: 'Digital Camera',
    image: cameraImg,
    description:
      'A digital camera is a camera that captures photographs in digital memory. Most cameras produced today are digital, largely replacing those that capture images on photographic film.',
  },
  {
    title: 'UPS System',
    image: upsImg,
    description:
      'An uninterruptible power supply (UPS) is an electrical apparatus that provides emergency power to a load when the input power source or mains power fails.',
  },
  {
    title: 'Premium Speaker',
    image: speaker1Img,
    description:
      'High-quality speakers designed for professional audio applications, delivering crystal clear sound with enhanced bass response.',
  },
  {
    title: 'Laser Printer',
    image: printerJpegImg,
    description:
      'A laser printer is a popular type of personal computer printer that uses a non-impact photocopier technology.',
  },
  {
    title: 'Brother Printer',
    image: brotherImg,
    description:
      'Brother printers are known for their reliability and high-quality printing capabilities, perfect for both home and office use.',
  },
];

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto py-8 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Welcome To Lakhmani Infotech</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, idx) => (
          <div
            key={product.title}
            className="bg-white shadow-md border border-gray-100 rounded-lg p-3 flex flex-col items-center hover:shadow-xl transition duration-300 max-w-xs mx-auto w-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] h-24 object-contain mb-2 rounded"
            />
            <h3 className="text-lg font-semibold mb-1 text-center">{product.title}</h3>
            <p className="text-gray-700 text-sm text-center">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 