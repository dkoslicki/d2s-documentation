---
id: argo-install
title: Argo installation
sidebar_label: Argo installation
---

## Install the OpenShift client

The [oc client](https://www.okd.io/download.html) is required to connect to the [DSRI OpenShift cluster](https://app.dsri.unimaas.nl:8443/).

```bash
wget https://github.com/openshift/origin/releases/download/v3.11.0/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit.tar.gz

tar xvf openshift-origin-client-tools*.tar.gz
cd openshift-origin-client*/
sudo mv oc kubectl /usr/local/bin/
```

---

## Install Argo

[Argo](https://argoproj.github.io/argo/) allows you to describe and run workflows on [Kubernetes](https://kubernetes.io/) clusters.

Download the [Argo client](https://github.com/argoproj/argo/blob/master/demo.md#1-download-argo) to run workflows on the cluster, from your computer.

### Install on Linux

```bash
curl -sSL -o /usr/local/bin/argo https://github.com/argoproj/argo/releases/download/v2.3.0/argo-linux-amd64
chmod +x /usr/local/bin/argo
```

### Install on MacOS

```bash
brew install argoproj/tap/argo
```

 <!-- Argo           |  OpenShift            |  Kubernetes          |   MapR
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
![](/data2services/img/argo-logo.png)  |  ![](/data2services/img/ophenshift-logo.png) | ![](/data2services/img/Kubernetes.png) | ![](/data2services/img/mapr_logo.png) -->

  MapR            |  Kubernetes          |   OpenShift
:-------------------------:|:-------------------------:|:-------------------------:
[![](/data2services/img/mapr_logo.png)](https://mapr.com/) | [![](/data2services/img/Kubernetes.png)](https://kubernetes.io/) | [![](/data2services/img/ophenshift-logo.png)](https://www.openshift.com/)


[![](/data2services/img/argo-logo.png)](https://argoproj.github.io/argo/)
<!-- ![](/data2services/img/ophenshift-logo.png)
![](/data2services/img/Kubernetes.png)
![](/data2services/img/mapr_logo.png) -->