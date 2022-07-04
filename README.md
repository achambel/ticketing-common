# Developing

### Install a private npm registry on kubernetes

1. Add verdaccio repo

```sh
 helm repo add verdaccio https://charts.verdaccio.org
```

2. Deploy a specific version

```sh
helm install npm verdaccio/verdaccio
```

3. Once verdaccio pod is ready get its name

```sh
kubectl get pods
# You should see a pod name like this: npm-verdaccio-747b5ccff4-bhlcl
```

4. Port forward to publish to your local registry

```sh
kubectl --namespace default port-forward $POD_NAME 4873:4873
```

Visit http://127.0.0.1:4873 to see the verdaccio GUI

5. Publishing to local registry

```sh
npm adduser --registry http://127.0.0.1:4873/
# follow the instructions.
# Authenticated users will be required only for publishing.
# All users can read packages (including non-authenticated users)
```

```sh
npm login --registry http://localhost:4873
# provide the login details you supplied when you created an user
```

### Make sure your package.json contains the follow config

```json
	"publishConfig": {
    "registry": "http://localhost:4873"
  },
```

### Finally publish your changes

```sh
npm publish
```
