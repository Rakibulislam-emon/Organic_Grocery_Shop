import appStore from '../../assets/downloadApp/asset 35.png';
import googlePlay from '../../assets/downloadApp/asset 36.png';
import buy from '../../assets/downloadApp/asset 37.png';

export default function DownloadApp() {
  return (
    <main className="bg-[#ffc107]  max-w-screen-2xl mx-auto  max-sm:h-[485px] h-[460px] lg:h-[456px] rounded-3xl my-20 flex flex-col lg:flex-row justify-evenly items-center  p-8">
        <div className="flex flex-col text-center lg:text-left ">
            {/* Texts */}
            <h1 className="text-3xl font-bold mb-4">Download Organic App</h1>
            <p className="text-lg mb-6">Online Orders made easy, fast and reliable</p>
            {/* Images for App Store and Google Play */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-4">
                <img src={appStore} alt="Download on the App Store" className="lg:h-16" />
                <img src={googlePlay} alt="Get it on Google Play" className="h-16" />
            </div>
        </div>
        <div className="flex justify-center lg:justify-end">
            {/* Image Buy */}
            <img src={buy} alt="Buy Organic" className="h-60 lg:h-[456px] " />
        </div>
    </main>
  );
}
