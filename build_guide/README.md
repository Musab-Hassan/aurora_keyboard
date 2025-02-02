# Aurora Keyboard Build Guide

Before getting started, ensure you have fully read through the README.md file in the project root. Make sure you have all the required parts and tools before getting started.

This guide will cover how I built the keyboard and will provide the main steps however it expects you to already understand how mechanical keyboard work and have experience with soldering small components. Having some experience with a soldering iron is sufficient if you decide to just go with the required soldering. The only part that requires exceptional hand soldering skills or a reflow station is if you choose to solder the SMD LEDs. They are exceptionally difficult to solder by hand however they are neither required nor recommended and are entirely optional.

This guide also expects that you made no changes to the pin layout on the nice!nano on each side and are going to use a 3rd nice!nano as a dongle. If you chose to not do these, you can still follow the guide but must [modify the ZMK config](https://github.com/Musab-Hassan/zmk-config-aurora/tree/main/config/boards/shields/aurora) for your keyboard to function properly.

## PCB Ordering

Before starting the build also ensure you have both PCBs and there are no major defects on them. You can order both PCBs from JLCPCB or PCBWay (I chose JLC).

1. Go to the [JLCPcb website](https://jlcpcb.com/)
2. Drag and drop one of the gerber zip files from `pcb/gerber`
3. You only have to change the color (I chose black) and just leave everything else at default
4. Add it to cart and repeat the same steps for the other zip file
5. Place your order

Once you have your PCB we are ready to build!
