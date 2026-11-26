# Wall Stud Calculator

A small, dependency-free wall stud calculator that runs in the browser. Enter the wall length, height, stud spacing, lumber size, doors and windows, and it returns the stud count, the plate pieces and an estimated lumber cost, with a full breakdown of where every stud goes.

Built by [Wall Calculator](https://wallcalculator.app/), a free set of construction calculators for framing, drywall, concrete, decks and fences.

## Run it

Open `index.html` in any browser. There is no build step and nothing to install: the calculator is plain HTML, CSS and JavaScript (`index.html`, `style.css`, `script.js`).

## How the count works

The math follows standard IRC-style wall framing takeoff:

- **Field studs:** one stud at the start of the wall, then one at each on-center mark along the length (16 in or 24 in spacing), rounded up.
- **Plates:** a single bottom plate plus a double top plate, cut from 8 ft stock, so 3 pieces per 8 ft of wall, rounded up.
- **Corners:** 2 extra studs per corner (2 corners per wall) for drywall backing and nailing surface.
- **Openings:** 4 studs per door or window (king and jack studs on both sides). Header and sill stock is not included.
- **Waste:** the chosen waste percentage (10% by default) is applied to the stud total and rounded up.

## Default prices

| Lumber | Price per stud |
| --- | --- |
| 2 x 4 | $4.85 |
| 2 x 6 | $7.25 |

Prices are editable constants at the top of `script.js`, so you can match your local yard.

## Worked example

A 16 ft long, 8 ft high wall at 16 in on-center, 2x4 lumber, 1 door, 1 window and 10% waste:

- 13 field studs, 6 plate pieces, 4 corner studs, 8 opening studs
- **35 studs to buy, about $170 of lumber**

## The full calculators

This demo covers studs only. The full version adds drywall sheets, screws, joint compound, tape and a printable takeoff list, alongside calculators for cinder block, retaining walls, concrete slabs, decks and fences: [Wall Calculator](https://wallcalculator.app/)
