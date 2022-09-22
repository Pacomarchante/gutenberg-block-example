/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { registerBlockType } from '@wordpress/blocks';
import {
	useBlockProps,
	RichText,
	InspectorControls
} from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
// import {more} from '@wordpress/icons';
import {CheckboxControl} from '@wordpress/components';
import {useState} from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	
	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	const [isChecked, setChecked] = useState(attributes.isChecked);
	
	const onChangeChecked = () => {
		setChecked(!isChecked);
		setAttributes( { isChecked: !isChecked } );
	};
	console.log(isChecked);
	
	return (
		<div>
			<InspectorControls>
				<Panel header='Panel de ejemplo'>
					<PanelBody title='PanelBody de ejemplo' initialOpen={true}>
						<PanelRow>Ejemplo de PanelRow</PanelRow>
						<PanelRow>
							<CheckboxControl
								label="Solo para usuarios registrados"
								help="Si esta opción está activada, solo los usuarios registrados podrán ver el contenido de este bloque."
								checked={isChecked}
								onChange={onChangeChecked}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<RichText
				{ ...blockProps }
				tagName="h2"
				onChange={ onChangeContent }
				value={ attributes.content }
			/>
		</div>
	);

}
