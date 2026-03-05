/* a mediocre version of the WS2812-2020 LED
*  I mean, it works fine honestly.
*  it does force it to exist on both sides though becuase that's how I used it.
*  if you don't want that to happen make sure to delete the pads on the rear (the four lines with B.)
*  also notice that the back pads are flipped because, well, the board is mirrored when you flip it over.
*  the front and back are rotated 180 degrees from each other, though the footprint makes no mention of this;
*  so I would be careful if you are using this design with a pick-n-place. You'd likely want to buff this code.
*/
module.exports = {
    params: {
        designator: 'LED',
        side: 'F',
        din: {type: 'net', value: 'din'},
        vcc: {type: 'net', value: 'vcc'},
        dout: {type: 'net', value: 'dout'},
        gnd: {type: 'net', value: 'gnd'},
    },
    body: p => `
(module WS2812-2020 (layer F.Cu) (tedit 65E2CA42)
${p.at /* parametric position */} 

${'' /* footprint reference */}   
(descr "")
(attr smd)
(fp_text reference REF** (at 0.517 -1.86247 0) (layer F.SilkS)
  (effects (font (size 0.64 0.64) (thickness 0.15)))
)
(fp_text value WS2812 (at 4.581 1.88303 0) (layer F.Fab)
  (effects (font (size 0.64 0.64) (thickness 0.15)))
)
(pad 3 smd rect (at -0.915 -0.55 ${p.rot}) (size 0.7 0.7) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102) ${p.dout.str})
(pad 4 smd rect (at -0.915 0.55 ${p.rot}) (size 0.7 0.7) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102) ${p.gnd.str})
(pad 1 smd rect (at 0.915 0.55  ${p.rot}) (size 0.7 0.7) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102) ${p.din.str})
(pad 2 smd rect (at 0.915 -0.55 ${p.rot}) (size 0.7 0.7) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102) ${p.vcc.str})

(pad 3 smd rect (at -0.915 -0.55 ${p.rot}) (size 0.7 0.7) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102) ${p.gnd.str})
(pad 4 smd rect (at -0.915 0.55 ${p.rot}) (size 0.7 0.7) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102) ${p.dout.str})
(pad 1 smd rect (at 0.915 0.55  ${p.rot}) (size 0.7 0.7) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102) ${p.vcc.str})
(pad 2 smd rect (at 0.915 -0.55 ${p.rot}) (size 0.7 0.7) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102) ${p.din.str})

(fp_line (start 1.1 1.0) (end -1.1 1.0) (layer F.Fab) (width 0.127))
(fp_line (start -1.1 1.0) (end -1.1 -1.0) (layer F.Fab) (width 0.127))
(fp_line (start -1.1 -1.0) (end 1.1 -1.0) (layer F.Fab) (width 0.127))
(fp_line (start 1.1 -1.0) (end 1.1 1.0) (layer F.Fab) (width 0.127))
(fp_line (start 1.515 -1.25) (end -1.515 -1.25) (layer F.CrtYd) (width 0.05))
(fp_line (start -1.515 -1.25) (end -1.515 1.25) (layer F.CrtYd) (width 0.05))
(fp_line (start -1.515 1.25) (end 1.515 1.25) (layer F.CrtYd) (width 0.05))
(fp_line (start 1.515 1.25) (end 1.515 -1.25) (layer F.CrtYd) (width 0.05))
(fp_circle (center 1.87 0.55) (end 1.97 0.55) (layer F.Fab) (width 0.2))
(fp_line (start 0.245 1.0) (end -0.245 1.0) (layer F.SilkS) (width 0.127))
(fp_line (start 0.245 -1.0) (end -0.245 -1.0) (layer F.SilkS) (width 0.127))
(fp_circle (center 1.87 0.55) (end 1.97 0.55) (layer F.SilkS) (width 0.2))
(fp_poly
  (pts
    (xy -0.3 -0.5)
    (xy 0.3 -0.5)
    (xy 0.3 0.0)
    (xy -0.3 0.0)
  ) (layer F.Fab) (width 0.01)
)
)`
}