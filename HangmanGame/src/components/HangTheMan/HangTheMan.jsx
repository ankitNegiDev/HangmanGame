// importing all the images ..
import Level1 from '../../assets/images/1.svg';
import Level2 from '../../assets/images/2.svg';
import Level3 from '../../assets/images/3.svg';
import Level4 from '../../assets/images/4.svg';
import Level5 from '../../assets/images/5.svg';
import Level6 from '../../assets/images/6.svg';
import Level7 from '../../assets/images/7.svg';
import Level8 from '../../assets/images/8.svg';


function HangTheMan({ step }) {

    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];

    return (
        <div className='w-[500px] h-[500px]  rounded-lg overflow-hidden flex justify-center items-center'>
            <img
                src={step >= images.length ? images[images.length - 1] : images[step]}
                alt="Hangman Step"
                className="w-full h-full object-contain max-w-[90%] max-h-[90%]  rounded-lg shadow-lg"
            />
        </div>
    );
}

export default HangTheMan;
