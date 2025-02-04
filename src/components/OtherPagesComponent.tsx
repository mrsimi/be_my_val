import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */

interface PageContent {
	imageTitle: string;
	imageUrl: string;
}

interface OtherPagesComponentProps {
	title: string;
	imagesContent: PageContent[];
    currentPage: number;
	handleCheckboxChange: (value: string, checked: boolean, currentPage: number) => void; // Defining the prop type
}

export default function OtherPagesComponent({
	title,
	imagesContent,
	handleCheckboxChange,
    currentPage
}: OtherPagesComponentProps) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	// Handle image click
	const handleImageClick = (imageUrl: string) => {
		setSelectedImage(imageUrl); // Set selected image URL
	};

	// Handle "Next" button click
	const handleNextClick = () => {
		if (selectedImage) {
			handleCheckboxChange(selectedImage, true, currentPage); // Pass the selected image URL to the parent
		} else {
			alert('Please select an image first!');
		}
	};

	return (
		<div className="bg-black text-pink-300 p-4 h-screen flex items-center justify-center font-mono flex-col">
			<p className="uppercase text-2xl font-bold mb-4">{title}</p>
			<div className="flex flex-row gap-10">
				{imagesContent.map((image, index) => (
					<div
						key={index}
						className="mt-10"
						onClick={() => handleImageClick(image.imageTitle)}
					>
                        {selectedImage === image.imageTitle && (
							<div className="mt-10 text-center text-pink-500">Selected</div>
						)}
						<img
							className="block cursor-pointer"
							src={image.imageUrl}
							alt={`Valentine GIF ${index + 1}`}
							style={{ height: '300px' }}
						/>
                        <p style={{width: '50%'}}>{image.imageTitle}</p>
						
					</div>
				))}
			</div>
			<div className="mt-10">
				<button
					className="px-10 py-2 bg-pink-300 mx-10 text-black uppercase rounded-md"
					onClick={handleNextClick}
				>
					Next
				</button>
			</div>
		</div>
	);
}
