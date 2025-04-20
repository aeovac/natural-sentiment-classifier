# Sentimental

A minimalist sentiment classifier powered by Natural.js.

**Dataset**: [Twitter Sentiment Analysis](https://www.kaggle.com/datasets/jp797498e/twitter-entity-sentiment-analysis/data)

---

### Example Usage

```ts
classifier.classify('Fuck you'); // Returns "Negative"
classifier.classify('I love this!'); // Returns "Positive"
```

---

### Save and Load the Classifier

After training, save the classifier for later use:

```ts
classifier.save('classifier.json');
```

To load it:

```ts
natural.BayesClassifier.load('classifier.json', null, (err, classifier) => {
    console.log(classifier.classify('I love you'));  // Positive
    console.log(classifier.classify('Shut up'));     // Negative
});
```

---

### Installation

1. **Install Dataset**  
   Run the Python script to download and prepare the dataset:
   ```bash
   python install.py
   ```

2. **Run the Code**  
   Execute the script using Bun:
   ```bash
   bun run index.ts
   ```
---

### Notes

- The classifier is trained on a subset of 10,000 tweets from the dataset.
- For optimal performance, ensure the dataset is correctly formatted and accessible.
- This project is designed to be lightweight and straightforward, focusing purely on sentiment analysis without unnecessary complexity.

---
