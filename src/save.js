import {useBlockProps} from '@wordpress/block-editor';

export default function save( {attributes} ) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<p>{attributes.message}</p>
		</div>
	);
}
