---
id: translator-prototypes-registry
title: Translator Prototypes registry
---

NCATS Biomedical Data Translator prototypes registry.

## Knowledge Providers (KP)

### COHD Clinical Data2Services Provider

Provides:

* Columbia Open Health Data (COHD)
  * Clinical associations mined from observational EHR data
  * Conditions, drugs, procedures, gender, race, ethnicity
  * EHR prevalence and Co-occurrence count
  * Associations calculated from EHR prevalence and co-occurrence count
  * Privacy protection measures
* Data2Services
  * A framework and Command Line Interface for building and deploying Translator data and services in a reproducible manner.
  * Documentation and tools to transform your data to a BioLink-compliant RDF knowledge graph
  * Automatically deploy a Reasoner API over a [BioLink-compliant](https://biolink.github.io/biolink-model/docs/) RDF triplestore
  * Deploy additional interfaces to explore the knowledge graph

Access:

* COHD Reasoner API at http://cohd.io/api (see on [GitHub](https://github.com/WengLab-InformaticsResearch/cohd_api))
* Data2Services documentation at https://d2s.semanticscience.org
* Data2Services Reasoner API over BioLink RDF at http://api.trek.semanticscience.org (see on [GitHub](https://github.com/MaastrichtU-IDS/d2s-api))
* Into-the-graph web UI to browse a BioLink RDF triplestore leveraging metadata and services at http://trek.semanticscience.org
* GitHub repositories for Data2Services [project template](https://github.com/MaastrichtU-IDS/d2s-transform-template) and [command line interface](https://github.com/MaastrichtU-IDS/d2s-cli).
* [Prototype presentation](https://docs.google.com/presentation/d/17p_KNIDf5YhD5wubGIx-RoexKeCmP4rN-VCAOstXKK8/edit#slide=id.p)

Deploy:

```shell
pip install d2s cwlref-runner
d2s init my-project
```

> Docker must be installed.

### MolePro

A Molecular Data Provider translating molecular scale to systems scale through a Reasoner API.

Access:

* Open API at https://translator.broadinstitute.org/molecular_data_provider/api
* Reasoner API at https://translator.broadinstitute.org/molepro_reasoner/predicates
* [GitHub repository](https://github.com/broadinstitute/molecular-data-provider)
* [MolePro prototype presentation](https://drive.google.com/file/d/1FdCPB0DsTP0nfhcFmzJx0D6RHuwxW_TO/view).

### Translator Genetic Knowledge Provider

A tool to curate genetic associations for complex diseases, interpret their biological effects, and make these data available to the Translator.

Access:

* Access Reasoner API at https://translator.broadinstitute.org/genetics_data_provider/query
* [GitHub repository](https://github.com/broadinstitute/genetics-kp-dev)
* [Translator Genetic Knowledge Provider presentation](https://drive.google.com/file/d/1w1CeLbiGQIfBUv5KwkJbJLs53PusI35N/view).

### ARAGORN

Autonomous Relay Agent for Generation Of Ranked Networks. A tool to query Knowledge Providers (KPs) and synthesize highly ranked answers relevant to user-specified questions

* operate in a federated knowledge environment
* bridge the precision mismatch between data specificity in KPs and more abstract level of user queries
* generalize answer ranking

Access:

* Reasoner and Open API at https://automat.renci.org
* [GitHub repository](https://github.com/TranslatorIIPrototypes/KITCHEN)
* [Prototype presentation](https://docs.google.com/presentation/d/1Nt9GbEw-1R5ftAoqa1yJM4S7O5nxH0Ndo1NnoZTWdtE/edit#slide=id.p)
* Additional [Question Enhancement Resources](https://docs.google.com/presentation/d/1Nt9GbEw-1R5ftAoqa1yJM4S7O5nxH0Ndo1NnoZTWdtE/edit#slide=id.g714ebe013b_1_25).

Deploy:

* Notebook Visualization component at https://github.com/ranking-agent/gamma-viewer

### ICEES+ KP Exposure Provider

Provides:

* Patient data + environmental exposures data
* Integrated at patient- and visit-level
* UNC Health Care System (UNCHCS) + NIEHS Environmental Polymorphisms Registry (EPR)
* Observational EHR data, EPR survey data, SNP data, exposures data 
* Available for years 2010 – 2016

Access:

* [ICEES+ OpenAPI](http://icees.renci.org:16339/apidocs/)
* [icees-api GitHub repository](https://github.com/NCATS-Tangerine/icees-api)
* Prototype [ICEES+ Wireframe UI](http://robokop.renci.org:3001/)
* TranQL: https://tranql.renci.org/
* [Prototype presentation](https://docs.google.com/presentation/d/1EOPFjExxdXahKS9vWICl9Bjw3QrWprcyhgMEHkCjxCE/edit#slide=id.p1)
* [Resources summary slide](https://docs.google.com/presentation/d/1EOPFjExxdXahKS9vWICl9Bjw3QrWprcyhgMEHkCjxCE/edit#slide=id.g7122d33760_7_86)

Deploy:

```shell
git clone https://github.com/NCATS-Tangerine/icees-api.git
cd icees-api
# Edit .env
docker-compose up --build
```

### ARAX

Expander agent, *A tool for enhancing query graphs*. ARAX exposes all graph reasoning capabilities within a language: **ARAXi**.

Access:

* [API](https://tiny.cc/arax-api-docs)
* [ARAX GitHub repository](https://github.com/RTXteam/RTX/tree/master/code/ARAX) (see readme for documentation)
* [ARAX examples Notebook](https://github.com/RTXteam/RTX/blob/demo/code/ARAX/Examples/ARAX_Example4.ipynb)
* [ARAXi documentation](https://tiny.cc/araxi-docs)
* [ARAX prototype presentation](https://docs.google.com/presentation/d/1a93XbdMr0YGWh0BnuJEmcOoudZ9MGNdAh0N4XUTmVyE/edit#slide=id.p)
* [RTX-KG2 GitHub repository](https://github.com/RTXteam/RTX/tree/demo/code/kg2)
* [RTX-KG2 Neo4j UI](https://tiny.cc/arax-kg2-neo4j)

### Text Mining Provider

Up-to-date, BioLink-compatible, knowledge graph composed of assertions mined from the available full-text biomedical literature using high-performance text mining systems

Access:

* [Roadmap on GitHub for issue tracking](https://github.com/NCATSTranslator/Text-Mining-Provider-Roadmap)
* [Prototype presentation](https://docs.google.com/presentation/d/1pF7MVm6pDdQLqKaHpGG40H3VjFY1ubfjYBy1Wx_lXHk/edit#slide=id.p)

### Connections Hypothesis Provider

Provides:

* Access Heterogeneous Data
   * Researcher clinical data
   * Knowledge captured in the Biomedical Data Translator project
* Automate Source Selection
* Effective Question-Response Ranking
* Actionable Information

Access:

* [Prototype presentation](https://docs.google.com/presentation/d/1Hw2jR9ez57A--dB6HZdqIokS3OLxkgv4/edit#slide=id.p1)

## ARA

### Explanatory Autonomous Relay Agent

Provides:

* Analogical reasoning engine

* Ranking results through explanations
  * Explanatory evidence via NLU model
  * Explanatory evidence via other methods
  * Explaining information vs. explaining decisions

* Visualization of biomedical context

* Open-world learning

Access:

* [Prototype presentation](https://drive.google.com/file/d/10dzT5ol8CzFh4VreCzd6ab9OWLZ2PfD4/view)

### mediKanren 2.0

Access:

* [Prototype presentation](https://www.dropbox.com/sh/rh3vtiaulz0ln8i/AACDx4_Cyz0Ez1bprJ0rhvZUa?dl=0&preview=ncats2020launchtalk-pdf.pdf)

### BioThings API

Build and deploy BioThings Smart APIs from flat data files.

Access:

* [GitHub repository for the BioThing organization](https://github.com/biothings/)

> Documentation and integration to `d2s` [started here](https://d2s.semanticscience.org/docs/d2s-biothings).

### DOCKET multiomics provider

Access:

* [DOCKET GitHub repository](https://github.com/PriceLab/DOCKET)

### BLCompliance

Access:

* [Jupyter Notebook for documentation](https://github.com/TranslatorIIPrototypes/BLComplianceService/blob/master/documentation/BLCompliance.ipynb)
* [BLCompliance GitHub repository](https://github.com/TranslatorIIPrototypes/BLComplianceService)
