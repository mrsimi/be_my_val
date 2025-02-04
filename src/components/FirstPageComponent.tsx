/* eslint-disable @next/next/no-img-element */
interface FirstPageComponentProps {
    pageClicked: (value: string) => void; // Defining the prop type
  }
  
  export default function FirstPageComponent({ pageClicked }: FirstPageComponentProps) {
    return (
      <div className="bg-black text-pink-300 p-4 h-screen flex items-center justify-center font-mono flex-col">
        <p className="uppercase text-2xl font-bold mb-4">
          Hello Milady, 
          Will you be my valentine?
        </p>
        <img
          className="block"
          src="https://media.giphy.com/media/GiWEowj3nQv9C/giphy.gif?cid=ecf05e47zeciqnibvove59pww25lobrti585aq3hnl5tdsnv&ep=v1_gifs_related&rid=giphy.gif&ct=g"
          alt="Valentine GIF"
        />
        <div className="mt-10">
          <button
            className="px-10 py-2 bg-pink-300 mx-10 text-black uppercase rounded-md"
            onClick={() => pageClicked('yes')} // Correctly passing 'yes' when the button is clicked
          >
            Yes
          </button>
          <button
            className="px-10 py-2 bg-black mx-10 text-white border-2 uppercase rounded-md"
            onClick={() => pageClicked('no')} // Correctly passing 'no' when the button is clicked
          >
            No
          </button>
        </div>
      </div>
    );
  }
  