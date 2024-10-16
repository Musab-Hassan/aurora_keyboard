module.exports = {
    params: {
        designator: 'niceView',
        side: 'F',
        VCC: {type: 'net', value: 'VCC'},
        GND: {type: 'net', value: 'GND'},
        SDA: undefined,
        SCL: undefined,
        CS: undefined
    },
    body: p => `
        (module lib:niceView_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value niceView (at -1.3 0) (layer F.Fab) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))

        ${''/* component outline */}
        (fp_line (start 0 -7) (end 36 -7) (layer F.SilkS) (width 0.381))
        (fp_line (start 36 -7) (end 36 7) (layer F.SilkS) (width 0.381))
        (fp_line (start 36 7) (end 0 7) (layer F.SilkS) (width 0.381))
        (fp_line (start 0 7) (end 0 -7) (layer F.SilkS) (width 0.381))

        ${'' /* pin names */}
        (fp_text user SDA (at 3.5 -5.08 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user SCL (at 3.5 -2.54 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at 3.5 0.00 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 3.5 2.54 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user CS (at 3.5 5.08 ${p.rot + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user SDA (at 3.5 -5.08 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user SCL (at 3.5 -2.54 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user VCC (at 3.5 0.00 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user GND (at 3.5 2.54 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
        (fp_text user CS (at 3.5 5.08 ${p.rot + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))

        (fp_text user nice!view (at 7 0 ${p.rot + 270}) (layer F.SilkS) (effects (font (size 1.5 1.5) (thickness 0.3))))

        ${'' /* pins */}
        (pad 5 thru_hole oval (at 1.3 -5.08 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SDA.str})
        (pad 4 thru_hole oval (at 1.3 -2.54 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SCL.str})
        (pad 3 thru_hole oval (at 1.3 0.00 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VCC.str})
        (pad 2 thru_hole rect (at 1.3 2.54 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 1 thru_hole oval (at 1.3 5.08 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.CS.str})
        )
        `
}