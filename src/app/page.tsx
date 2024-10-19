import Image from "next/image";
import { FancyButton } from "./(components)/fancy-button";
import { FaArrowRight } from "react-icons/fa6";
import MoneyManLarge from "../assets/money-man-holding-money-lg.png";
import AssetPitch from "../assets/assets-pitch-image.png";
import EllipseLockFrame from "../assets/ellipse-lock-frame.png";
import WalletFrame from "../assets/wallet-patch-frame.png"

export default function Home() {
  return (
    <div className="w-full py-20">
      <header>
        <div className="w-full">
          <div className="mx-auto w-fit">
            <FancyButton label="Introducing Juggervault" />
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <h2 className="font-clash font-medium text-6xl">Access the <strong className="text-[#95B0FF]">Funds</strong> You Need, <br /> When You Need Them</h2>
          </div>

          <div className="mt-8">
            <p className="text-sec-50 text-center max-w-xl mx-auto">Unlock financial freedom by using your assets as collateral and receive instant loans in jNGN, our stablecoin pegged to the Naira.</p>
          </div>

          <div className="w-fit mx-auto mt-10">
            <button className="rounded-[52px] bg-[#1E42AC] text-white font-semibold px-6 py-3 flex items-center justify-evenly gap-3 shadow-shadowin">
              Join the waitlist 
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full mt-20">
          <div className="w-full relative h-[595px]">
            <Image src={MoneyManLarge} alt="banner image" fill />
          </div>
        </div>
      </header>

      <div className="mt-20">
        <div className="w-full">
          <div className="w-max mx-auto text-center">
            <h3 className="font-clash font-medium text-3xl max-w-3xl">How Juggervault Works</h3>
            <p className="mt-5 text-sec-50 font-medium max-w-xl">
              Your assets, your loans, your control. Unlock your potential with decentralised savings and loans in just a few easy steps.
            </p>
          </div>

          <div className="mt-16">
            <div className="w-full px-28">
              <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <li className="w-full text-center bg-white p-5 border border-primary-50 py-8 rounded-2xl">
                  <div className="w-full">
                    <div>
                      <span className="w-10 h-10 rounded-full bg-[#95B0FF] shadow-roundgrad p-3 text-white font-semibold text-md">01</span>
                    </div>
                    <h4 className="font-clash font-medium text-xl my-10">Tokenize Your Assets</h4>

                    <div className="relative h-52">
                      <Image src={AssetPitch} alt="man-with-assets" fill />
                    </div>
                    <p className="mt-5 text-sec-50">Use licensed real-world assets such as property or vehicles as collateral.</p>
                  </div>
                </li>

                <li className="w-full text-center bg-white p-5 border border-primary-50 py-8 rounded-2xl">
                  <div className="w-full">
                    <div>
                      <span className="w-10 h-10 rounded-full bg-[#95B0FF] shadow-roundgrad p-3 text-white font-semibold text-md">02</span>
                    </div>
                    <h4 className="font-clash font-medium text-xl my-10">Get Instant Loans in jNGN</h4>

                    <div className="relative h-52">
                      <Image src={WalletFrame} alt="man-with-assets" fill />
                    </div>
                    <p className="mt-5 text-sec-50">Secure your loan in our stablecoin and access funds without delays.</p>
                  </div>
                </li>

                <li className="w-full text-center bg-white p-5 border border-primary-50 py-8 rounded-2xl">
                  <div className="w-full">
                    <div>
                      <span className="w-10 h-10 rounded-full bg-[#95B0FF] shadow-roundgrad p-3 text-white font-semibold text-md">03</span>
                    </div>
                    <h4 className="font-clash font-medium text-xl my-10">Repay and Reclaim Your Assets</h4>

                    <div className="relative h-52">
                      <Image src={EllipseLockFrame} alt="man-with-assets" fill />
                    </div>
                    <p className="mt-5 text-sec-50">Once you&apos;ve repaid, your assets are yours again</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
