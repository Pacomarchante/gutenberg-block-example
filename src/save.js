import {
	useBlockProps, 
	RichText,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';

export default function save( {attributes} ) {
	const blockProps = useBlockProps.save();
	console.log(attributes);
	return (

		<div { ...blockProps }>
			<RichText.Content
				className={ `has-text-align-${attributes.alignment}` }
				tagName="h2"
				value={ attributes.content }
			/>
		</div>

	);
}
