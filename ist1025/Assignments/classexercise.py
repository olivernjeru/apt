from math import sqrt, pi

def areaofcircle(radius=4):
    return pi * radius * radius

def main():
    print("Area of circle using default radius is ", areaofcircle())
    r = float(input("Enter the radius: "))
    print("The area of the circle is", areaofcircle(r))

main()