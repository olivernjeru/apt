
org 100h


.model small  
 .stack 100  
 .code  
      mov ax, 0ffffh            ; hex number to find it's bcd  
      mov      bx, 0000  
      mov      dh, 0  
 l9 :     cmp     ax, 10000     ; if ax>10000  
      jb      l2  
      sub      ax, 10000        ; subtract 10000  
      inc      dh               ; add 1 to dh  
      jmp      l9  
 l2 :     cmp      ax, 1000     ; if ax>1000  
      jb      l4  
      sub      ax, 1000  
      add      bx, 1000h        ; add 1000h to result  
      jmp      l2  
 l4 :     cmp      ax, 100      ; if ax>100  
      jb      l6  
      sub      ax, 100  
      add      bx, 100h         ; add 100h to result  
      jmp      l4  
 l6 :     cmp      ax, 10       ; if ax>10  
      jb      l8  
      sub      ax, 10  
      add      bx, 10h          ; add 10h to result  
      jmp      l6  
 l8 :     add      bx, ax       ; add remainder   
                                ; to result  
      mov      ah, 02            
      mov      cx, 0204h        ; Count to display   
                                ; 2 digits  
      go:      rol dh, cl  
      mov      dl, dh  
      and      dl, 0fh  
      add      dl, 30h          ; display 2 msb digits       
      int      21h  
      dec      ch  
      jnz      go  
      mov      ch, 04h          ; Count of digits to be   
                                ; displayed  
      mov      cl, 04h          ; Count to roll by 4 bits  
 l12:     rol      bx, cl       ; roll bl so that msb   
                                ; comes to lsb                  
      mov      dl, bl           ; load dl with data to be   
                                ; displayed  
      and      dl, 0fH          ; get only lsb  
      cmp      dl, 09           ; check if digit is 0-9 or letter A-F      
      jbe      l14  
      add      dl, 07           ; if letter add 37H else only add 30H  
 l14:     add      dl, 30H  
      mov      ah, 02           ; Function 2 under INT 21H      (Display character)  
      int      21H  
      dec      ch               ; Decrement Count  
      jnz      l12  
      mov      ah, 4cH          ;  Terminate Program  
      int      21H  
 end


ret




