# LIVIST User Manual

**Version:** 1.0  
**Platform:** CryoStack  
**Last Updated:** July 2026

---

# 1. Introduction

## What is LIVIST?

LIVIST (Living Ice Sheet Temperature) is an interactive web application for visualizing and exploring Antarctic ice-sheet temperature products derived from radar observations and constrained by borehole measurements.

The application enables researchers, educators, and students to explore Antarctic englacial temperature fields directly within a web browser without requiring specialized software installation.

LIVIST is fully integrated into the CryoStack platform and combines multiple datasets into an interactive environment that supports scientific exploration, data visualization, and access to published temperature products.

Open LIVIST at

https://cryostack.eas.gatech.edu/livist/

---

# 2. Getting Started

No software installation is required.

Simply open

https://cryostack.eas.gatech.edu/livist/

The application automatically loads the Antarctic map together with the available datasets and interactive controls.

A typical workflow consists of

1. Opening LIVIST.
2. Selecting a temperature product.
3. Navigating to a region of interest.
4. Displaying borehole observations.
5. Exploring Antarctic drainage basins.
6. Downloading supporting datasets if desired.
7. Performing additional analyses using the LIVIST Python package.

---

# 3. Application Interface

The LIVIST interface consists of three primary components.

## Navigation Bar

The top navigation bar provides quick access to the major application resources.

| Menu | Description |
|------|-------------|
| **LIVIST** | Returns to the main interactive map. |
| **User Manual** | Opens this documentation. |
| **Python Package Documentation** | Technical API documentation for developers and Python users. |
| **Data Repository** | Opens the published datasets hosted on Source Cooperative. |

---

## Interactive Antarctic Map

The central map provides the primary visualization environment.

Users can

- zoom
- pan
- inspect datasets
- compare products
- investigate borehole locations
- identify Antarctic place names
- explore drainage basins

Standard mouse and touch controls are supported.

---

## Map Controls

Depending on the selected dataset, the control panel allows users to

- select available temperature products
- enable or disable geographic layers
- display borehole observations
- inspect map information
- explore supporting datasets

---

# 4. Exploring Temperature Products

LIVIST visualizes Antarctic ice-sheet temperatures inferred from radar observations together with supporting geophysical constraints.

Available products are described through

```
temperature-sources.json
```

These products may differ in

- observational source
- processing methodology
- spatial resolution
- geographic coverage
- inference technique
- uncertainty

Users should consult the associated metadata before comparing different products.

---

# 5. Borehole Observations

Borehole measurements provide direct observations of subsurface ice temperatures.

These observations serve as important constraints for evaluating radar-derived temperature products.

Borehole metadata are loaded from

```
boreholes.json
```

Depending on the site, available information may include

- borehole name
- latitude
- longitude
- temperature profile
- measurement depth
- source publication

Because boreholes represent point measurements, they should not be interpreted as continuous temperature fields.

---

# 6. Antarctic Drainage Basins

Drainage-basin boundaries provide geographic context for interpreting regional temperature variations.

These boundaries are loaded from

```
basins.json
```

They allow users to

- identify Antarctic drainage systems
- compare neighboring regions
- interpret large-scale spatial temperature patterns

---

# 7. Place Names and Basemap

LIVIST includes supporting geographic layers for orientation.

These include

```
place-names.json
quantartica-simple-basemap.json
```

These datasets provide

- Antarctic place names
- coastlines
- geographic reference information
- simplified basemap layers

---

# 8. Data Repository

All published LIVIST datasets are hosted on Source Cooperative.

https://source.coop/englacial/ice-sheet-temperature

The repository provides access to

- published datasets
- metadata
- downloadable files
- supporting documentation

The CryoStack application reads these published products for visualization.

---

# 9. Python Package

LIVIST also provides a Python package for scientific workflows.

Major modules include

```
livist.borehole
livist.client
livist.config
livist.temperature
```

Typical applications include

- loading borehole observations
- accessing temperature products
- downloading datasets
- integrating LIVIST into Python workflows

Complete API documentation is available through

**Python Package Documentation**

---

