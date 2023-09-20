import MainImage from '../assets/image/geo-image.png';
import ResImage_1 from '../assets/image/geo_1.png';
import ResImage_2 from '../assets/image/geo_2.png';
import ResImage_3 from '../assets/image/geo_3.png';
import ResImage_4 from '../assets/image/geo_4.png';

const Home: React.FC = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <div className='relative font-main text-4xl leading-normal w-[50%]'>
          <p className='text-orange text-2xl'>Hey,</p>
          <p className='text-blue'>Your hair is our canvas!</p>
          <p className='text-pink'>
            Beautiful hair with beautiful care
            <span className='text-red text-5xl ml-2'>.</span>
          </p>
        </div>
        <img
          src={MainImage}
          alt='Image'
          className='max-h-screen max-[780px]:hidden'
        />
      </div>
      <div className='min-[781px]:hidden'>
        <img
          src={ResImage_1}
          alt='Image_1'
          className='absolute top-[60px] min-[400px]:w-[100px] max-[500px]:w-[130px]'
        />
        <img
          src={ResImage_2}
          alt='Image_2'
          className='absolute top-[60px] right-0 min-[400px]:w-[100px] max-[500px]:w-[130px]'
        />
        <img
          src={ResImage_3}
          alt='Image_3'
          className='absolute bottom-[-60px] min-[400px]:w-[100px] max-[500px]:w-[130px]'
        />
        <img
          src={ResImage_4}
          alt='Image_4'
          className='absolute bottom-[-60px] right-0 min-[400px]:w-[100px] max-[500px]:w-[130px]'
        />
      </div>
    </div>
  );
};

export default Home;
