<?php
/**
 * Plugin Name:       Customblock
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       customblock
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function gutenberg_examples_dynamic_block_block_init() {

	register_block_type(
		__DIR__ . '/build/block.json',
		array(
			'render_callback' => 'gutenberg_examples_dynamic_block_render_callback',
		)
	);
}
add_action( 'init', 'gutenberg_examples_dynamic_block_block_init' );


/**
 * This function is called when the block is being rendered on the front end of the site
 *
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 */
function gutenberg_examples_dynamic_block_render_callback( $attributes, $content, $block_instance ) {
	// ob_start();
	// /**
	//  * Keeping the markup to be returned in a separate file is sometimes better, especially if there is very complicated markup.
	//  * All of passed parameters are still accessible in the file.
	//  */
	// // require plugin_dir_path( __FILE__ ) . 'template.php';
	// return ob_get_clean();
	$recent_posts = wp_get_recent_posts( array(
        'numberposts' => 1,
        'post_status' => 'publish',
    ) );
    if ( count( $recent_posts ) === 0 ) {
        return 'No posts';
    }
    $post = $recent_posts[ 0 ];
    $post_id = $post['ID'];
    return sprintf(
        '<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
        esc_url( get_permalink( $post_id ) ),
        esc_html( get_the_title( $post_id ) )
    );
}