# 10. Typical Workflow

A common scientific workflow is

```
Open LIVIST
        ↓
Select Temperature Product
        ↓
Navigate Antarctica
        ↓
Enable Borehole Layer
        ↓
Inspect Temperature Patterns
        ↓
Compare Products
        ↓
Download Data
        ↓
Analyze Using Python
```

---

# 11. Interpreting Results

Radar-derived temperature products represent inferred temperature estimates.

When interpreting results, users should consider

- radar acquisition method
- processing methodology
- spatial resolution
- uncertainty
- borehole constraints
- geographic coverage
- data gaps

Comparisons between products should always account for differences in processing methodology.

---

# 12. Developer Guide

## Frontend

The LIVIST web interface is implemented using

- React
- TypeScript
- Chakra UI
- deck.gl
- Vite

To build the frontend

```bash
cd frontend
yarn install
yarn build
```

The production build is written to

```
frontend/dist/
```

CryoStack serves the application under

```
/livist/
```

---

## Documentation

Documentation is generated using Zensical.

Build the documentation with

```bash
uv run zensical build
```

The generated documentation is written to

```
site/
```

CryoStack serves the documentation from

```
/livist/docs/
```

---

## Generating Products

To regenerate all published products

```bash
scripts/generate
```

Required software includes

- GDAL (with Parquet support)
- Tippecanoe

A custom GDAL installation may be specified using

```bash
GDAL=/path/to/gdal scripts/generate
```

---

## Uploading Products

Project maintainers can upload products using

```bash
scripts/upload
```

Uploading requires

- AWS CLI
- Source Cooperative credentials
- write access to the repository

---

## Adding New Data Sources

Temperature and attenuation products are configured in

```
config.toml
```

After adding a new source

```bash
scripts/generate
scripts/upload
```

should be executed.

---

## Testing

Run the unit tests

```bash
uv run pytest
```

Run project checks

```bash
scripts/check
```

---

# 13. Troubleshooting

## The map does not appear

Rebuild the frontend

```bash
cd frontend
yarn build
```

Confirm

```
frontend/dist/index.html
```

exists.

---

## Documentation is missing

Rebuild

```bash
uv run zensical build
```

Confirm

```
site/index.html
```

exists.

---

## Changes are not visible

Rebuild

```bash
cd frontend
yarn build

cd ..
uv run zensical build
```

Restart CryoStack

```bash
~/CryoLauncher/reboot_gui.sh
```

Finally, refresh your browser.

---

# 14. Support

For scientific questions regarding LIVIST, datasets, or Antarctic temperature products, contact

**Eliza Dawson**  
Georgia Institute of Technology

📧 **edawson31@gatech.edu**

When reporting an issue, please include

- a description of the problem,
- screenshots if available,
- your browser,
- your operating system,
- and any error messages.

For CryoStack deployment or integration issues, please use the CryoLauncher GitHub repository issue tracker.

---

# 15. Source Code

## CryoStack

https://github.com/ICESEE-project/CryoLauncher

## LIVIST

https://github.com/ICESEE-project/living-ice-sheet-temperature

Within CryoLauncher, LIVIST is maintained as a Git submodule

```
external/living-ice-sheet-temperature
```

---

# 16. Citation

If you use LIVIST or CryoStack in publications, presentations, reports, or educational materials, please cite the software together with the datasets used in your work.

### CryoStack

Kyanjo, B. (2026).  
**CryoStack: A Platform for Interactive Cryosphere Modeling, Data Products, and Scientific Workflows.**  
Georgia Institute of Technology.

https://cryostack.eas.gatech.edu

### LIVIST

Dawson, E., Kyanjo, B., and contributors (2026).  
**LIVIST: Living Ice Sheet Temperature.**  
CryoStack.

https://cryostack.eas.gatech.edu/livist/

### Data

Please also cite the published Antarctic ice-sheet temperature datasets available through

https://source.coop/englacial/ice-sheet-temperature

and any associated scientific publications describing those datasets.

---

# 17. License

LIVIST is distributed under the MIT License.

CryoStack is distributed under the BSD 2-Clause License.