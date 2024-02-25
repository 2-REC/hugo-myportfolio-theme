
From ... by ...
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/

Parameters:
* `dir` (default: none)
  * Directory containing images (all the images found in the directory will be part of the gallery).
  * If not set, a list of "figure" shortcode(s) can be added inside the "gallery" shortcode.
* `thumb` (default: `-thumb`)
  * Thumbnail suffix.
  * "[image].jpg" is used for the hi-res image, and "[image]-thumb.jpg" is used for the thumbnails. If [image]-thumb.jpg doesn't exist, then [image].jpg will be used for both hi-res and thumbnail images.

* Optional parameters
  * `caption-position`: Determines the captions' position over the image.
    * `bottom` (default)
    * `center`
    * `none` (hides captions on the page: will only show in PhotoSwipe)
  * `caption-effect`: Determines if/how captions appear upon hover.
    * `slide` (default)
    * `fade`
    * `none` (captions always visible)
  * `hover-effect`: Determines if/how images change upon hover.
    * `zoom` (default)
    * `grow`
    * `shrink`
    * `slideup`
    * `slidedown`
    * `none`
  * `hover-transition`: Determines if/how images change upon hover.
    * not set: smooth transition (default)
    * `none` (hard transition)
	* ! - Only works if `hover-effect` is set!

New optional parameters:
* `static` (default: `false`)
  * Images are by default looked for in the directory inside the post's content ("content/posts/.../<dir>".
  * If specified, images are looked for in the site's "static" folder (as it was originally).
* `images_copyright`: String (copyright)
=> General copyright for all images.
* `images`: Array (images parameters)
  * `src`: String (filename) - MANDATORY
  => Must correspond to an image in "dir" directory.
  * `title`: String (legend)
  => Legend of the image.
  * `copyright`: String (copyright)
  => Specific copyright for the image.

(
Additional parameters for the partial:
* "page" (automatic in shortcode)
Changed default values:
* `hover-effect`: `grow`
)

