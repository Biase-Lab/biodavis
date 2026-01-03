# BiODAVis Pipeline Configurator

Minimal R Shiny app for interactive analysis pipeline configuration and quote generation.

## Features

- **Landing Page**: Choose from 5 analysis types
- **Lightweight**: Minimal dependencies, optimized for free Shiny hosting
- **Responsive**: Works on mobile, tablet, and desktop
- **Branded**: Matches BiODAVis website colors

## Running Locally

### Prerequisites

- R (version 4.0+)
- RStudio (recommended)

### Installation

1. Install required package:

```r
install.packages("shiny")
```

2. Run the app:

```r
# From R console
shiny::runApp("shiny")

# Or from RStudio: Open app.R and click "Run App"
```

The app will open in your default browser at `http://127.0.0.1:XXXX`

## Deployment to shiny.posit.co

### Prerequisites

1. Create free account at https://www.shinyapps.io/ (shiny.posit.co)
2. Install deployment tools:

```r
install.packages("rsconnect")
```

3. Configure your account (get token from shinyapps.io dashboard):

```r
rsconnect::setAccountInfo(
  name = "your-account-name",
  token = "your-token",
  secret = "your-secret"
)
```

### Deploy

```r
library(rsconnect)
deployApp(appDir = "shiny", appName = "biodavis-configurator")
```

## Current Status

✅ Landing page with analysis type selection
⏳ RNA-Seq configuration page (next step)
⏳ Quote generation logic
⏳ Summary and export

## File Structure

```
shiny/
├── app.R           # Main application file
└── README.md       # This file
```

## Next Steps

1. Build RNA-Seq configuration page
2. Add pricing logic
3. Create quote summary page
4. Add email/export functionality
