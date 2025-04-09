from tkinter import *
from PIL import Image, ImageDraw

tk = Tk()
cvs = Canvas(tk, width=500,height=500)
cvs.pack()

img = Image.new('RGB',(500,500),(255,255,255))
draw = ImageDraw.Draw(img)

mousePressed = False
last=None

def press(evt):
    global mousePressed
    mousePressed = True
def release(evt):
    global mousePressed
    mousePressed = False
cvs.bind_all('<ButtonPress-1>', press)
cvs.bind_all('<ButtonRelease-1>', release)

def finish():
    img.save('img.png')
    tk.destroy()
Button(tk,text='done',command=finish).pack()

def move(evt):
    global mousePressed, last
    x,y = evt.x,evt.y
    if mousePressed:
        if last is None:
            last = (x,y)
            return
        draw.line(((x,y),last), (0,0,0))
        cvs.create_line(x,y,last[0],last[1])
        last = (x,y)
    else:
        last = (x,y)

cvs.bind_all('<Motion>', move)

tk.mainloop()