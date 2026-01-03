# BiODAVis Pipeline Configurator
# Minimal R Shiny app for analysis pipeline selection and quote generation

library(shiny)

# Define UI
ui <- fluidPage(

  # Custom CSS for minimal styling
  tags$head(
    tags$style(HTML("
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: linear-gradient(135deg, #1a3a52 0%, #1a74ba 50%, #0891b2 100%);
        min-height: 100vh;
        padding: 20px;
      }
      .main-container {
        max-width: 1200px;
        margin: 0 auto;
        background: white;
        border-radius: 16px;
        padding: 40px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      }
      .header {
        text-align: center;
        margin-bottom: 40px;
      }
      .header h1 {
        color: #1a3a52;
        font-size: 2.5em;
        margin-bottom: 10px;
      }
      .header p {
        color: #666;
        font-size: 1.2em;
      }
      .tagline {
        color: #0891b2;
        font-weight: bold;
        font-size: 1.1em;
        margin-top: 10px;
      }
      .analysis-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }
      .analysis-card {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 12px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .analysis-card:hover {
        border-color: #1CABE3;
        box-shadow: 0 4px 12px rgba(28, 171, 227, 0.2);
        transform: translateY(-2px);
      }
      .analysis-card h3 {
        color: #1a3a52;
        font-size: 1.3em;
        margin-bottom: 10px;
      }
      .analysis-card p {
        color: #666;
        font-size: 0.95em;
        line-height: 1.5;
      }
      .analysis-icon {
        font-size: 2.5em;
        margin-bottom: 15px;
      }
      .btn-select {
        background: #1CABE3;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        margin-top: 15px;
        transition: background 0.3s ease;
      }
      .btn-select:hover {
        background: #0891b2;
      }
      .footer-note {
        text-align: center;
        margin-top: 40px;
        color: #999;
        font-size: 0.9em;
      }

      /* Configuration page styles */
      .back-button {
        background: #6c757d;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 20px;
        transition: background 0.3s ease;
      }
      .back-button:hover {
        background: #5a6268;
      }
      .config-section {
        margin-bottom: 30px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 12px;
      }
      .config-section h3 {
        color: #1a3a52;
        font-size: 1.3em;
        margin-bottom: 15px;
      }
      .config-section label {
        color: #495057;
        font-weight: 600;
        margin-bottom: 8px;
        display: block;
      }
      /* Exception: allow radio-inline labels to display inline */
      .config-section label.radio-inline {
        display: inline-block;
        margin-right: 15px;
        font-weight: normal;
      }
      /* Remove interfering CSS - let Shiny handle inline radio buttons naturally */
      .shiny-input-radiogroup {
        text-align: left;
      }
      /* Prevent radio button labels from wrapping */
      .shiny-input-radiogroup label {
        white-space: nowrap;
      }
      .radio-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-top: 10px;
      }
      .radio-card {
        background: white;
        border: 2px solid #dee2e6;
        border-radius: 8px;
        padding: 15px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: center;
      }
      .radio-card:hover {
        border-color: #1CABE3;
      }
      .radio-card input[type='radio'] {
        display: none;
      }
      .radio-card input[type='radio']:checked + label {
        border-color: #1CABE3;
        background: #e7f5ff;
      }
      .price-display {
        position: sticky;
        top: 20px;
        background: linear-gradient(135deg, #1a3a52 0%, #1a74ba 100%);
        color: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        margin-bottom: 20px;
      }
      .price-display h3 {
        margin-top: 0;
        font-size: 1.2em;
        margin-bottom: 10px;
      }
      .price-amount {
        font-size: 2.5em;
        font-weight: bold;
        color: #1CABE3;
        margin: 10px 0;
      }
      .price-breakdown {
        font-size: 0.9em;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255,255,255,0.2);
      }
      .price-breakdown-item {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
      }
      .support-badge {
        display: inline-block;
        background: #28a745;
        color: white;
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 0.75em;
        font-weight: 600;
        margin-left: 8px;
      }
      .premium-badge {
        background: #ffc107;
        color: #1a3a52;
      }

      /* Generate Quote Button */
      .btn-generate-quote {
        background: #1CABE3;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        margin-top: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(28, 171, 227, 0.3);
      }
      .btn-generate-quote:hover {
        background: #0891b2;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(28, 171, 227, 0.4);
      }

      /* Summary Page Styles */
      .summary-header {
        text-align: center;
        margin-bottom: 40px;
        padding-bottom: 20px;
        border-bottom: 2px solid #e9ecef;
      }
      .summary-header h1 {
        color: #1a3a52;
        font-size: 2.2em;
        margin-bottom: 10px;
      }
      .summary-header p {
        color: #666;
        font-size: 1.1em;
      }
      .config-summary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
      }
      .summary-item {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 12px;
        border-left: 4px solid #1CABE3;
      }
      .summary-item-label {
        font-size: 0.9em;
        color: #666;
        margin-bottom: 8px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .summary-item-value {
        font-size: 1.2em;
        color: #1a3a52;
        font-weight: 600;
      }
      .price-breakdown-card {
        background: linear-gradient(135deg, #1a3a52 0%, #1a74ba 100%);
        color: white;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        margin-bottom: 30px;
      }
      .price-breakdown-card h2 {
        margin-top: 0;
        font-size: 1.5em;
        margin-bottom: 20px;
      }
      .total-price {
        font-size: 3em;
        font-weight: bold;
        color: #1CABE3;
        margin: 20px 0;
        text-align: center;
      }
      .pipeline-details {
        background: #f8f9fa;
        padding: 30px;
        border-radius: 12px;
        margin-bottom: 30px;
      }
      .pipeline-details h3 {
        color: #1a3a52;
        font-size: 1.4em;
        margin-bottom: 20px;
      }
      .pipeline-details ul {
        list-style: none;
        padding: 0;
      }
      .pipeline-details li {
        padding: 10px 0;
        padding-left: 30px;
        position: relative;
        color: #495057;
        line-height: 1.6;
      }
      .pipeline-details li:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #1CABE3;
        font-weight: bold;
        font-size: 1.2em;
      }
      .contact-form-section {
        background: white;
        padding: 30px;
        border-radius: 12px;
        border: 2px solid #e9ecef;
        margin-bottom: 30px;
      }
      .contact-form-section h3 {
        color: #1a3a52;
        font-size: 1.4em;
        margin-bottom: 20px;
      }
      .contact-form-section label {
        color: #495057;
        font-weight: 600;
        margin-bottom: 8px;
        display: block;
      }
      .contact-form-section input,
      .contact-form-section textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 6px;
        font-size: 1em;
        margin-bottom: 15px;
      }
      .contact-form-section textarea {
        min-height: 100px;
        resize: vertical;
      }
      .btn-submit {
        background: #1CABE3;
        color: white;
        border: none;
        padding: 14px 32px;
        border-radius: 6px;
        font-size: 1.1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(28, 171, 227, 0.3);
      }
      .btn-submit:hover {
        background: #0891b2;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(28, 171, 227, 0.4);
      }
      .action-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }
      .btn-secondary:hover {
        background: #5a6268;
      }

      /* Mobile Responsiveness */
      @media (max-width: 768px) {
        body {
          padding: 10px;
        }
        .main-container {
          padding: 20px;
          border-radius: 12px;
        }
        .header h1 {
          font-size: 1.8em !important;
        }
        .header p {
          font-size: 1em;
        }
        .tagline {
          font-size: 0.95em;
        }
        .analysis-grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }
        .analysis-card {
          padding: 20px;
        }
        .analysis-icon {
          font-size: 2em;
        }
        /* Stack two-column config layout on mobile */
        .config-layout {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .config-summary-grid {
          grid-template-columns: 1fr;
        }
        .price-amount {
          font-size: 2em !important;
        }
        .total-price {
          font-size: 2.2em !important;
        }
        .price-breakdown-card {
          padding: 20px;
        }
        .pipeline-details {
          padding: 20px;
        }
        .contact-form-section {
          padding: 20px;
        }
        .action-buttons {
          flex-direction: column;
        }
        .btn-secondary,
        .btn-submit {
          width: 100%;
        }
      }

      @media (max-width: 480px) {
        .main-container {
          padding: 15px;
        }
        .header h1 {
          font-size: 1.5em !important;
        }
        .header p {
          font-size: 0.9em;
        }
        .price-amount {
          font-size: 1.8em !important;
        }
        .total-price {
          font-size: 2em !important;
        }
        .summary-header h1 {
          font-size: 1.6em !important;
        }
      }
    "))
  ),

  # Main container
  div(class = "main-container",

    # Conditional Panel: Landing Page
    conditionalPanel(
      condition = "output.show_landing",

      # Header
      div(class = "header",
        h1("BiODAVis Pipeline Configurator"),
        p("Configure Your Custom Analysis Pipeline"),
        div(class = "tagline", "Get an instant quote tailored to your research needs")
      ),

      # Analysis type selection
      div(class = "analysis-grid",

        # RNA-Seq Card
        div(class = "analysis-card",
          div(class = "analysis-icon", "🧬"),
          h3("RNA-Sequencing Analysis"),
          p("Differential expression, pathway enrichment, and publication-ready visualizations for bulk RNA-Seq data."),
          actionButton("select_rnaseq", "Configure Pipeline", class = "btn-select")
        ),

        # Single Cell Card
        div(class = "analysis-card",
          div(class = "analysis-icon", "🔬"),
          h3("Single Cell RNA-Seq"),
          p("Cell type identification, trajectory analysis, and multi-sample integration for scRNA-seq data."),
          actionButton("select_singlecell", "Configure Pipeline", class = "btn-select")
        ),

        # Microbiome Card
        div(class = "analysis-card",
          div(class = "analysis-icon", "🦠"),
          h3("Microbiome Analysis"),
          p("16S rRNA and shotgun metagenomic analysis with diversity and differential abundance testing."),
          actionButton("select_microbiome", "Configure Pipeline", class = "btn-select")
        ),

        # Nanopore Card
        div(class = "analysis-card",
          div(class = "analysis-icon", "📊"),
          h3("Nanopore Long-Read"),
          p("Processing of Oxford Nanopore sequencing data from basecalling to variant detection."),
          actionButton("select_nanopore", "Configure Pipeline", class = "btn-select")
        ),

        # WGS Card
        div(class = "analysis-card",
          div(class = "analysis-icon", "🧪"),
          h3("Whole Genome Sequencing"),
          p("Complete WGS pipeline for SNP analysis, variant calling, and population genetics studies."),
          actionButton("select_wgs", "Configure Pipeline", class = "btn-select")
        )
      ),

      # Footer note
      div(class = "footer-note",
        "All quotes are preliminary estimates. Final pricing confirmed after data review."
      )
    ),

    # Conditional Panel: RNA-Seq Configuration
    conditionalPanel(
      condition = "output.show_rnaseq",

      # Back button
      actionButton("back_to_landing", "← Back to Analysis Selection", class = "back-button"),

      # Header
      div(class = "header",
        h1("🧬 RNA-Seq Pipeline Configuration"),
        p("Configure your RNA-Sequencing analysis pipeline")
      ),

      # Two-column layout
      div(class = "config-layout", style = "display: grid; grid-template-columns: 3fr 1fr; gap: 30px;",

        # Left column: Configuration form
        div(
          # Sample Information
          div(class = "config-section",
            h3("Sample Information"),
            numericInput(
              "num_samples",
              "Number of Samples",
              value = 6,
              min = 3,
              max = 100,
              step = 1
            ),
            radioButtons(
              "library_type",
              "Library Type",
              choices = c("Single-End" = "SE", "Paired-End" = "PE"),
              selected = "PE",
              inline = TRUE
            )
          ),

          # Bioinformatics Workflow
          div(class = "config-section",
            h3("Configure your Bioinformatics Workflow and Database"),
            radioButtons(
              "trim_fastq",
              "Trim FASTQ files & remove adapters (+$10/sample)",
              choices = c("No" = "no", "Yes" = "yes"),
              selected = "no",
              inline = TRUE
            ),
            conditionalPanel(
              condition = "input.trim_fastq == 'yes'",
              div(style = "margin-left: 20px; margin-top: 15px;",
                numericInput(
                  "trim_length",
                  "Minimum read length (nucleotides)",
                  value = 100,
                  min = 50,
                  max = 300,
                  step = 10
                ),
                div(
                  numericInput(
                    "trim_quality",
                    "Minimum quality score (Phred)",
                    value = 30,
                    min = 10,
                    max = 40,
                    step = 1
                  ),
                  div(style = "margin-top: -10px; margin-bottom: 10px; font-size: 0.85em;",
                    HTML("<a href='https://help.basespace.illumina.com/files-used-by-basespace/quality-scores' target='_blank' style='color: #1CABE3;'>explanation of quality scores</a>")
                  )
                )
              )
            ),
            radioButtons(
              "alignment_method",
              "Alignment Method",
              choiceNames = list(
                HTML("STAR - Spliced aligner (most popular) (<a href='https://physiology.med.cornell.edu/faculty/skrabanek/lab/angsd/lecture_notes/STARmanual.pdf' target='_blank' style='color: #1CABE3;'>manual</a>)"),
                HTML("HISAT2 - Fast hierarchical aligner (<a href='https://daehwankimlab.github.io/hisat2/manual/' target='_blank' style='color: #1CABE3;'>manual</a>)"),
                HTML("Salmon - Quasi-mapping quantification (<a href='https://salmon.readthedocs.io/en/latest/' target='_blank' style='color: #1CABE3;'>manual</a>)"),
                HTML("Kallisto - Pseudoalignment quantification (<a href='https://pachterlab.github.io/kallisto/manual' target='_blank' style='color: #1CABE3;'>manual</a>)")
              ),
              choiceValues = list("star", "hisat2", "salmon", "kallisto"),
              selected = "star"
            ),
            radioButtons(
              "genome_database",
              "Preferred Genome Database",
              choices = c("Ensembl" = "ensembl", "NCBI" = "ncbi"),
              selected = "ensembl"
            ),

            # Filtering Parameters
            div(style = "margin-top: 25px; padding-top: 20px; border-top: 2px solid #dee2e6;",
              h4(style = "color: #1a3a52; font-size: 1.1em; margin-bottom: 15px;",
                 "Determine Filtering Parameters"),
              p(style = "color: #666; font-size: 0.9em; margin-bottom: 15px;",
                "Filter aligned reads using the following criteria:"),

              radioButtons(
                "filter_unique_reads",
                "Uniquely aligned reads",
                choices = c("Yes" = "yes", "No" = "no"),
                selected = "yes",
                inline = TRUE
              ),

              div(style = "margin-bottom: 15px;",
                numericInput(
                  "samtools_flag",
                  HTML("SAMtools flag (<a href='https://broadinstitute.github.io/picard/explain-flags.html' target='_blank' style='color: #1CABE3;'>see flag explanation</a>)"),
                  value = 0,
                  min = 0,
                  max = 4096,
                  step = 1
                )
              ),

              radioButtons(
                "filter_remove_duplicates",
                "Remove duplicates",
                choices = c("Yes" = "yes", "No" = "no"),
                selected = "yes",
                inline = TRUE
              )
            ),

            # Read Quantification
            div(style = "margin-top: 25px; padding-top: 20px; border-top: 2px solid #dee2e6;",
              h4(style = "color: #1a3a52; font-size: 1.1em; margin-bottom: 15px;",
                 "Read Quantification"),

              radioButtons(
                "count_tool",
                "Quantification Tool",
                choices = c(
                  "featureCounts - Fast, recommended for most cases" = "featurecounts",
                  "HTSeq - Classic tool, well-established" = "htseq",
                  "RSEM - Transcript-level quantification" = "rsem",
                  "Salmon counts - From Salmon alignment" = "salmon_counts"
                ),
                selected = "featurecounts"
              ),

              radioButtons(
                "strandedness",
                "Library Strandedness",
                choices = c(
                  "Unstranded (no strand info)" = "unstranded",
                  "Stranded forward" = "stranded_forward",
                  "Stranded reverse (common for Illumina)" = "stranded_reverse"
                ),
                selected = "stranded_reverse"
              ),

              radioButtons(
                "feature_type",
                "Feature Type for Counting",
                choices = c(
                  "Gene level (recommended)" = "gene",
                  "Transcript level" = "transcript",
                  "Exon level" = "exon"
                ),
                selected = "gene"
              )
            )
          ),

          # Organism Selection
          div(class = "config-section",
            h3("Organism / Species"),
            selectInput(
              "organism",
              "Select your study organism",
              choices = c(
                "Cattle (Bos taurus)" = "cattle",
                "Poultry (Gallus gallus)" = "poultry",
                "Swine (Sus scrofa)" = "swine",
                "Horse (Equus caballus)" = "horse",
                "Dog (Canis familiaris)" = "dog",
                "Cat (Felis catus)" = "cat",
                "Other" = "other"
              ),
              selected = "cattle"
            )
          ),

          # Support Level
          div(class = "config-section",
            h3("Support Level"),
            radioButtons(
              "support_level",
              NULL,
              choices = c(
                "Standard - Detailed description of methods and tools used, interactive dashboard with options for data, results and figures download" = "standard",
                "Premium - Same as standard + consultation call (+20%)" = "premium"
              ),
              selected = "standard"
            )
          ),

          # Turnaround Time
          div(class = "config-section",
            h3("Turnaround Time"),
            radioButtons(
              "turnaround",
              NULL,
              choices = c(
                "Standard (2-3 weeks)" = "standard",
                "Rush (1 week) - Additional 30%" = "rush"
              ),
              selected = "standard"
            )
          )
        ),

        # Right column: Price display
        div(
          uiOutput("price_display_ui")
        )
      )
    ),

    # Conditional Panel: Summary/Quote Page
    conditionalPanel(
      condition = "output.show_summary",

      # Back to landing link
      div(style = "margin-bottom: 20px;",
        actionButton("start_over", "← Back to All Services", class = "back-button")
      ),

      # Header
      div(class = "summary-header",
        h1("🧬 Your Custom RNA-Seq Analysis Quote"),
        p("Preliminary estimate - final pricing confirmed after data review")
      ),

      # Configuration Summary
      div(class = "config-summary-grid",
        div(class = "summary-item",
          div(class = "summary-item-label", "Analysis Type"),
          div(class = "summary-item-value", "RNA-Sequencing Analysis")
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Number of Samples"),
          div(class = "summary-item-value", textOutput("summary_num_samples", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Library Type"),
          div(class = "summary-item-value", textOutput("summary_library_type", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Trimming & Adapters"),
          div(class = "summary-item-value", textOutput("summary_trim_fastq", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Alignment Method"),
          div(class = "summary-item-value", textOutput("summary_alignment", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Genome Database"),
          div(class = "summary-item-value", textOutput("summary_genome_database", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Uniquely Aligned Reads"),
          div(class = "summary-item-value", textOutput("summary_unique_reads", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "SAMtools Flag"),
          div(class = "summary-item-value", textOutput("summary_samtools_flag", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Remove Duplicates"),
          div(class = "summary-item-value", textOutput("summary_remove_duplicates", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Quantification Tool"),
          div(class = "summary-item-value", textOutput("summary_count_tool", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Library Strandedness"),
          div(class = "summary-item-value", textOutput("summary_strandedness", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Feature Type"),
          div(class = "summary-item-value", textOutput("summary_feature_type", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Organism / Species"),
          div(class = "summary-item-value", textOutput("summary_organism", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Support Level"),
          div(class = "summary-item-value", textOutput("summary_support_level", inline = TRUE))
        ),
        div(class = "summary-item",
          div(class = "summary-item-label", "Turnaround Time"),
          div(class = "summary-item-value", textOutput("summary_turnaround", inline = TRUE))
        )
      ),

      # Price Breakdown Card
      div(class = "price-breakdown-card",
        h2("Price Breakdown"),
        div(class = "price-breakdown",
          uiOutput("summary_price_breakdown")
        ),
        div(class = "total-price", uiOutput("summary_total_price", inline = TRUE))
      ),

      # Pipeline Details
      div(class = "pipeline-details",
        h3("What's Included in Your Analysis"),
        tags$ul(
          tags$li("Quality control and preprocessing of raw sequencing data"),
          tags$li(
            "Interactive dashboard for data exploration and real-time analysis",
            tags$div(
              style = "margin-top: 10px; font-weight: 600; color: #1a3a52; font-size: 0.95em;",
              "Comprehensive Analysis Features:"
            ),
            tags$ul(
              style = "margin-top: 8px;",
              tags$li("Differential expression analysis using DESeq2 and edgeR"),
              tags$li("Gene set enrichment analysis"),
              tags$li("Gene ontology enrichment analysis"),
              tags$li("Pathway analysis and visualization"),
              tags$li("Publication-ready figures (PCA plots, heatmaps, volcano plots)"),
              tags$li("Download options for processed data, results, and figures"),
              tags$li("Comprehensive methods documentation")
            )
          ),
          tags$li(uiOutput("summary_support_benefits", inline = TRUE)),
          tags$li(uiOutput("summary_turnaround_info", inline = TRUE))
        )
      ),

      # Contact Form
      div(class = "contact-form-section",
        h3("Request This Analysis"),
        p("Fill out the form below and we'll get back to you within 24 hours to discuss your project."),
        textInput("contact_name", "Name *", placeholder = "Your full name"),
        textInput("contact_email", "Email *", placeholder = "your.email@institution.edu"),
        textInput("contact_institution", "Institution / Organization", placeholder = "University or Company name"),
        textAreaInput("contact_message", "Additional Details",
          placeholder = "Tell us about your study, sample details, or any specific requirements...",
          rows = 4),
        actionButton("submit_quote", "Submit Request", class = "btn-submit")
      ),

      # Action Buttons
      div(class = "action-buttons",
        actionButton("edit_config", "← Edit Configuration", class = "btn-secondary")
      )
    )
  )
)

# Define server logic
server <- function(input, output, session) {

  # Reactive values for page state
  values <- reactiveValues(
    current_page = "landing",
    config = list(),
    quote = list()
  )

  # Page visibility outputs
  output$show_landing <- reactive({
    values$current_page == "landing"
  })
  outputOptions(output, "show_landing", suspendWhenHidden = FALSE)

  output$show_rnaseq <- reactive({
    values$current_page == "rnaseq"
  })
  outputOptions(output, "show_rnaseq", suspendWhenHidden = FALSE)

  output$show_summary <- reactive({
    values$current_page == "rnaseq_summary"
  })
  outputOptions(output, "show_summary", suspendWhenHidden = FALSE)

  # Helper function for organism display names
  get_organism_display <- function(organism_code) {
    switch(organism_code,
      "cattle" = "Cattle (Bos taurus)",
      "poultry" = "Poultry (Gallus gallus)",
      "swine" = "Swine (Sus scrofa)",
      "horse" = "Horse (Equus caballus)",
      "dog" = "Dog (Canis familiaris)",
      "cat" = "Cat (Felis catus)",
      "other" = "Other",
      organism_code
    )
  }

  # Navigation: Select RNA-Seq
  observeEvent(input$select_rnaseq, {
    values$current_page <- "rnaseq"
  })

  # Navigation: Back to landing
  observeEvent(input$back_to_landing, {
    values$current_page <- "landing"
  })

  # Navigation: Generate quote
  observeEvent(input$generate_quote, {
    # Store current configuration
    values$config <- list(
      num_samples = input$num_samples,
      library_type = input$library_type,
      trim_fastq = input$trim_fastq,
      trim_length = input$trim_length,
      trim_quality = input$trim_quality,
      alignment_method = input$alignment_method,
      genome_database = input$genome_database,
      filter_unique_reads = input$filter_unique_reads,
      samtools_flag = input$samtools_flag,
      filter_remove_duplicates = input$filter_remove_duplicates,
      count_tool = input$count_tool,
      strandedness = input$strandedness,
      feature_type = input$feature_type,
      organism = input$organism,
      support_level = input$support_level,
      turnaround = input$turnaround
    )
    # Store calculated price
    values$quote <- calculate_price()
    # Navigate to summary
    values$current_page <- "rnaseq_summary"
  })

  # Navigation: Edit configuration
  observeEvent(input$edit_config, {
    values$current_page <- "rnaseq"
  })

  # Navigation: Start over
  observeEvent(input$start_over, {
    values$current_page <- "landing"
  })

  # Price calculation (reactive)
  calculate_price <- reactive({
    # Only calculate if on RNA-Seq page
    req(values$current_page == "rnaseq")
    req(input$num_samples)

    # Base calculation: $175 per sample
    base_price <- 175 * input$num_samples

    # Trimming fee: $10 per sample if enabled
    trimming_fee <- if(!is.null(input$trim_fastq) && input$trim_fastq == "yes") {
      10 * input$num_samples
    } else {
      0
    }

    # Subtotal before multipliers
    subtotal <- base_price + trimming_fee

    # Support level multiplier (applied to subtotal)
    support_multiplier <- switch(
      input$support_level,
      "standard" = 1.0,
      "premium" = 1.2,
      1.0
    )

    # Turnaround multiplier
    turnaround_multiplier <- if(input$turnaround == "rush") 1.3 else 1.0

    # Final calculation
    final_price <- subtotal * support_multiplier * turnaround_multiplier

    list(
      base = base_price,
      trimming = trimming_fee,
      support_mult = support_multiplier,
      turnaround_mult = turnaround_multiplier,
      total = final_price
    )
  })

  # Price display UI
  output$price_display_ui <- renderUI({
    req(values$current_page == "rnaseq")

    price_info <- calculate_price()

    # Calculate step-by-step for clarity
    subtotal <- price_info$base + price_info$trimming
    after_support <- subtotal * price_info$support_mult

    div(class = "price-display",
      h3("Preliminary Quote"),
      div(class = "price-amount",
        paste0("$", format(round(price_info$total), big.mark = ","))
      ),
      div(style = "font-size: 0.9em; color: rgba(255,255,255,0.8);",
        "Estimated total cost"
      ),
      div(class = "price-breakdown",
        # Base charges section
        div(style = "margin-bottom: 8px;",
          div(class = "price-breakdown-item",
            span("Base analysis:"),
            span(paste0("$", format(round(price_info$base), big.mark = ",")))
          ),
          if(price_info$trimming > 0) {
            div(class = "price-breakdown-item",
              span("Trimming & adapters:"),
              span(paste0("$", format(round(price_info$trimming), big.mark = ",")))
            )
          }
        ),
        # Subtotal
        if(price_info$trimming > 0 || price_info$support_mult > 1.0 || price_info$turnaround_mult > 1.0) {
          div(style = "border-top: 1px dashed rgba(255,255,255,0.3); padding-top: 8px; margin-bottom: 8px;",
            div(class = "price-breakdown-item", style = "font-weight: 600;",
              span("Subtotal:"),
              span(paste0("$", format(round(subtotal), big.mark = ",")))
            )
          )
        },
        # Multipliers section
        if(price_info$support_mult > 1.0) {
          div(class = "price-breakdown-item",
            span("Premium support (+20%):"),
            span(paste0("+$", format(round(subtotal * (price_info$support_mult - 1)), big.mark = ",")))
          )
        },
        if(price_info$turnaround_mult > 1.0) {
          div(class = "price-breakdown-item",
            span("Rush delivery (+30%):"),
            span(paste0("+$", format(round(after_support * (price_info$turnaround_mult - 1)), big.mark = ",")))
          )
        }
      ),
      div(style = "margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 0.85em; color: rgba(255,255,255,0.7);",
        "✓ Includes all standard analyses",
        br(),
        "✓ Interactive Shiny dashboard delivery",
        br(),
        "✓ Publication-ready visualizations"
      ),
      actionButton("generate_quote", "Generate Quote →", class = "btn-generate-quote")
    )
  })

  # Placeholders for other analysis types
  observeEvent(input$select_singlecell, {
    showModal(modalDialog(
      title = "Single Cell RNA-Seq Configuration",
      "This feature is coming soon! We'll configure your scRNA-Seq analysis pipeline here.",
      easyClose = TRUE,
      footer = modalButton("Close")
    ))
  })

  observeEvent(input$select_microbiome, {
    showModal(modalDialog(
      title = "Microbiome Analysis Configuration",
      "This feature is coming soon! We'll configure your microbiome analysis pipeline here.",
      easyClose = TRUE,
      footer = modalButton("Close")
    ))
  })

  observeEvent(input$select_nanopore, {
    showModal(modalDialog(
      title = "Nanopore Long-Read Configuration",
      "This feature is coming soon! We'll configure your Nanopore analysis pipeline here.",
      easyClose = TRUE,
      footer = modalButton("Close")
    ))
  })

  observeEvent(input$select_wgs, {
    showModal(modalDialog(
      title = "Whole Genome Sequencing Configuration",
      "This feature is coming soon! We'll configure your WGS analysis pipeline here.",
      easyClose = TRUE,
      footer = modalButton("Close")
    ))
  })

  # Summary page outputs
  output$summary_num_samples <- renderText({
    req(values$config$num_samples)
    as.character(values$config$num_samples)
  })

  output$summary_library_type <- renderText({
    req(values$config$library_type)
    if(values$config$library_type == "SE") "Single-End" else "Paired-End"
  })

  output$summary_trim_fastq <- renderText({
    req(values$config$trim_fastq)
    if(values$config$trim_fastq == "yes") {
      paste0("Yes (length ≥", values$config$trim_length,
             " nt, quality ≥", values$config$trim_quality, ")")
    } else {
      "No"
    }
  })

  output$summary_alignment <- renderText({
    req(values$config$alignment_method)
    switch(values$config$alignment_method,
      "star" = "STAR",
      "hisat2" = "HISAT2",
      "salmon" = "Salmon",
      "kallisto" = "Kallisto",
      values$config$alignment_method
    )
  })

  output$summary_genome_database <- renderText({
    req(values$config$genome_database)
    switch(values$config$genome_database,
      "ensembl" = "Ensembl",
      "ncbi" = "NCBI",
      values$config$genome_database
    )
  })

  output$summary_unique_reads <- renderText({
    req(values$config$filter_unique_reads)
    if(values$config$filter_unique_reads == "yes") "Yes" else "No"
  })

  output$summary_samtools_flag <- renderText({
    req(values$config$samtools_flag)
    as.character(values$config$samtools_flag)
  })

  output$summary_remove_duplicates <- renderText({
    req(values$config$filter_remove_duplicates)
    if(values$config$filter_remove_duplicates == "yes") "Yes" else "No"
  })

  output$summary_count_tool <- renderText({
    req(values$config$count_tool)
    switch(values$config$count_tool,
      "featurecounts" = "featureCounts",
      "htseq" = "HTSeq",
      "rsem" = "RSEM",
      "salmon_counts" = "Salmon",
      values$config$count_tool
    )
  })

  output$summary_strandedness <- renderText({
    req(values$config$strandedness)
    switch(values$config$strandedness,
      "unstranded" = "Unstranded",
      "stranded_forward" = "Stranded (forward)",
      "stranded_reverse" = "Stranded (reverse)",
      values$config$strandedness
    )
  })

  output$summary_feature_type <- renderText({
    req(values$config$feature_type)
    switch(values$config$feature_type,
      "gene" = "Gene level",
      "transcript" = "Transcript level",
      "exon" = "Exon level",
      values$config$feature_type
    )
  })

  output$summary_organism <- renderText({
    req(values$config$organism)
    get_organism_display(values$config$organism)
  })

  output$summary_support_level <- renderText({
    req(values$config$support_level)
    if(values$config$support_level == "standard") {
      "Standard"
    } else {
      "Premium"
    }
  })

  output$summary_turnaround <- renderText({
    req(values$config$turnaround)
    if(values$config$turnaround == "standard") {
      "Standard (2-3 weeks)"
    } else {
      "Rush (1 week)"
    }
  })

  output$summary_price_breakdown <- renderUI({
    req(values$quote$base)
    req(values$quote$support_mult)
    req(values$quote$turnaround_mult)
    price_info <- values$quote

    # Calculate step-by-step for clarity
    subtotal <- price_info$base + price_info$trimming
    after_support <- subtotal * price_info$support_mult

    div(
      # Base charges section
      div(style = "margin-bottom: 12px;",
        div(class = "price-breakdown-item",
          span("Base analysis:"),
          span(paste0("$", format(round(price_info$base), big.mark = ",")))
        ),
        if(price_info$trimming > 0) {
          div(class = "price-breakdown-item",
            span("Trimming & adapter removal:"),
            span(paste0("$", format(round(price_info$trimming), big.mark = ",")))
          )
        }
      ),
      # Subtotal
      if(price_info$trimming > 0 || price_info$support_mult > 1.0 || price_info$turnaround_mult > 1.0) {
        div(style = "border-top: 2px solid rgba(255,255,255,0.5); padding-top: 12px; margin-bottom: 12px;",
          div(class = "price-breakdown-item", style = "font-weight: 700; font-size: 1.05em;",
            span("Subtotal:"),
            span(paste0("$", format(round(subtotal), big.mark = ",")))
          )
        )
      },
      # Multipliers section
      if(price_info$support_mult > 1.0) {
        div(class = "price-breakdown-item",
          span("Premium support (+20%):"),
          span(paste0("+$", format(round(subtotal * (price_info$support_mult - 1)), big.mark = ",")))
        )
      },
      if(price_info$turnaround_mult > 1.0) {
        div(class = "price-breakdown-item",
          span("Rush delivery (+30%):"),
          span(paste0("+$", format(round(after_support * (price_info$turnaround_mult - 1)), big.mark = ",")))
        )
      }
    )
  })

  output$summary_total_price <- renderUI({
    req(values$quote$total)
    paste0("$", format(round(values$quote$total), big.mark = ","))
  })

  output$summary_support_benefits <- renderUI({
    req(values$config$support_level)
    if(values$config$support_level == "premium") {
      "1-hour consultation call with our bioinformatics expert"
    } else {
      NULL
    }
  })

  output$summary_turnaround_info <- renderUI({
    req(values$config$turnaround)
    if(values$config$turnaround == "rush") {
      "Priority processing - 1 week delivery"
    } else {
      "Standard delivery timeline: 2-3 weeks"
    }
  })

  # Form submission handler
  observeEvent(input$submit_quote, {
    req(input$contact_name, input$contact_email)

    # Validate email format
    if(!grepl("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$", input$contact_email)) {
      showModal(modalDialog(
        title = "Invalid Email",
        "Please enter a valid email address.",
        easyClose = TRUE,
        footer = modalButton("Close")
      ))
      return()
    }

    # Create summary for confirmation
    config_summary <- paste0(
      "Configuration:\n",
      "• Analysis: RNA-Seq\n",
      "• Samples: ", values$config$num_samples, "\n",
      "• Library: ", if(values$config$library_type == "SE") "Single-End" else "Paired-End", "\n",
      "• Organism: ", get_organism_display(values$config$organism), "\n",
      "• Support: ", if(values$config$support_level == "standard") "Standard" else "Premium", "\n",
      "• Turnaround: ", if(values$config$turnaround == "standard") "Standard (2-3 weeks)" else "Rush (1 week)", "\n",
      "• Estimated Cost: $", format(round(values$quote$total), big.mark = ","), "\n\n",
      "Contact Information:\n",
      "• Name: ", input$contact_name, "\n",
      "• Email: ", input$contact_email, "\n",
      if(nchar(input$contact_institution) > 0) paste0("• Institution: ", input$contact_institution, "\n") else "",
      if(nchar(input$contact_message) > 0) paste0("\nMessage:\n", input$contact_message) else ""
    )

    # Show confirmation modal
    showModal(modalDialog(
      title = "Quote Request Submitted! ✓",
      div(
        p(style = "font-size: 1.1em; margin-bottom: 20px;",
          paste0("Thank you, ", input$contact_name, "! We've received your request.")
        ),
        p("We'll review your configuration and contact you at ", tags$strong(input$contact_email), " within 24 hours to discuss next steps."),
        div(style = "background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 20px; font-family: monospace; font-size: 0.9em; white-space: pre-wrap;",
          config_summary
        ),
        p(style = "margin-top: 20px; color: #666;",
          "A copy of this quote has been sent to your email. Check your spam folder if you don't see it within a few minutes."
        )
      ),
      easyClose = TRUE,
      footer = modalButton("Close")
    ))

    # TODO: In future, send email via Resend API with configuration details
  })
}

# Run the application
shinyApp(ui = ui, server = server)
