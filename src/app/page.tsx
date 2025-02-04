/* eslint-disable @next/next/no-img-element */
// At the top of your component file
'use client';

import { useState } from 'react';

import FirstPageComponent from '@/components/FirstPageComponent';
import OtherPagesComponent from '@/components/OtherPagesComponent';

interface PageContent {
	imageTitle: string;
	imageUrl: string;
}

interface AppPages {
	page: number;
	title: string;
	content: PageContent[];
}

export default function Home() {
	const [, setAnswers] = useState<string[]>([]);
	const [pageNumber, setPageNumber] = useState<number>(0);

	const pageOneClicked = (answer: string) => {
		if (answer === 'yes') {
			setPageNumber(1);
		} else {
			setPageNumber(-1);
		}
	};

	const handleCheckboxChange = (
		imageUrl: string,
		checked: boolean,
		currentPage: number
	) => {
		if (checked) {
			// Use functional form of setAnswers to ensure you're always updating with the latest state
			setAnswers((prevAnswers) => {
				const updatedAnswers = [...prevAnswers, imageUrl];

				if (currentPage == 5) {
					//re_h2547e9j_LciMgdC93Qty2GmAFacythFW

					// const resend = new Resend('re_h2547e9j_LciMgdC93Qty2GmAFacythFW');
					// const emailResponse = resend.emails.send({
					//   from: 'Personal <hello@turntablecharts.com>',
					//   to: ['adegokesimi@gmail.com'],
					//   subject: 'Would you be my val',
					//   text: JSON.stringify(updatedAnswers)
					// });
					//console.log(emailResponse)

					fetch('https://webhook.site/9a4a08b3-fae0-4e4a-9242-1915bb793004', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(updatedAnswers), // Sending the form data
					});

					//const data = await response.json();
					console.log('Updated answers:', updatedAnswers);
				}
				return updatedAnswers;
			});
			setPageNumber(currentPage + 1);
		}
	};

	const appContent: AppPages[] = [
		{
			page: 1,
			title: 'Choose a token that doth signify words of affirmation.',
			content: [
				{
					imageTitle: 'A mind journal',
					imageUrl:
						'https://bbipbooks.com/wp-content/uploads/2024/11/image_50352641-1-scaled.jpg',
				},

				{
					imageTitle: 'An affirmation playlist',
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sah_sSN-mpCYJTnbHMVyzhnpMjzWOVUuYA&s',
				},
				{
					imageTitle: 'A personalized app where you get cute messages each day',
					imageUrl:
						'https://www.screenkit.xyz/wp-content/uploads/2021/05/Screen-Shot-2021-05-16-at-2.18.46-pm-1024x1021.png',
				},
			],
		},
		{
			page: 2,
			title:
				'Select a gift that doth signify acts of service, though we be parted by distance.',
			content: [
				{
					imageTitle: 'A wild card to plan anything in future',
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qPaPFahHfys802s4C0ReCkwYcvKoPjSa9A&s',
				},

				{
					imageTitle: 'or a wild card help me with research in future',
					imageUrl:
						'https://cdni.iconscout.com/illustration/premium/preview/cute-scientist-girl-doing-science-research-illustration-download-in-svg-png-gif-file-formats--holding-magnifier-experiment-chemist-character-pack-kids-illustrations-8334715.png?f=webp&h=700',
				},
			],
		},
		{
			page: 3,
			title: 'Select a token of gift thy heart wishes to behold',
			content: [
				{
					imageTitle: 'maya dress from temi adebayo',
					imageUrl:
						'https://www.shoptemiadebayo.com/storage/product-images/PTQ1HNKOYk.jpg',
				},

				{
					imageTitle: 'another dress',
					imageUrl:
						'https://www.shoptemiadebayo.com/storage/product-images/PTQ1HNKOYk.jpg',
				},
				{
					imageTitle: 'a table from mameh',
					imageUrl:
						'https://d353o6jrfs8ut8.cloudfront.net/uploads/30812/24/02/170696025065be257a5617b0302241706960250.webp',
				},
			],
		},
		{
			page: 4,
			title:
				'Thine precious time on the appointed day, how dost thou wish we spend it?',
			content: [
				{
					imageTitle: 'virtual movie night (romance)',
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidjU1Eq1o2RbAl-7cax3PtAkXdsAJuU7zTQ&s',
				},

				{
					imageTitle: 'or virtual game (board/card)',
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnf52Gp2XQqyPeIGu4tWDY7JYIjAVmNe7BOQ&s',
				},
			],
		},
		{
			page: 5,
			title:
				'Select a token of physical touch, though we be seperated by distance',
			content: [
				{
					imageTitle: 'pink mug',
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIt52-RDjiCewB8b1WhRS5jdKSMgaUM3YDjA&s',
				},

				{
					imageTitle: 'water bottle',
					imageUrl:
						'https://salescabal.s3.eu-west-3.amazonaws.com/stores/204706/products/3c00370ffc62320fa8d692f57a94c73986bb32bf.jpeg',
				},
				{
					imageTitle: 'cute pillow',
					imageUrl:
						'https://inspecialhome.com/cdn/shop/files/cute-whimsical-big-eyes-puffy-decorative-throw-pillow-349495.jpg?crop=center&height=936&v=1718576983&width=750',
				},
			],
		},
	];

	let component;
	if (pageNumber === 0) {
		component = <FirstPageComponent pageClicked={pageOneClicked} />;
	} else if (pageNumber >= 1 && pageNumber <= 5) {
		component = (
			<OtherPagesComponent
				handleCheckboxChange={handleCheckboxChange}
				title={appContent[pageNumber - 1].title}
				imagesContent={appContent[pageNumber - 1].content}
				currentPage={pageNumber}
			/>
		);
	} else if (pageNumber === -1) {
		component = (
			<div>
				<div className="bg-black text-pink-300 p-4 h-screen flex items-center justify-center font-mono flex-col">
					<p className="uppercase text-2xl font-bold mb-4">Oh no</p>
					<img
						className="block"
						src="https://media.giphy.com/media/Ty9Sg8oHghPWg/giphy.gif?cid=790b76111k4d5zles44kuzmpf3rgftxa40sjk5kce9o0p62l&ep=v1_gifs_search&rid=giphy.gif&ct=g"
						alt="Valentine GIF"
					/>
				</div>
			</div>
		);
	} else {
		component = (
			<div>
				<div className="bg-black text-pink-300 p-4 h-screen flex items-center justify-center font-mono flex-col">
					<p className="uppercase text-2xl font-bold mb-4">
						thank you for making me the <br />
						happiest nerd in the eastern hemisphere
					</p>
					<img
						className="block"
						src="https://media.giphy.com/media/aQYR1p8saOQla/giphy.gif?cid=790b7611flmd2vpy2rx94rgj8xguu1zg7yol2ntn6kby5yl5&ep=v1_gifs_search&rid=giphy.gif&ct=g"
						alt="Valentine GIF"
					/>
				</div>
			</div>
		);
	}

	return component;
}
