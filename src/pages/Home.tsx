import MainImage from '../assets/image/geo-image.png';
import ResImage_1 from '../assets/image/geo_1.png';
import ResImage_2 from '../assets/image/geo_2.png';
import ResImage_3 from '../assets/image/geo_3.png';
import ResImage_4 from '../assets/image/geo_4.png';
import ModelImage from '../assets/image/model.jpg';

const Home: React.FC = () => {
  return (
    <div className='relative'>
      <div className='flex justify-center h-[100dvh] md:h-screen'>
        <div className='font-main text-4xl leading-normal w-[50%]'>
          <img src={ModelImage} alt='Image' />
          <div className='pt-8 min-[500px]:pt-6 min-[1100px]:pt-2'>
            <p className='text-orange text-2xl'>Hey,</p>
            <p className='text-blue'>Your hair is our canvas!</p>
            <p className='text-pink'>
              Beautiful hair with beautiful care
              <span className='text-red text-5xl ml-2'>.</span>
            </p>
          </div>
        </div>
        <img src={MainImage} alt='Image' className='h-screen hidden md:block' />
      </div>

      <div className='md:hidden'>
        <img
          src={ResImage_1}
          alt='Image_1'
          className='absolute top-0 w-[80px]'
        />
        <img
          src={ResImage_2}
          alt='Image_2'
          className='absolute top-0 right-0 w-[80px]'
        />
        <img
          src={ResImage_3}
          alt='Image_3'
          className='absolute bottom-0 w-[80px]'
        />
        <img
          src={ResImage_4}
          alt='Image_4'
          className='absolute bottom-0 right-0 w-[80px]'
        />
      </div>
    </div>
  );
};

export default Home;
