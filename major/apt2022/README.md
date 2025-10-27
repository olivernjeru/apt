# APT 2022 — Introduction to Assembly Programming

A collection of real-mode x86 assembly exercises and a tiny bootable micro-OS built from scratch. Work covers BIOS interrupt usage for screen, keyboard, and storage, plus simple device routines.

## Key Topics / Skills

- x86 Assembly (real mode)
- BIOS interrupts: int 10h (video), 13h (disk), 16h (keyboard)
- Bootloaders and kernel handoff
- VGA text/graphics primitives
- Basic peripheral routines (e.g., stepper motor)

## Highlights

- Micro OS (Bootloader + Kernel)
  - Boot sector loader reads kernel, verifies, and jumps to it; kernel implements basic commands (help/cls/reboot), simple command buffer, scrolling, and cursor control.
  - Bootloader: [micro-os_loader.asm](https://github.com/olivernjeru/apt/blob/main/major/apt2022/micro-os_loader.asm)
  - Kernel: [micro-os_kernel.asm](https://github.com/olivernjeru/apt/blob/main/major/apt2022/micro-os_kernel.asm)

- VGA/Graphics and Devices
  - Sample VGA routines and drawing.
  - VGA sample: [0_sample_vga_graphics.asm](https://github.com/olivernjeru/apt/blob/main/major/apt2022/0_sample_vga_graphics.asm)

- Keyboard & Mouse I/O
  - Keyboard: [keybrd.asm](https://github.com/olivernjeru/apt/blob/main/major/apt2022/keybrd.asm)
  - Mouse: [mouse.asm](https://github.com/olivernjeru/apt/blob/main/major/apt2022/mouse.asm)

- Stepper Motor Control
  - Assembly routines for stepping and timing.
  - Stepper motor: [stepper_motor.asm](https://github.com/olivernjeru/apt/blob/main/major/apt2022/stepper_motor.asm)

## Notes

- These are low-level exercises targeting legacy BIOS on x86; to experiment, use an emulator (e.g., QEMU/Bochs) and appropriate assemblers.
