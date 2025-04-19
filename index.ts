import * as natural from 'natural';

const classifier = new natural.BayesClassifier();
const D = new TextDecoder();

// Dataset from https://www.kaggle.com/datasets/jp797498e/twitter-entity-sentiment-analysis/data
const datas = Bun.file('./dataset.csv'); 

let x = 10000; // the number of documents to load
for await (const line of datas.stream()) {
    const [label, text] = D.decode(line)
        .split(',')
        .slice(2);

    if(!text || !label) continue;

    classifier.addDocument(text, label);
    
    x--;
    if(x == 0) break;
}

console.log('Dataset loaded');

classifier.train();
console.log(classifier.classify('Fuck you'));