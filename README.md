# simple

A sentiment classifier based on NaturaJs

Dataset (Twitter Sentiments) - https://www.kaggle.com/datasets/jp797498e/twitter-entity-sentiment-analysis/data

Example
```ts
classifier.classify('Fuck you'); // Return "Negative"
```

For save it and use it:
```ts
classifier.save('filename.json');

natural.BayesClassifier.load('filename.json', null, (err, classifier) => {
    console.log(classifier.classify('I love you'));
    console.log(classifier.classify('Shut up'));
});
```

To install the dataset:
```bash
python install.py
```

To run the code:
```bash
bun run index.ts
```
