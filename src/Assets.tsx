import play_icon from './assets/play_arrow.svg'
import pause_icon from './assets/pause.svg'
import add_icon from './assets/add.svg'

const DATA_BLANK_ALBUM = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   height="128"
   viewBox="0 0 128 128"
   width="128"
   version="1.1"
   id="svg6"
   sodipodi:docname="album.svg"
   inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)">
  <metadata
     id="metadata12">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs10" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1366"
     inkscape:window-height="707"
     id="namedview8"
     showgrid="false"
     inkscape:zoom="2.0145178"
     inkscape:cx="51.342111"
     inkscape:cy="20.965257"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  <path
     d="M 0,0 H 128 V 128 H 0 Z"
     fill="none"
     id="path2"
     style="stroke-width:5.33333" />
  <path
     d="M 64,10.666667 C 34.56,10.666667 10.666667,34.56 10.666667,64 10.666667,93.44 34.56,117.33333 64,117.33333 93.44,117.33333 117.33333,93.44 117.33333,64 117.33333,34.56 93.44,10.666667 64,10.666667 Z M 64,88 C 50.72,88 40,77.28 40,64 40,50.72 50.72,40 64,40 77.28,40 88,50.72 88,64 88,77.28 77.28,88 64,88 Z m 0,-29.333333 c -2.933333,0 -5.333333,2.4 -5.333333,5.333333 0,2.933333 2.4,5.333333 5.333333,5.333333 2.933333,0 5.333333,-2.4 5.333333,-5.333333 0,-2.933333 -2.4,-5.333333 -5.333333,-5.333333 z"
     id="path4"
     style="stroke-width:5.33333" />
</svg>
`
export const BLOB_BLANK_ALBUM = new Blob([DATA_BLANK_ALBUM], {type: 'image/svg+xml'})
export const ICON_BLANK_ALBUM = URL.createObjectURL(BLOB_BLANK_ALBUM)

export const ICON_PLAY = play_icon
export const ICON_PAUSE = pause_icon
export const ICON_ADD = add_icon