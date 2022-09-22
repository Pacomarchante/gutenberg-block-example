import {
	useBlockProps, 
	RichText,
} from '@wordpress/block-editor';

export default function save( {attributes} ) {
	const blockProps = useBlockProps.save();
	console.log(attributes);
	return (

		<RichText.Content
			{ ...blockProps }
			tagName="h2"
			value={ attributes.content }
		/>

	);
}
