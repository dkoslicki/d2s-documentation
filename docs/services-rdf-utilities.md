---
id: services-rdf-utilities
title: RDF utilities
---

We list here the services available for deployment within a Data2Services project.

> The `d2s` command is provided when available. A `docker run` command is provided for every module.

Feel free to propose new services using [pull requests](https://github.com/MaastrichtU-IDS/data2services-ecosystem/pulls) or creating a [new issue](https://github.com/MaastrichtU-IDS/d2s-documentation/issues). The list of modules we are planning to work on can be found in the [Wiki](https://github.com/MaastrichtU-IDS/data2services-ecosystem/wiki/Modules-to-develop).

Only [Docker](https://docs.docker.com/install/) is required to run the modules. A typical module should only require a few arguments to be run, making it easy to deploy and combine them.

---

## d2s-sparql-operations

[![RDF4J](/img/RDF4J_logo.png)](https://rdf4j.org/)

[![GitHub](https://img.shields.io/github/stars/MaastrichtU-IDS/d2s-sparql-operations?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/d2s-sparql-operations)

Execute [SPARQL](https://www.w3.org/TR/sparql11-query/) queries from string, URL or multiple files using [RDF4J](http://rdf4j.org/). Available on [DockerHub](https://hub.docker.com/r/umids/d2s-sparql-operations).

```shell
docker run -it --rm umids/d2s-sparql-operations:latest -op select \
  -sp "select distinct ?Concept where {[] a ?Concept} LIMIT 10" \
  -ep "http://dbpedia.org/sparql"
  
# Provide the URL to a GitHub folder to execute all .rq files in it
docker run -it --rm umids/d2s-sparql-operations \
  -ep "http://graphdb.dumontierlab.com/repositories/public/statements" \
  -op update -un my_username -pw my_password \
  -f "https://github.com/MaastrichtU-IDS/d2s-sparql-operations/tree/master/src/main/resources/insert-examples"
```

> See [documentation](https://maastrichtu-ids.github.io/d2s-sparql-operations/).

------

## Comunica

[![OpenLink Virtuoso](/img/comunica.svg)](https://comunica.linkeddatafragments.org/)

[![GitHub](https://img.shields.io/github/stars/comunica/comunica?label=GitHub&style=social)](https://github.com/comunica/comunica)

Framework to perform [federated queries](https://www.w3.org/TR/sparql11-federated-query/) over a lot of different stores (triplestores, [TPF](http://linkeddatafragments.org/in-depth/), [HDT](http://www.rdfhdt.org/)).

```shell
docker run -it comunica/actor-init-sparql \
	http://fragments.dbpedia.org/2015-10/en \
	"CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"
```

---

## Jupyter notebooks

Deploy a Jupyter notebook over your RDF knowledge graph. The proposed deployment comes with various libraries for data science and RDF pre-installed.

```shell
d2s start notebook

docker run --rm -it -p 8888:8888 \
  -v $(pwd)/workspace/notebooks:/notebooks \
  -e PASSWORD="<your_secret>" \
  -e GIT_URL="https://github.com/vemonet/translator-sparql-notebook" \
  umids/jupyterlab:latest
```

> Access on http://localhost:8888

## d2s-bash-exec

[![](https://img.shields.io/github/stars/MaastrichtU-IDS/d2s-bash-exec?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/d2s-bash-exec)

Simple container to execute Bash scripts from URL (e.g. hosted on GitHub). Mainly used to download datasets. See [download script example](https://github.com/MaastrichtU-IDS/d2s-download/blob/master/datasets/TEMPLATE/download.sh).

```shell
docker run -it --rm -v /data/input:/data umids/d2s-bash-exec:latest https://raw.githubusercontent.com/MaastrichtU-IDS/d2s-transform-template/master/datasets/stitch/download/download-stitch.sh
```

> See on [DockerHub](https://hub.docker.com/r/umids/d2s-bash-exec).

---

## xml2rdf

[![](https://img.shields.io/github/stars/MaastrichtU-IDS/xml2rdf?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/xml2rdf)

Streams XML to a [generic RDF](https://github.com/MaastrichtU-IDS/xml2rdf#rdf-model) representing the structure of the file. 

```shell
docker run --rm -it -v /data:/data umids/xml2rdf:latest  \
	-i "/data/d2s-workspace/file.xml.gz" \
	-o "/data/d2s-workspace/file.nq.gz" \
	-g "https://w3id.org/d2s/graph"
```

> See on [DockerHub](https://hub.docker.com/r/umids/xml2rdf).

---

## Apache Drill

[![Apache Drill](/img/drill-logo.png)](https://github.com/amalic/apache-drill)

[![](https://img.shields.io/github/stars/MaastrichtU-IDS/apache-drill?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/apache-drill)

Exposes tabular text files (CSV, TSV, PSV) as SQL, and enables queries on large datasets. Used by [AutoR2RML](https://github.com/amalic/AutoR2RML) and [R2RML](https://github.com/amalic/r2rml) to convert tabular files to a generic RDF representation.

```shell
d2s start drill

docker run -dit --rm -p 8047:8047 -p 31011:31010 \
	--name drill -v /data:/data:ro umids/apache-drill:latest
```

> Access at [http://localhost:8047/](http://localhost:8047/).

> See on [DockerHub](https://hub.docker.com/r/umids/apache-drill).

---

## AutoR2RML

[![](https://img.shields.io/github/stars/MaastrichtU-IDS/AutoR2RML?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/AutoR2RML)

Automatically generate [R2RML](https://www.w3.org/TR/r2rml/) files from Relational databases (SQL, Postgresql).

```shell
docker run -it --rm --link drill:drill --link postgres:postgres -v /data:/data \
	umids/autor2rml:latest -j "jdbc:drill:drillbit=drill:31010" -r \
	-o "/data/d2s-workspace/mapping.trig" \
	-d "/data/d2s-workspace" \
	-u "postgres" -p "pwd" \
	-b "https://w3id.org/d2s/" \
	-g "https://w3id.org/d2s/graph"
```

> Can be combined with [Apache Drill](https://github.com/amalic/apache-drill) to process tabular files

> See on [DockerHub](https://hub.docker.com/r/umids/autor2rml).

---

## R2RML

[![](https://img.shields.io/github/stars/MaastrichtU-IDS/r2rml?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/r2rml)

Convert Relational Databases to RDF using the [R2RML](https://www.w3.org/TR/r2rml/) mapping language.

```shell
docker run -it --rm --net d2s-cwl-workflows_network \
  -v /data/d2s:/data \
  umids/r2rml:latest \ 
  --connectionURL jdbc:drill:drillbit=drill:31010 \
  --mappingFile /data/mapping.trig \
  --outputFile /data/rdf_output.nq \
  --format NQUADS
```

> Shared on `/data/d2s`

> Can be combined with [Apache Drill](https://github.com/amalic/apache-drill) to process tabular files.

> See on [DockerHub](https://hub.docker.com/r/umids/r2rml).

---

## RdfUpload

[![](https://img.shields.io/github/stars/MaastrichtU-IDS/RdfUpload?label=GitHub&style=social)](https://github.com/MaastrichtU-IDS/RdfUpload)


Upload RDF files to a triplestore.

```shell
docker run -it --rm --link graphdb:graphdb -v /data/d2s-workspace:/data \
	umids/rdf-upload:latest -m "HTTP" -if "/data" \
	-url "http://graphdb:7200" -rep "test" \
	-un "username" -pw "password"
```

> Only tested on [GraphDB](https://github.com/MaastrichtU-IDS/graphdb) at the moment

> See on [DockerHub](https://hub.docker.com/r/umids/rdf-upload).

---

## json2xml

[![](https://img.shields.io/github/stars/lukas-krecan/json2xml?label=GitHub&style=social)](https://github.com/lukas-krecan/json2xml)

Convert JSON to XML using [json2xml](https://github.com/vemonet/json2xml). This XML can be then converted to generic RDF.

```shell
docker run -it -v /data/d2s-workspace:data vemonet/json2xml:latest -i /data/test.json 
```

> Shared on your machine at `/data/d2s-workspace`

## RML

[![RMLMapper](https://img.shields.io/github/stars/RMLio/rmlmapper-java?label=GitHub&style=social)](https://github.com/RMLio/rmlmapper-java)

Use the [RDF Mapping Language (RML)](https://rml.io/) to map your structured data (CSV, TSV, SQL, XML, JSON, YAML) to RDF. The [RMLStreamer](https://github.com/RMLio/RMLStreamer/) is a scalable implementation of RML in development. See the [documentation](https://github.com/RMLio/RMLStreamer/blob/master/docker/README.md) to deploy it using Docker.

Start the required services:

```shell
d2s start rmljob rmltask
```

* Go to http://localhost:8078

* Download the [latest release of the rmlmapper.jar](https://github.com/RMLio/rmlmapper-java/releases).

* `Submit New Job`

  * Click `+ Add New` in the upper left corner. Select the [rmlmapper.jar](https://github.com/RMLio/rmlmapper-java/releases) you want to deploy

  * Provide command line arguments for the RMLMapper

    ```shell
    -m /mnt/data/mapping.ttl -o /mnt/data/output.nt
    ```

> **TODO**: facing issue with log conflicts when running the `rmlmapper.jar`
>
> ```
> 2020-02-19 21:18:44,240 ERROR be.ugent.rml.cli.Main                                         - org.slf4j.impl.Log4jLoggerAdapter cannot be cast to ch.qos.logback.classic.Logger
> java.lang.ClassCastException: org.slf4j.impl.Log4jLoggerAdapter 
> 	cannot be cast to ch.qos.logback.classic.Logger
> ```
>
> See [StackOverflow related issue](https://stackoverflow.com/questions/31433246/classcastexception-org-slf4j-impl-log4jloggeradapter-cannot-be-cast-to-ch-qos-l).

> **TODO**: [improve deployment](https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/cli.html) to add `rmlmapper.jar` to Apache Flink automatically.

---

## PyShEx

[![](https://img.shields.io/github/stars/hsolbrig/PyShEx?label=GitHub&style=social)](https://github.com/hsolbrig/PyShEx)

Validate RDF from a SPARQL endpoint against a [ShEx](http://shex.io/) file.

```shell
git clone https://github.com/hsolbrig/PyShEx.git
docker build -t pyshex ./PyShEx/docker
docker run --rm -it pyshex -gn '' -ss -ut -pr \
	-sq 'select ?item where{?item a <http://w3id.org/biolink/vocab/Gene>} LIMIT 1' \
    http://graphdb.dumontierlab.com/repositories/ncats-red-kg \
    https://github.com/biolink/biolink-model/raw/master/shex/biolink-modelnc.shex
```

---


## rdf2hdt

[![GitHub](https://img.shields.io/github/stars/rdfhdt/hdt-cpp?label=GitHub&style=social)](https://github.com/rdfhdt/hdt-docker)

Convert RDF to [HDT](http://www.rdfhdt.org/) files. *Header, Dictionary, Triples* is a binary serialization format for RDF  that keeps big datasets compressed while maintaining search and browse operations without prior decompression.

```shell
docker run -it --rm -v $PWD:/data \
  rdfhdt/hdt-cpp rdf2hdt /data/input.nt /data/output.hdt
```

---

## BridgeDb

[![](https://img.shields.io/github/stars/bridgedb/BridgeDb?label=GitHub&style=social)](https://github.com/bridgedb/BridgeDb)

[BridgeDb](https://www.bridgedb.org/) links URI identifiers from various datasets (Uniprot, PubMed).

```shell
docker run -p 8183:8183 bigcatum/bridgedb
```