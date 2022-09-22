import {
	useBlockProps, 
	RichText,
} from '@wordpress/block-editor';
import {useState} from '@wordpress/element';

export default function save( {attributes} ) {
	const blockProps = useBlockProps.save();
console.log(attributes);
console.log(blockProps);
		return (
			<div {...blockProps}>
				<RichText.Content tagName="h2" value={attributes.content} />
			</div>
		);
	
	
}
