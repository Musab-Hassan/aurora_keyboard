function combo_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[88.9619699,-170.8992804],[88.9992807,-67.1992804]]).appendArc([90.9992806,-65.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([269.85,-65.2]).appendArc([271.85,-67.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.85,-170.9]).appendArc([269.85,-172.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.9619698,-172.9]).appendArc([88.9619699,-170.8992804],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[205.9,-127.05],[212.9,-127.05]]).appendPoint([212.9,-113.05]).appendPoint([205.9,-113.05]).appendPoint([205.9,-127.05]).close().innerToCAG()
.union(
    new CSG.Path2D([[234.75,-127.05],[241.75,-127.05]]).appendPoint([241.75,-113.05]).appendPoint([234.75,-113.05]).appendPoint([234.75,-127.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[224.6,-165.4],[242.1,-165.4]]).appendPoint([242.1,-148.9]).appendPoint([224.6,-148.9]).appendPoint([224.6,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.55,-165.4],[223.05,-165.4]]).appendPoint([223.05,-148.9]).appendPoint([205.55,-148.9]).appendPoint([205.55,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.5,-165.4],[204,-165.4]]).appendPoint([204,-148.9]).appendPoint([186.5,-148.9]).appendPoint([186.5,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.06875,-165.4],[182.56875,-165.4]]).appendPoint([182.56875,-148.9]).appendPoint([165.06875,-148.9]).appendPoint([165.06875,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[141.25625,-165.4],[158.75625,-165.4]]).appendPoint([158.75625,-148.9]).appendPoint([141.25625,-148.9]).appendPoint([141.25625,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.44375,-165.4],[134.94375,-165.4]]).appendPoint([134.94375,-148.9]).appendPoint([117.44375,-148.9]).appendPoint([117.44375,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.63125,-165.4],[111.13125,-165.4]]).appendPoint([111.13125,-148.9]).appendPoint([93.63125,-148.9]).appendPoint([93.63125,-165.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[224.6,-146.35],[242.1,-146.35]]).appendPoint([242.1,-129.85]).appendPoint([224.6,-129.85]).appendPoint([224.6,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.55,-146.35],[223.05,-146.35]]).appendPoint([223.05,-129.85]).appendPoint([205.55,-129.85]).appendPoint([205.55,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.5,-146.35],[204,-146.35]]).appendPoint([204,-129.85]).appendPoint([186.5,-129.85]).appendPoint([186.5,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.45,-146.35],[184.95,-146.35]]).appendPoint([184.95,-129.85]).appendPoint([167.45,-129.85]).appendPoint([167.45,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.4,-146.35],[165.9,-146.35]]).appendPoint([165.9,-129.85]).appendPoint([148.4,-129.85]).appendPoint([148.4,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.35,-146.35],[146.85,-146.35]]).appendPoint([146.85,-129.85]).appendPoint([129.35,-129.85]).appendPoint([129.35,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.3,-146.35],[127.8,-146.35]]).appendPoint([127.8,-129.85]).appendPoint([110.3,-129.85]).appendPoint([110.3,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-146.35],[108.75,-146.35]]).appendPoint([108.75,-129.85]).appendPoint([91.25,-129.85]).appendPoint([91.25,-146.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.075,-127.3],[232.575,-127.3]]).appendPoint([232.575,-110.8]).appendPoint([215.075,-110.8]).appendPoint([215.075,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.5,-127.3],[204,-127.3]]).appendPoint([204,-110.8]).appendPoint([186.5,-110.8]).appendPoint([186.5,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.45,-127.3],[184.95,-127.3]]).appendPoint([184.95,-110.8]).appendPoint([167.45,-110.8]).appendPoint([167.45,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.4,-127.3],[165.9,-127.3]]).appendPoint([165.9,-110.8]).appendPoint([148.4,-110.8]).appendPoint([148.4,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.35,-127.3],[146.85,-127.3]]).appendPoint([146.85,-110.8]).appendPoint([129.35,-110.8]).appendPoint([129.35,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.3,-127.3],[127.8,-127.3]]).appendPoint([127.8,-110.8]).appendPoint([110.3,-110.8]).appendPoint([110.3,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-127.3],[108.75,-127.3]]).appendPoint([108.75,-110.8]).appendPoint([91.25,-110.8]).appendPoint([91.25,-127.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[224.6,-89.2],[242.1,-89.2]]).appendPoint([242.1,-72.7]).appendPoint([224.6,-72.7]).appendPoint([224.6,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[224.6,-108.25],[242.1,-108.25]]).appendPoint([242.1,-91.75]).appendPoint([224.6,-91.75]).appendPoint([224.6,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.55,-89.2],[223.05,-89.2]]).appendPoint([223.05,-72.7]).appendPoint([205.55,-72.7]).appendPoint([205.55,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.55,-108.25],[223.05,-108.25]]).appendPoint([223.05,-91.75]).appendPoint([205.55,-91.75]).appendPoint([205.55,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.5,-89.2],[204,-89.2]]).appendPoint([204,-72.7]).appendPoint([186.5,-72.7]).appendPoint([186.5,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.5,-108.25],[204,-108.25]]).appendPoint([204,-91.75]).appendPoint([186.5,-91.75]).appendPoint([186.5,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.45,-89.2],[184.95,-89.2]]).appendPoint([184.95,-72.7]).appendPoint([167.45,-72.7]).appendPoint([167.45,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.45,-108.25],[184.95,-108.25]]).appendPoint([184.95,-91.75]).appendPoint([167.45,-91.75]).appendPoint([167.45,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.4,-89.2],[165.9,-89.2]]).appendPoint([165.9,-72.7]).appendPoint([148.4,-72.7]).appendPoint([148.4,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.4,-108.25],[165.9,-108.25]]).appendPoint([165.9,-91.75]).appendPoint([148.4,-91.75]).appendPoint([148.4,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.35,-89.2],[146.85,-89.2]]).appendPoint([146.85,-72.7]).appendPoint([129.35,-72.7]).appendPoint([129.35,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.35,-108.25],[146.85,-108.25]]).appendPoint([146.85,-91.75]).appendPoint([129.35,-91.75]).appendPoint([129.35,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.3,-89.2],[127.8,-89.2]]).appendPoint([127.8,-72.7]).appendPoint([110.3,-72.7]).appendPoint([110.3,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.3,-108.25],[127.8,-108.25]]).appendPoint([127.8,-91.75]).appendPoint([110.3,-91.75]).appendPoint([110.3,-108.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-89.2],[108.75,-89.2]]).appendPoint([108.75,-72.7]).appendPoint([91.25,-72.7]).appendPoint([91.25,-89.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-108.25],[108.75,-108.25]]).appendPoint([108.75,-91.75]).appendPoint([91.25,-91.75]).appendPoint([91.25,-108.25]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = combo_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let top_plate__part_0_bounds = top_plate__part_0.getBounds();
                let top_plate__part_0_x = top_plate__part_0_bounds[0].x + (top_plate__part_0_bounds[1].x - top_plate__part_0_bounds[0].x) / 2
                let top_plate__part_0_y = top_plate__part_0_bounds[0].y + (top_plate__part_0_bounds[1].y - top_plate__part_0_bounds[0].y) / 2
                top_plate__part_0 = translate([-top_plate__part_0_x, -top_plate__part_0_y, 0], top_plate__part_0);
                top_plate__part_0 = rotate([0,0,0], top_plate__part_0);
                top_plate__part_0 = translate([top_plate__part_0_x, top_plate__part_0_y, 0], top_plate__part_0);

                top_plate__part_0 = translate([0,0,0], top_plate__part_0);
                let result = top_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_plate_case_fn();
            }

        